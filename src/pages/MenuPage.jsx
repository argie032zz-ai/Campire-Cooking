import RandomPumpkins from "../components/RandomPumpkins";
const MenuSection = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Chicken Salad",
        price: 299,
        image: "/img/food/Chicken salad.jpg",
        description:
          "Tender, flame-kissed chicken breast served over a crisp bed of field greens and garden vegetables. Tossed in a light, zesty herb vinaigrette and topped with smoky toasted almonds and a hint of charred corn, this salad brings the freshness of the harvest to the warmth of the campfire.",
      },
      {
        name: "Corn Mayo Bread",
        price: 299.5,
        image: "/img/food/corn mayo bread.jpg",
        description:
          "A soft, cloud-like brioche bun topped with a savory-sweet blend of golden sweetcorn and creamy Japanese mayo. Baked until perfectly bronzed, this comforting staple offers a delightful contrast of textures—creamy, crunchy, and pillowy—making it the ultimate fireside snack or meal accompaniment.",
      },
      {
        name: "Egg and Ham Sandwiches with Bnion Broth",
        price: 99.5,
        image: "/img/food/Egg and ham sandwiches with onion soup.jpeg",
        description:
          "Golden-toasted sandwiches alongside a steaming bowl of our signature onion soup. The rich, caramelized savory notes of the broth perfectly complement the salty ham and creamy eggs, providing a warmth that lingers long after the last bite.",
      },
    ],
  },
  {
    title: "MainCourse",
    items: [
      {
        name: "Pot-Au-Feu",
        price: 299,
        image: "/img/food/Pot-Au-Feu.jfif",
        description:
          "Rustic French-style stew features tender, bone-in beef and thick-cut root vegetables, all slow-simmered in a clear, savory broth. Each spoonful captures the deep, concentrated essence of the harvest, offering a soul-warming meal that feels like a gathering around a quiet, glowing fire.",
      },
      {
        name: "Pork Picatta",
        price: 599.5,
        image: "/img/food/Pork picatta.jpeg",
        description:
          "A vibrant, zesty twist on a camp favorite. We take tender pork medallions, lightly flour them, and pan-sear them to golden perfection. Finished in a bright, savory sauce of lemon, butter, and briny capers, this dish offers a sophisticated tang that cuts through the smoky richness of the Campire Cooking experience. It’s light yet deeply satisfying.",
      },
      {
        name: "Suteki Don",
        price: 499,
        image: "img/food/Steak bowl (suteki don).jpg",
        description:
          "Premium bowl features succulent, thick-cut steak seared over high heat to lock in the juices, served over a bed of fluffy, steamed rice. Topped with a savory soy-garlic reduction and a perfectly soft-boiled egg, it’s a bold, high-protein meal that embodies the rustic luxury of Campire Cooking.",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Dorayaki and green tea",
        price: 99,
        image: "img/food/Dorayaki and green tea.jpeg",
        description:
          "Enjoy soft, honey-infused pancakes filled with a sweet, velvety green tea center. This traditional treat is served alongside a steaming cup of earthy tea, perfectly balanced to cleanse the palate and provide a moment of quiet reflection as the fire winds down.",
      },
      {
        name: "Yakisoba Bread",
        price: 109.5,
        image: "/img/food/yakisoba bread.jfif",
        description:
          'A hearty, street-style classic featuring savory stir-fried noodles nestled inside a soft, toasted roll. Topped with zesty pickled ginger and a dusting of green seaweed, this "carb-on-carb" favorite provides a robust, umami-rich energy boost perfect for a day on the trail.',
      },
      {
        name: "Pork and Chicken Tonkatsu",
        price: 159.5,
        image: "/img/food/Pork and chicken tonkatsu sandwiches.png",
        description:
          "Crispy, panko-breaded cutlets—your choice of tender pork or juicy chicken—pressed between thick slices of airy milk bread. Layered with crunchy shredded cabbage and a tangy, bold tonkatsu sauce, these sandwiches deliver a satisfying, high-protein crunch in every bite.",
      },
    ],
  },
];

function MenuPage() {
  // img: (
  //   <img
  //     src=""
  //     alt="Pork and chicken tonkatsu sandwiches"
  //     className="mx-auto flex items-center justify-center w-[100px] h-[100px] object-cover rounded-[5px] mr-[1em] flex-shrink-0"
  //   />

  return (
    <>
      <div className="relative min-h-screen">
        <RandomPumpkins count={100} />

        <section className="py-12 md:px-4">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <h1 className="font-AlegreyaSC font-bold text-center text-3xl mb-8 text-[#2d0f3f] md:text-5xl">
              Our Menu
            </h1>
            {MenuSection.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-2xl text-purple-900 font-bold border-b-2 mb-5 mx-2 font-AlegreyaSC pb-3 border-solid border-b-[rgb(45,15,63)]  md:mx-8 md:text-3xl">
                {section.title}
              </h2>
              <ul className="list-none space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col md:flex-row shadow-orange-300 mx-4 md:mx-16  items-center bg-orange-400 p-5 rounded-xl mb-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-lg mb-4 md:mb-0 md:mr-4 flex-shrink-0"
                    />
                    <div className="flex-1 w-full">
                      <div className="flex justify-between gap-4">
                        <span className="font-bold">{item.name}</span>
                        <span className="text-purple-900 font-bold whitespace-nowrap">PHP {item.price}</span>
                      </div>
                      <p className="mt-2 text-gray-700">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

            {/* <div className="mb-10 ">
              <h2 className="mx-2 font-AlegreyaSC text-lg pb-3 border-b-[1.6px] border-solid border-b-[rgb(45,15,63)] mb-4 md:mx-8 md:text-3xl">
                Appetizers
              </h2>
              <div className="space-y-6">
                {Appetizers.map((Appetizers) => (
                  <div className="shadow-xl shadow-orange-300 mx-4 md:mx-16 flex flex-row items-center bg-orange-400 p-5 rounded-xl mb-6">
                    {Appetizers.img}
                    <div
                      key={Appetizers.dish}
                      className="flex flex-1 flex-col mt-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold font-AlegreyaSC text-lg md:text-2xl">
                          {Appetizers.dish}
                        </span>
                        <span className="float-right text-green-700 font-bold font-AlegreyaSC">
                          PHP {Appetizers.price}
                        </span>
                      </div>
                      <p className="italic mt-2 pr-10 font-CaveatT text-gray text-sm md:text-2xl">
                        "{Appetizers.description}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default MenuPage;
