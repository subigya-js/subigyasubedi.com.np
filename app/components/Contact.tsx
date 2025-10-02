import emailjs from "emailjs-com";
import React, { FormEvent, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please complete all fields");
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
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Failed to send email:", error);
        toast.error(
          `Failed to send message. Error: ${error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.error("Form reference is null");
      toast.error("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-[#1b1c1c] w-[400px] sm:w-[500px] lg:w-[700px] max-w-4xl shadow-md rounded-3xl px-6 sm:px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 sm:mb-6">
          <label
            className="block text-yellow-400 text-sm sm:text-base font-bold mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 bg-neutral-400/5 border-none focus:ring-1 focus:ring-gray-600 text-gray-300 placeholder:text-gray-500/70 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <label
            className="block text-yellow-400 text-sm sm:text-base font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 bg-neutral-400/5 border-none focus:ring-1 focus:ring-gray-600 text-gray-300 placeholder:text-gray-500/70 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
            id="email"
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label
            className="block text-yellow-400 text-sm sm:text-base font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 bg-neutral-400/5 border-none focus:ring-1 focus:ring-gray-600 text-gray-300 placeholder:text-gray-500/70 leading-tight focus:outline-none focus:shadow-outline min-h-24 sm:min-h-32 max-h-36 sm:max-h-48 text-sm sm:text-base"
            id="message"
            placeholder="Write your message here..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          ></textarea>
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <button
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-200/80 hover:scale-105 duration-200 w-full sm:w-fit text-black px-4 py-3 rounded-xl text-sm sm:text-base font-medium justify-center"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : `Send`} <GoArrowUpRight size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
