import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from '../../components/header'


const Form= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2j8xymv", // Replace with your EmailJS service ID
        "template_zlfcunb", // Replace with your EmailJS template ID
        formData,
        "j33VJWXY8CFr_5PiP" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Form submitted successfully!");
        },
        (error) => {
          alert("Failed to send form. Please try again.");
        }
      );
  };

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900 py-20">
      <form onSubmit={handleSubmit} className="w-1/3 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Fill in Your Details</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg text-center"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Form;
