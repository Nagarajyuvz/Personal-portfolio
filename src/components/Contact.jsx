import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import backgroundImg from "../assets/images/background.webp";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleForm(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!", {
        style: { backgroundColor: "#303030", color: "#fff" },
      });
      return;
    }

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/mathiyalagumeenal@gmail.com", {
        name,
        email,
        message,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Message sent successfully!", {
            style: { backgroundColor: "#303030", color: "#fff" },
          });
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          style: { backgroundColor: "#303030", color: "#fff" },
        });
      });
  }

  return (
    <>
      <Toaster />
      <section id="contact" className="w-5/6 rounded-xl mx-auto bg-cover" style={{ backgroundImage: `url(${backgroundImg.src})` }}>
        <div className="sm:p-24 p-8 mx-auto mb-24">
          <div className="text-center pb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]">
              Contact Me
            </h1>
            <p className="text-primary sm:text-2xl text-lg font-semibold mt-4">
              I'd love to hear from you — let's connect! 👋
            </p>
          </div>
          <form onSubmit={handleForm} className="xl:px-24 sm:px-0">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
              <div>
                <label className="text-primary font-semibold">
                  Your Name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-black rounded-md h-10 px-2 mt-1"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="text-primary font-semibold">
                  Email Address
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-black rounded-md h-10 px-2 mt-1"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="py-4">
              <label className="text-primary font-semibold">
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-black rounded-md h-28 p-2 mt-1"
                  name="message"
                  id="message"
                  required
                ></textarea>
              </label>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-white font-bold rounded-md hover:bg-gray-300 transition"
              >
                Send Message 🚀
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
