import RandomPumpkins from "../components/RandomPumpkins";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted: ", formData);

    alert("Thank you for contacting Campire Cooking");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="relative min-h-screen">
        <RandomPumpkins count={100} />

        <section className="h-[100vh] py-12">
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <h1 className="font-AlegreyaSC font-bold text-center text-3xl mb-8 text-[#2d0f3f]">
              Contact Us
            </h1>
            <div className="mb-8 space-y-2 text-center">
              <p>
                <strong>Address: </strong> Brgy. Tiguma, Pagadian City,
                Philippines
              </p>
              <p>
                <strong>Phone:</strong> (+63) 954-4122-322
              </p>
              <p>
                <strong>Email:</strong> info@Campfirecooking.ph
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto">
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-[var(--mint-fresh)] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d0f3f]"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="email">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-[var(--mint-fresh)] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d0f3f]"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold" htmlFor="message">
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-[var(--mint-fresh)] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d0f3f]"
                />
              </div>

              <button
                className="hover:bg-[#aa5dc6] bg-[#2d0f3f] text-white py-3 px-6 rounded-md transition-colors duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
export default Contact;
