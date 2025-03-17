import React, { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Please complete all fields");
      setIsSubmitting(false);
      return;
    }

    if (form.current) {
      try {
        console.log("Attempting to send email...");
        const result = await emailjs.sendForm(
          "service_0f7jqzc",
          "template_s3dbepq",
          form.current,
          "r2LJxizAL64rZzdGG"
        );
        console.log("Email sent successfully:", result.text);
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Failed to send email:", error);
        setSubmitMessage(
          `Failed to send message. Error: ${error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.error("Form reference is null");
      setSubmitMessage("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-yellow-400 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required

          />
        </div>
        <div className="mb-4">
          <label
            className="block text-yellow-400 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="john@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required

          />
        </div>
        <div className="mb-6">
          <label
            className="block text-yellow-400 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {submitMessage && (
            <p
              className={`text-sm italic ${submitMessage.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
                }`}
            >
              {submitMessage}
            </p>
          )}
        </div>
      </form>

      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-10">
          <a
            href="https://www.facebook.com/subigya.jsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/subedi.js/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/subigya-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/subigya-js"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://x.com/subigya_js"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-transform duration-300 ease-in-out transform hover:scale-125"
          >
            <FaXTwitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
