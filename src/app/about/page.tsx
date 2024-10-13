import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import p1 from "@/assets/360_F_432151892_oQ3YQDo2LYZPILlEMnlo55PjjgiUwnQb.jpg"
import p2 from "@/assets/istockphoto-1049653176-612x612.jpg"
import p3 from "@/assets/premium_photo-1682092016074-b136e1acb26e.jpeg"
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
      <NavBar/>
       {/* Hero Section */}
       <section className="bg-green-500 text-white text-center py-10 mt-1">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-4">
          Learn more about our mission and the team behind the Gardening Tips & Advice Platform.
        </p>
      </section>

      {/* About Us Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Gardening Tips & Advice Platform, we believe that gardening is more than just planting seeds. It's about nurturing growth, creating beauty, and cultivating a connection with nature. Our mission is to empower gardeners of all levels, from beginners to experts, by providing the knowledge, tools, and community to enhance their gardening experiences.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We strive to create a vibrant, welcoming community where users can share gardening tips, exchange ideas, and explore new techniques that foster a sustainable and enjoyable gardening lifestyle. Whether you're looking for advice on plant care, seasonal guides, or connecting with fellow gardening enthusiasts, we're here to support your journey.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {/* Team Member 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={p1}
              alt="Team Member 1"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
            <p className="text-gray-700 mt-4">
              John is passionate about gardening and sustainability. With over 10 years of experience, he founded the platform to share his knowledge and help others grow beautiful, sustainable gardens.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={p2}
              alt="Team Member 2"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Lead Content Creator</p>
            <p className="text-gray-700 mt-4">
              Jane has a deep love for plants and garden design. She curates the content on the platform, ensuring it's accurate, engaging, and helpful for users at all experience levels.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={p3}
              alt="Team Member 3"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
            <p className="text-gray-600">Community Manager</p>
            <p className="text-gray-700 mt-4">
              Michael manages the community and user interactions. He ensures that the platform remains a positive, engaging place for gardeners to share ideas and learn from each other.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have any questions or want to learn more about our platform? Feel free to reach out to us!
        </p>
        <Link href="/contact">
          <p className="bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-700 hover:text-white transition duration-300">
            Contact Us
          </p>
        </Link>
      </section>
       <Footer/>
    </div>
  );
};

export default page;