import RandomPumpkins from "../components/RandomPumpkins";

function AboutPage() {
  return (
    <>
      <div className="relative min-h-screen">
        <RandomPumpkins count={100} />

        <section className="py-12">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <h1 className="font-AlegreyaSC font-bold text-center text-3xl mb-8 text-[#2d0f3f] md:text-5xl">
              About Us
            </h1>
          </div>

          <div className="space-y-4">
            <p className="leading-relaxed font-CaveatT text-lg mx-8 md:text-2xl md:mx-24 text-justify">
              "Campire Cooking" is a culinary style that bridges the gap between
              traditional outdoor open-fire techniques and the refined
              presentation of a modern bistro. It emphasizes the use of
              high-heat searing, natural smoke, and hearty, communal portions.
              The goal is to capture the rustic soul of a campfire while
              maintaining the balance and sophistication of professional kitchen
              preparation.
            </p>
            <p className="leading-relaxed font-CaveatT text-lg mx-8 md:text-2xl md:mx-24 text-justify">
              The menu focuses on rich, umami-forward flavors, often featuring
              slow-simmered stews like Pot-Au-Feu and grilled proteins. By
              incorporating elements like ginger-fried pork or charred
              vegetables, the cooking style highlights the natural sweetness of
              fresh ingredients intensified by fire. This approach turns simple,
              rugged comfort food into an elevated dining experience.
            </p>
            <p className="leading-relaxed font-CaveatT text-lg mx-8 md:text-2xl md:mx-24 text-justify">
              In this style, texture and contrast are vital. You’ll find soft,
              pillowy breads filled with creamy corn or crunchy, golden-fried
              katsu paired with crisp cabbage. This interplay between the soft
              and the "crunch" mimics the varied textures found in traditional
              wilderness cooking, where fresh-baked staples meet fire-blackened
              meats.
            </p>
            <p className="leading-relaxed font-CaveatT text-lg mx-8 md:text-2xl md:mx-24 text-justify">
              Campire Cooking is about international comfort. It blends global
              favorites from Japanese Gyudon and Dorayaki to classic ham and egg
              sandwiches into a single, cohesive theme of warmth. It’s a
              celebration of the universal feeling of gathering around a flame
              to enjoy a meal that is both nourishing and expertly crafted.
            </p>
          </div>
        </section>
        <section className="pb-12">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <img
              src="/img/banner.png"
              alt="Campire Cooking banner"
              className="block w-full h-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
