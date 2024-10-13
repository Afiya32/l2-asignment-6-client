"use client"
import React, { useState } from 'react';

import Head from "next/head";
import Link from "next/link";
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
const page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [statusMessage, setStatusMessage] = useState("");
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("Sending...");
    
        // Simulate a form submission (You can replace this with actual backend code)
        setTimeout(() => {
          setStatusMessage("Message Sent! Thank you for contacting us.");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });
        }, 2000);
      };
  return (
    <>
    <NavBar/>
     <Head>
        <title>Contact Us - Gardening Tips & Advice</title>
        <meta name="description" content="Contact page for Gardening Tips & Advice Platform" />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">We'd love to hear from you! Please fill out the form below with any questions or feedback you may have.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              placeholder="Enter your message"
              rows={6}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {statusMessage && (
          <div className="mt-6">
            <p className={`text-lg ${statusMessage.includes("Sent") ? "text-green-600" : "text-red-600"}`}>
              {statusMessage}
            </p>
          </div>
        )}

        <div className="mt-6">
          <p>If you need additional support, you can also reach us at:</p>
          <p className="text-blue-600">
            <Link href="mailto:biplobguru123@gmail.com">biplobguru123@gmail.com</Link>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;