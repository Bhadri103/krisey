import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        if (el instanceof Element) {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          if (rect.top <= windowHeight * 0.85) {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-8");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } else {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const businessInquirySubjects = [
    { value: "sales", label: "Product Sales & Pricing" },
    { value: "support", label: "Technical Support" },
    { value: "dealership", label: "Dealership Inquiry" },
    { value: "consultation", label: "Project Consultation" },
    { value: "general", label: "General Inquiry" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3 block">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Get in Touch with <span className="text-[#E63946]">Krisey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for project consultation, dealership opportunities, or technical support, our team is ready to help you build better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Information Cards (Left Side) */}
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-red-100 transition-shadow">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-red-50 group-hover:bg-red-600 transition-colors duration-300 p-4 rounded-2xl mr-5">
                    <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                Address
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Krisey Construction Solutions
                      <br />
                      123 Industrial Estate, Phase II, Sector A
                      <br />
                      Metro City - 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-red-50 group-hover:bg-red-600 transition-colors duration-300 p-4 rounded-2xl mr-5">
                    <Phone className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="tel:+1234567890" className="hover:text-red-600 transition-colors block">Mob: +123 456 7890</a>
                      <a href="tel:1800000000" className="hover:text-red-600 transition-colors block">Toll Free: 1800 000 0000</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-red-50 group-hover:bg-red-600 transition-colors duration-300 p-4 rounded-2xl mr-5">
                    <Mail className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="mailto:contact@krisey.com" className="hover:text-red-600 transition-colors block">contact@krisey.com</a>
                      <a href="mailto:support@krisey.com" className="hover:text-red-600 transition-colors block">support@krisey.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-red-50 group-hover:bg-red-600 transition-colors duration-300 p-4 rounded-2xl mr-5">
                    <Clock className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Working Hours
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-3 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 h-full border border-gray-100 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-bl-full -z-10 opacity-50 pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-100 p-3 rounded-xl text-red-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-500 mt-1 font-medium">
                    We usually respond within 24 hours.
                  </p>
                </div>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-5 mb-8 rounded-xl flex items-center gap-4 animate-fade-in">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Message Sent Successfully!</p>
                    <p className="text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && !Object.values(errors).some((error) => error) && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-5 mb-8 rounded-xl flex items-center gap-4 animate-fade-in">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-red-900">Submission Error</p>
                    <p className="text-sm">Could not send message. Please ensure all fields are correct or try again later.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3.5 bg-white border rounded-xl transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium mt-1.5">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3.5 bg-white border rounded-xl transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      placeholder="+123 456 7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                      Subject Inquiry
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 appearance-none"
                    >
                      <option value="" disabled className="text-gray-400">Select a subject</option>
                      {businessInquirySubjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-5 py-4 bg-white border rounded-xl transition-all duration-200 outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-medium mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-24 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="h-[400px] w-full bg-gray-100 rounded-2xl relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.808064560783!2d76.9538392!3d11.004555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Krisey Location Map"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </section> 

      </div>
    </div>
  );
};

export default Contact;