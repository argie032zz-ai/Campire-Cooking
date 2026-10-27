import { useEffect, useRef, useState } from "react";

const BASE_SPEED = 0.06; // drift speed in pixels per millisecond (about 60px per second)
const SPIN_SPEED = 0.015; // spin speed in degrees per millisecond
const MIN_WIDTH = 640; // screens narrower than this (small phones) don't show it
const CARD_W = 300; // size of the card when opened
const CARD_H = 196;

function BouncingBunny({
  src = "/img/hehe.jpg",
  size = 110, // size of the circle
  name = "Zelliene",
  details = [
    "Role: Head Pastry Taste-Tester",
    "Favorite: Carrot cake",
    "Status: Hopping around",
  ],
}) {
  const elRef = useRef(null);
  const [open, setOpen] = useState(false); // false = circle, true = card
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= MIN_WIDTH,
  );

  // Show or hide when the screen is resized or rotated
  useEffect(() => {
    const onResize = () => setVisible(window.innerWidth >= MIN_WIDTH);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Everything that changes every frame lives in a ref,
  // so React doesn't re-render 60 times a second.
  const s = useRef({
    x: 60, // current position on the screen
    y: 100,
    vx: BASE_SPEED, // current speed sideways
    vy: BASE_SPEED * 0.8, // current speed up/down
    angle: 0, // current spin angle
    open: false, // copy of open that the animation loop can read
    dragging: false, // true while you are holding it
    moved: false, // true if you moved the pointer enough to count as a drag (not a click)
    startX: 0, // where the press started
    startY: 0,
    grabX: 0, // where inside the element you grabbed it
    grabY: 0,
    prevVx: 0, // speed before you grabbed it, restored if it was just a click
    prevVy: 0,
    lastX: 0, // last drag position and time, used to measure the throw
    lastY: 0,
    lastT: 0,
  });

  // The animation loop. It only runs while the bunny is visible.
  useEffect(() => {
    if (!visible) return;
    const el = elRef.current;
    const st = s.current;
    let frameId;
    let prev = performance.now();

    const tick = (now) => {
      const dt = Math.min(now - prev, 50); // time since last frame (capped so tab switches don't cause jumps)
      prev = now;

      // The "walls" are the edges of the browser window.
      // offsetWidth/offsetHeight give the CURRENT size, even mid-transition,
      // so the card never pokes out of the screen while it grows.
      const maxX = Math.max(
        document.documentElement.clientWidth - el.offsetWidth,
        0,
      );
      const maxY = Math.max(window.innerHeight - el.offsetHeight, 0);

      if (st.open) {
        // Card is open: gently untwist to the nearest upright angle so it's readable
        const upright = Math.round(st.angle / 360) * 360;
        st.angle += (upright - st.angle) * Math.min(1, dt * 0.006);
      } else {
        st.angle += SPIN_SPEED * dt; // slow spin
      }

      if (!st.dragging) {
        st.x += st.vx * dt;
        st.y += st.vy * dt;

        // Bounce off the walls by flipping the direction
        if (st.x <= 0) {
          st.x = 0;
          st.vx = Math.abs(st.vx);
        } else if (st.x >= maxX) {
          st.x = maxX;
          st.vx = -Math.abs(st.vx);
        }
        if (st.y <= 0) {
          st.y = 0;
          st.vy = Math.abs(st.vy);
        } else if (st.y >= maxY) {
          st.y = maxY;
          st.vy = -Math.abs(st.vy);
        }

        // Ease the speed back to normal (the card drifts at half speed so it's easier to read)
        const base = st.open ? BASE_SPEED * 0.5 : BASE_SPEED;
        const speed = Math.hypot(st.vx, st.vy);
        if (speed < 0.0001) {
          st.vx = base;
          st.vy = base * 0.8;
        } else if (speed < base) {
          st.vx *= base / speed;
          st.vy *= base / speed;
        } else if (speed > base) {
          const scale = Math.max(base / speed, Math.pow(0.999, dt));
          st.vx *= scale;
          st.vy *= scale;
        }
      }

      el.style.transform = `translate3d(${st.x}px, ${st.y}px, 0) rotate(${st.angle}deg)`;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  // Pressed: start dragging (we don't know yet if it's a click or a drag)
  const handlePointerDown = (e) => {
    const st = s.current;
    e.currentTarget.setPointerCapture(e.pointerId); // keep getting events even if the cursor leaves it
    st.dragging = true;
    st.moved = false;
    st.startX = e.clientX;
    st.startY = e.clientY;
    st.grabX = e.clientX - st.x;
    st.grabY = e.clientY - st.y;
    st.lastX = st.x;
    st.lastY = st.y;
    st.lastT = performance.now();
    st.prevVx = st.vx;
    st.prevVy = st.vy;
    st.vx = 0;
    st.vy = 0;
  };

  // Moved while holding: follow the pointer and measure how fast it moves
  const handlePointerMove = (e) => {
    const st = s.current;
    if (!st.dragging) return;

    // Moving more than 5px means it's a drag, not a click
    if (Math.hypot(e.clientX - st.startX, e.clientY - st.startY) > 5)
      st.moved = true;
    if (!st.moved) return;

    const el = elRef.current;
    const maxX = Math.max(
      document.documentElement.clientWidth - el.offsetWidth,
      0,
    );
    const maxY = Math.max(window.innerHeight - el.offsetHeight, 0);
    const newX = Math.min(Math.max(e.clientX - st.grabX, 0), maxX);
    const newY = Math.min(Math.max(e.clientY - st.grabY, 0), maxY);

    const now = performance.now();
    const dt = now - st.lastT;
    if (dt > 0) {
      // smooth the measured speed so the throw doesn't feel jittery
      st.vx = 0.5 * st.vx + (0.5 * (newX - st.lastX)) / dt;
      st.vy = 0.5 * st.vy + (0.5 * (newY - st.lastY)) / dt;
    }
    st.x = newX;
    st.y = newY;
    st.lastX = newX;
    st.lastY = newY;
    st.lastT = now;
  };

  // Let go: either toggle the card (click) or throw it (drag)
  const handlePointerUp = (e) => {
    const st = s.current;
    st.dragging = false;

    if (!st.moved && e.type === "pointerup") {
      // It was a click: go back to drifting and toggle circle <-> card
      st.vx = st.prevVx;
      st.vy = st.prevVy;
      st.open = !st.open;
      setOpen(st.open);
      return;
    }

    // It was a drag: if you stopped before letting go, don't throw it
    if (performance.now() - st.lastT > 80) {
      st.vx = 0;
      st.vy = 0;
    }
    // cap the throw speed
    const speed = Math.hypot(st.vx, st.vy);
    if (speed > 1) {
      st.vx /= speed;
      st.vy /= speed;
    }
  };

  if (!visible) return null; // small phones: render nothing

  // Smooth morph: these properties animate between the circle and card values
  const morph = "0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  const avatar = open ? 72 : size - 8; // the photo shrinks into the avatar spot

  return (
    <div
      ref={elRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="fixed top-0 left-0 z-50 overflow-hidden border-solid shadow-lg cursor-grab active:cursor-grabbing select-none"
      style={{
        width: open ? CARD_W : size,
        height: open ? CARD_H : size,
        borderRadius: open ? 24 : size / 2,
        borderWidth: open ? 3 : 4,
        borderColor: open ? "#1e293b" : "#ffffff",
        backgroundColor: "#ffffff",
        touchAction: "none",
        // only these animate (NOT transform, which the loop updates every frame)
        transition: `width ${morph}, height ${morph}, border-radius ${morph}, border-width ${morph}, border-color ${morph}`,
      }}
    >
      {/* The bunny photo: fills the circle, then shrinks to the card's avatar spot */}
      <img
        src={src}
        alt="bnuuy"
        draggable={false}
        className="absolute rounded-full object-cover pointer-events-none"
        style={{
          top: open ? 16 : 0,
          left: open ? 16 : 0,
          width: avatar,
          height: avatar,
          border: open ? "2px solid #1e293b" : "0px solid #1e293b",
          transition: `all ${morph}`,
        }}
      />

      {/* Name, to the right of the avatar */}
      <div
        className="absolute flex items-center pointer-events-none"
        style={{
          top: 16,
          left: 102,
          right: 16,
          height: 72,
          opacity: open ? 1 : 0,
          // fades in a little after the morph starts, fades out right away
          transition: open ? "opacity 0.3s ease 0.25s" : "opacity 0.15s ease",
        }}
      >
        <span className="text-xl font-bold text-slate-800">{name}</span>
      </div>

      {/* The three detail lines under the avatar */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 102,
          left: 16,
          right: 16,
          opacity: open ? 1 : 0,
          transition: open ? "opacity 0.3s ease 0.3s" : "opacity 0.15s ease",
        }}
      >
        {details.map((line) => (
          <p key={line} className="text-sm text-slate-600 leading-6">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BouncingBunny;