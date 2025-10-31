import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.webp";
import linkedinQR from "../../assets/linkedin_qr.png";
import instagramQR from "../../assets/instagram_qr.jpeg";
import {
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id_here",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id_here",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get In <span className="text-[#f98619]">Touch</span> With Us
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about our community? Want to collaborate or share
            your insights? We'd love to hear from you! Connect with us through
            multiple channels and become part of the TechFusionHub family.
          </p>
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            {/* Instagram QR Code */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] rounded-2xl p-2 shadow-2xl mb-3">
                <img
                  src={instagramQR}
                  alt="Instagram QR Code"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <span className="text-[#f98619] font-semibold">
                Follow us on Instagram
              </span>
            </div>

            {/* LinkedIn QR Code */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#0077b5] via-[#005885] to-[#004471] rounded-2xl p-2 shadow-2xl mb-3">
                <img
                  src={linkedinQR}
                  alt="LinkedIn QR Code"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <span className="text-[#2596be] font-semibold">
                Connect on LinkedIn
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <main className="flex-grow">
        <section className="flex flex-col lg:flex-row items-start justify-center gap-12 px-8 py-16 pb-24 max-w-6xl w-full mx-auto">
          {/* Left: Contact Information */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold text-[#000b1d] mb-6">
              Contact Information
            </h2>
            <p className="text-[#2596be] mb-8 max-w-md text-center lg:text-left">
              Need to get in touch with us? Either fill out the form with your
              inquiry or use the contact details below.
            </p>
            {/* Logo */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="w-50 h-50 ml-20 bg-[#000b1d] rounded-full shadow-2xl flex items-center justify-center border-4 border-[#f98619]">
                <img
                  src={Logo}
                  alt="TechFusion Hub Logo"
                  className="w-38 h-38 object-contain rounded-full"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 w-full max-w-md mb-8 mt-8">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-[#f98619] rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#000b1d]">Location</div>
                  <div className="text-sm text-gray-600">
                    Karur 639113, Tamil Nadu, India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-[#2596be] rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#000b1d]">Email</div>
                  <div className="text-sm text-gray-600">
                    techfusionhub.in@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-[#000b1d] rounded-full flex items-center justify-center">
                  <FaInstagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#000b1d]">Instagram</div>
                  <div className="text-sm text-gray-600">
                    <a
                      href="https://www.instagram.com/techfusion.hub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#f98619] transition-colors"
                    >
                      @techfusion.hub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 max-w-lg w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#e0e0e0]">
              <h3 className="text-2xl font-bold text-[#000b1d] mb-6 text-center">
                Send us a Message
              </h3>
              <form
                ref={form}
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-green-700 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <FaTimesCircle className="text-red-500 text-xl" />
                    <span className="text-red-700 font-medium">
                      Failed to send message. Please try again or contact us
                      directly.
                    </span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#000b1d] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-[#2596be] focus:outline-none focus:ring-2 focus:ring-[#f98619] focus:border-transparent text-[#000b1d] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#000b1d] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-[#2596be] focus:outline-none focus:ring-2 focus:ring-[#f98619] focus:border-transparent text-[#000b1d] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#000b1d] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-lg border border-[#2596be] focus:outline-none focus:ring-2 focus:ring-[#f98619] focus:border-transparent text-[#000b1d] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#000b1d] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-[#2596be] focus:outline-none focus:ring-2 focus:ring-[#f98619] focus:border-transparent text-[#000b1d] resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#f98619] to-[#e07612] hover:from-[#e07612] hover:to-[#d06610] disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:hover:translate-y-0 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#000b1d] text-white py-8">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <p className="mb-4">
              &copy; 2025 TechFusionHub. Building awareness in the tech
              community.
            </p>
            <div className="flex justify-center space-x-6"></div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Contact;
