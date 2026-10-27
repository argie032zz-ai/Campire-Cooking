import { Link } from "react-router-dom";
import e from "../assets/img/404nf.png";
import RandomPumpkins from "../components/RandomPumpkins";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] text-center px-5 py-[50px]">
      <RandomPumpkins count={20} />
      <img
        src={e}
        alt="error 404 page not found."
        className="w-[500px] h-[250px] object-cover"
      />
      <p className="text-[0.7em] md:text-[1.2em] text-[#d9534f] mb-8">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="inline-block px-[1.25rem] py-[0.75rem] rounded-[10rem] text-white uppercase
          text-[0.7em] md:text-base tracking-[0.15rem] transition-all duration-300
          relative overflow-hidden z-[1] no-underline
          after:content-[''] after:absolute after:bottom-0 after:left-0
          after:w-full after:h-full after:bg-[#00ccff] after:rounded-[10rem] after:z-[-2]
          before:content-[''] before:absolute before:bottom-0 before:left-0
          before:w-0 before:h-full before:bg-[color-mix(in_srgb,black_15%,#249a2c)]
          before:rounded-[10rem] before:z-[-1] before:transition-all before:duration-300
          hover:before:w-full"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
