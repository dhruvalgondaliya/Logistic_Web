import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (value: string | undefined) => {
    if (value) {
      const formattedNumber = formatPhoneNumberIntl(value); // Format phone number with international formatting
      setFormData({
        ...formData,
        phone: formattedNumber
      });
    } else {
      setFormData({
        ...formData,
        phone: "" // Reset if no value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_xlp9o7o",
        "template_qovop2a",
        formData,
        "sfzP8dARsTfHsyPE9"
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
          toast.error(
            `Failed to send the message. Please try again. ${error.message}`,
            {
              position: "top-right"
            }
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
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
            <PhoneInput
              international
              defaultCountry="IN" 
              value={formData.phone || ""}
              onChange={handlePhoneChange}
              className="w-full px-4 py-3 border border-white rounded-lg focus:ring-1 focus:ring-blue-500  bg-white"
              placeholder="Enter phone number"
              required
            />
          </div>
          {/* Dropdown for services */}
          <div className="relative">
            <label className="flex justify-between text-sm mb-2">
              <span className="text-orange-500">Services</span>
            </label>
            <div className="relative">
              <div
                className="w-full px-4 py-3 border border-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white cursor-pointer"
                onClick={handleIconClick}
              >
                <span>{formData.service || "Select Service"}</span>
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  onClick={handleIconClick}
                >
                  {isOpen ? (
                    <IoIosArrowUp className="text-gray-500" />
                  ) : (
                    <IoIosArrowDown className="text-gray-500" />
                  )}
                </div>
              </div>
              {isOpen && (
                <div className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-1 z-10">
                  <div
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData({ ...formData, service: "Wholesale FBA Prep" });
                      setIsOpen(false);
                    }}
                  >
                    Wholesale FBA Prep
                  </div>
                  <div
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData({ ...formData, service: "Private Labeling" });
                      setIsOpen(false);
                    }}
                  >
                    Private Labeling
                  </div>
                  <div
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData({ ...formData, service: "Online Arbitrage" });
                      setIsOpen(false);
                    }}
                  >
                    Online Arbitrage
                  </div>
                  <div
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData({ ...formData, service: "Retail Arbitrage" });
                      setIsOpen(false);
                    }}
                  >
                    Retail Arbitrage
                  </div>
                  <div
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        service: "Fulfillment By Merchant (FBM)"
                      });
                      setIsOpen(false);
                    }}
                  >
                    Fulfillment By Merchant (FBM)
                  </div>
                  <div
                    className="p-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        service: "Fulfillment Services & Shipping"
                      });
                      setIsOpen(false);
                    }}
                  >
                    Fulfillment Services & Shipping
                  </div>
                </div>
              )}
            </div>
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
