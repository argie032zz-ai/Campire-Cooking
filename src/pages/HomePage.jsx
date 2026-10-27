import RandomPumpkins from "../components/RandomPumpkins";

function HomePage() {
  const testimonials = [
    {
      message: "The best dining experience I've ever had! ",
      name: "Gordon Ramsey",
    },
    {
      message: "Amazing Food and exellent service.",
      name: "Sui",
    },
    {
      message: "The ambiance is so cozy and intimate.",
      name: "Dora-chan",
    },
    {
      message: "The staff are friendly and attentive.",
      name: "Fel",
    },
    {
      message: "I love the variety of dishes they offer.",
      name: "Zelliene",
    },
    {
      message: "lameh kehyo, okeh kehyo",
      name: "Argie Ortega",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen">
        <RandomPumpkins count={100} />

        <section className="relative overflow-hidden py-20 md:py-24 text-white text-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 blur-md"
            style={{ backgroundImage: "url('/img/banner.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
            <h1 className="pb-4 md:pb-8 font-Neonderthaw font-bold mb-4 text-[#aa5dc6] text-5xl inline-block bg-[linear-gradient(-225deg,var(--bg-soft)_0%,var(--mint-fresh)_29%,var(--lavender-calm)_67%,var(--text-dark)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] animate-[textclip_2s_linear_infinite] md:text-[6em]">
              Welcome to Campire Cooking
            </h1>
            <p className="text-[1em] md:text-[1.5em]">
              Experience the best cuisine in the city.
              <br />
              Enjoy our signature dishes and cozy ambiance.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <h2 className="font-AlegreyaSC font-bold text-center text-3xl mb-4 text-[#2d0f3f] md:text-[2.5rem]">
              Customer Testimonials
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white p-4 border-l-4 border-[#2d0f3f] shadow-sm"
                >
                  <p className="italic">"{testimonial.message}"</p>
                  <span className="block mt-2 font-bold text-right text-gray-600">
                    {" "}
                    ~{testimonial.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
