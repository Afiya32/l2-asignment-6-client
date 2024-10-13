'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const gardeningQuotes = [
    "Gardening adds years to your life and life to your years.",
    "To plant a garden is to believe in tomorrow.",
    "The love of gardening is a seed once sown that never dies."
  ];
  const featuredPosts = [
    { id: 1, title: '10 Best Gardening Tips for Beginners', category: 'Vegetables', slug: '/post/1' },
    { id: 2, title: 'How to Grow Roses Like a Pro', category: 'Flowers', slug: '/post/2' },
    { id: 3, title: 'Landscape Gardening: A Complete Guide', category: 'Landscaping', slug: '/post/3' },
  ];
  
  const Homepage = () => {
   
  return (
    <div>
  {/* hero part */}

  <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/narrow-pathway-garden-surrounded-by-lot-colorful-flowers_181624-13183.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h1 className="text-4xl font-bold">Enhance Your Gardening Skills</h1>
    <p className="mt-4 text-lg">Discover tips, advice, and expert knowledge from the gardening community.</p>
      <button className="">
      <Link href="/posts" className="bg-green-700 px-6 py-3 mt-6 inline-block text-white font-semibold rounded">Explore Gardening Tips</Link>
      </button>
    </div>
  </div>
</div>
  </div>
  <div id="item2" className="carousel-item w-full">
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://t3.ftcdn.net/jpg/08/17/67/94/360_F_817679423_QV5RCwTbkRIO12Et109UrVWRu9BmaMJc.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h1 className="text-4xl font-bold">Enhance Your Gardening Skills</h1>
    <p className="mt-4 text-lg">Discover tips, advice, and expert knowledge from the gardening community.</p>
      <button className="">
      <Link href="/posts" className="bg-green-700 px-6 py-3 mt-6 inline-block text-white font-semibold rounded">Explore Gardening Tips</Link>
      </button>
    </div>
  </div>
</div>
  </div>
  <div id="item3" className="carousel-item w-full">
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHmakL8F6z4cHD-6P1tlxMgVPjwzU2s2AAQ&s)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h1 className="text-4xl font-bold">Enhance Your Gardening Skills</h1>
    <p className="mt-4 text-lg">Discover tips, advice, and expert knowledge from the gardening community.</p>
      <button className="">
      <Link href="/posts" className="bg-green-700 px-6 py-3 mt-6 inline-block text-white font-semibold rounded">Explore Gardening Tips</Link>
      </button>
    </div>
  </div>
</div>
  </div>
  <div id="item4" className="carousel-item w-full">
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://parklandscapingsupplies.ca/cdn/shop/products/garden-mix-112787_700x460.jpg?v=1614036840)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h1 className="text-4xl font-bold">Enhance Your Gardening Skills</h1>
    <p className="mt-4 text-lg">Discover tips, advice, and expert knowledge from the gardening community.</p>
      <button className="">
      <Link href="/posts" className="bg-green-700 px-6 py-3 mt-6 inline-block text-white font-semibold rounded">Explore Gardening Tips</Link>
      </button>
    </div>
  </div>
</div>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>


  {/* Featured Posts Section */}
  <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Gardening Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <div key={post.id} className="border rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 mb-4">Category: {post.category}</p>
              <Link href={post.slug} className="text-green-600 hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </section>
 
 {/*   Gardening Quotes Section */} 

 <section className="bg-green-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Inspiring Gardening Quotes</h2>
        <div className="container mx-auto flex justify-around items-center">
          {gardeningQuotes.map((quote, index) => (
            <blockquote key={index} className="text-center text-lg italic text-gray-700">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Recent Gardening Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {/* Example Images */}
          <div className="relative w-full h-64 bg-gray-300">
            <Image
              src=""
              alt="Gardening 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-64 bg-gray-300">
            <Image
              src=""
              alt="Gardening 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-64 bg-gray-300">
            <Image
              src=""
              alt="Gardening 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-64 bg-gray-300">
            <Image
              src=""
              alt="Gardening 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
          {/* Categories Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Gardening Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/categories/vegetables" className="bg-green-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Vegetables</h3>
          </Link>
          <Link href="/categories/flowers" className="bg-green-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Flowers</h3>
          </Link>
          <Link href="/categories/landscaping" className="bg-green-200 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Landscaping</h3>
          </Link>
        </div>
      </section>




    </div>
  );
};

export default Homepage;