import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "", // Matches {{from_name}} in EmailJS template
    email: "", // Matches {{email}} in EmailJS template
    phone: "", // Matches {{phone}} in EmailJS template
    service: "", // Matches {{service}} in EmailJS template
    message: "" // Matches {{message}} in EmailJS template
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xlp9o7o", // Replace with your EmailJS service ID
        "template_qovop2a", // Replace with your EmailJS template ID
        formData,
        "sfzP8dARsTfHsyPE9" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", {
            position: "top-right"
          });
          setFormData({
            from_name: "",
            email: "",
            phone: "",
            service: "",
            message: ""
          });
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send the message. Please try again.", {
            position: "top-right"
          });
        }
      );
  };

  return (
    <>
      <form
        className="space-y-6 bg-[#023B4C] p-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span className="text-orange-500">Name</span>
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="First and Last Name"
              required
            />
          </div>
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span className="text-orange-500">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="yourcompany@domain.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span className="text-orange-500">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="+91 12345 67890"
              required
            />
          </div>
          <div>
            <label className="flex justify-between text-sm mb-2">
              <span className="text-orange-500">Services</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
              required
            >
              <option value="">Select Service</option>
              <option value="Wholesale FBA Prep">Wholesale FBA Prep</option>
              <option value="Private Labeling">Private Labeling</option>
              <option value="Online Arbitrage">Online Arbitrage</option>
              <option value="Retail Arbitrage">Retail Arbitrage</option>
              <option value="Fulfillment By Merchant (FBM)">
                Fulfillment By Merchant (FBM)
              </option>
              <option value="Fulfillment Services & Shipping">
                Fulfillment Services & Shipping
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 text-orange-500">
            Your message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white resize-none"
            placeholder="Type message*"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
        >
          Send message
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
