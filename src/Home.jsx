import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import {
  MdArrowDownward,
  MdCalendarMonth,
  MdOutlineArrowOutward,
} from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import img1 from "./assests/neom-STV2s3FYw7Y-unsplash.jpg";
import img2 from "./assests/adam-kool-ndN00KmbJ1c-unsplash.jpg";
import img3 from "./assests/robert-lukeman-_RBcxo9AU-U-unsplash.jpg";
import img4 from "./assests/dawid-zawila--G3rw6Y02D0-unsplash.jpg";
import img5 from "./assests/nathan-anderson-L95xDkSSuWw-unsplash.jpg";
import { CiBrightnessUp, CiLocationOn, CiTimer } from "react-icons/ci";
import { SiLevelsdotfyi } from "react-icons/si";


const Home = () => {
  const mainRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".booking-explore", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-icons", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, mainRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="grid-container">
      <div className="header text-white">
        <nav className="nav-grid flex justify-between items-center px-5 md:px-10 py-5 text-white">
          <h1 className="text-xl font-bold">SNAELAND</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5">
            <Link to="#">Home</Link>
            <Link to="#">Destination</Link>
            <Link to="#">Gallery</Link>
            <Link to="#">TravelPackages</Link>
          </div>

          {/* Language Selector */}
          <div className="hidden md:block">
            <select
              id="language"
              name="language"
              className="bg-transparent border border-white px-2 py-1 rounded text-white"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full px-5 py-4 space-y-3 md:hidden z-50">
              <Link to="#" className="block">Home</Link>
              <Link to="#" className="block">Destination</Link>
              <Link to="#" className="block">Gallery</Link>
              <Link to="#" className="block">TravelPackages</Link>
              <select
                id="language"
                name="language"
                className="w-full bg-transparent border border-white px-2 py-1 rounded text-white mt-2"
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
          )}
        </nav>

        <main
      ref={mainRef}
      className="hero-grid flex justify-between items-center pt-20 md:pt-44 px-5 md:px-10"
    >
      <div>
        <h1 className="text-4xl md:text-7xl hero-heading">
          Waving Your Dreams <br /> Into Unforgettable <br /> Adventures
        </h1>
      </div>
      <div className="hidden md:block space-y-5 text-2xl hero-icons">
        <FaInstagram />
        <FaTwitter />
        <AiOutlineYoutube />
      </div>
    </main>
        <section ref={sectionRef}>
      <div className="booking-grid flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-10 md:py-20 gap-5">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start booking-text">
          <button className="flex gap-2 hover:gap-4 duration-300 bg-white text-black py-1 font-bold pl-4 pr-1 items-center rounded-full ">
            Booking Now{" "}
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center text-2xl">
              <MdOutlineArrowOutward className="text-white hover:rotate-[360deg] transition-transform duration-500" />
            </div>{" "}
          </button>
          <p className="text-center md:text-left">
            Discover the captivating allure of artic wonders from stuning
            landscapes <br /> to vibrant culture on an unforgettable jounry
            throught the north.
          </p>
        </div>
        <div className="booking-explore">
          <button className="flex items-center gap-2">
            EXPLORE MORE <MdArrowDownward />
          </button>
        </div>
      </div>
    </section>
        <section
      ref={sectionRef}
      className="about-grid text-black flex flex-col md:flex-row justify-between px-5 md:px-10 py-10 md:py-14 pb-10 md:pb-20 gap-10"
    >
      <div>
        <p>[About Us]</p>
      </div>
      <div className="about-text">
        <h1 className="h1 text-2xl md:text-4xl leading-normal">
          it all begin with a single journy-- a trip to the land of <br />
          fire and ice that sparked a profound love for iceland, <br />
          Enchanted by its ruged beuty and rich and rich cultur, we <br />
          knew we had found something truly special,
        </h1>
        <div className="flex flex-col md:flex-row mt-10 justify-start ml-0 md:ml-10 gap-10 md:gap-20 about-numbers">
          <div>
            <h1 className="h1 text-4xl md:text-6xl">95%</h1>
            <p className="text-gray-500">Customer Satisfaction</p>
          </div>
          <div>
            <h1 className="h1 text-4xl md:text-6xl">72+ </h1>
            <p className="text-gray-500">Populat Destination</p>
          </div>
          <div>
            <h1 className="h1 text-4xl md:text-6xl">250+</h1>
            <p className="text-gray-500">Experience Guide</p>
          </div>
        </div>
      </div>
    </section>
        <section className="destinations-grid text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-5 md:px-10 gap-5">
            <div>
              <p>[Destinations]</p>
              <h1 className="h1 text-2xl md:text-3xl">
                a Uniqr Bland of adventure <br /> Culture and natural Wonders
              </h1>
            </div>
            <div>
              <p>
                Discover a fusion of adventure culture and scenic <br /> beuty
                across our divers destination offering <br /> unforgettable
                experience at every turn,
              </p>
            </div>
          </div>
          <div className="pt-10 md:pt-14 px-5 md:px-10 relative ">
            <img
              src={img1}
              alt=""
              className="rounded-lg h-[40vh] md:h-[65vh] w-full object-cover "
            />
            <div className="absolute bottom-5 md:bottom-10 left-5 md:left-16 text-white">
              <h1 className="h1 text-xl md:text-3xl">Askja Cladera</h1>
              <p className="text-sm md:text-base">
                A glimpse into icelands Raw natural beuty and geolical wonders. From its dramatic creter lakes <br /> to its desolate volcanic
                ladscapes this destinatio promises an unforgetaaple adveunture{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-5 gap-5 px-5 md:px-10">
            <div className="relative">
              <img src={img2} alt="" className="rounded-lg w-full md:w-[600px]" />
              <div className="absolute bottom-5 md:bottom-10 left-5 text-white">
                <h1 className="h1 text-xl md:text-3xl">Mossy Mountain Hillside</h1>
                <p className="text-sm md:text-base">
                  A sense of peace and serenity with nature and experience the
                  beuty of <br /> icelands wild landscape{" "}
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={img3} alt="" className="rounded-lg w-full md:w-[600px]" />
              <div className="absolute bottom-5 md:bottom-10 left-5 text-white">
                <h1 className="h1 text-xl md:text-3xl">Reynisfjar Black Sand Beach</h1>
                <p className="text-sm md:text-base">
                  A Volcanic shoure towering cliffs and dramatic seascapes this
                  iconic beach <br /> is a must- vist desitanation for anture
                  lovers and adventures alike
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-grid text-black">
          <div className="flex flex-col md:flex-row justify-between px-5 md:px-10 pt-10 md:pt-16 gap-5">
            <div>
              <p>[Galleries]</p>
            </div>
            <div>
              <h1 className="h1 text-2xl md:text-4xl">
                A visual journy through the lens, one sanpshot at a <br /> time
                capting the essence of our travel <br /> adventures around the
                world.{" "}
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 px-5 md:px-10 py-5 md:py-10">
            <div>
              <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
                EXPLORE MORE
              </button>
            </div>
            <div className="overflow-x-auto scrollbar-hide whitespace-nowrap space-x-5 flex">
              <img
                src={img1}
                alt=""
                className="inline-block w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-2xl shadow-lg object-cover"
              />
              <img
                src={img2}
                alt=""
                className="inline-block w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-2xl shadow-lg object-cover"
              />
              <img
                src={img3}
                alt=""
                className="inline-block w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="reservation-grid text-black pt-10 md:pt-16 px-5 md:px-10">
          <div className="pb-10 md:pb-14">
            <p>[Rservation]</p>
            <h1 className="h1 text-2xl md:text-4xl">
              secure spot for an unforgettable juorny <br /> through icelands
              beuty and unique charms
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div>
              <img src={img4} alt="" className="w-full md:w-[800px] rounded-lg" />
            </div>
            <div className="space-y-5">
              <h1 className="text-2xl md:text-4xl font-bold">The Lavander Dreams</h1>
              <p>
                Explore Botanical gardens geothemal parks, <br /> and costal
                vitas each paonting a unuqe <br /> canvas if natural splender
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center border-2 px-3 md:px-5 rounded-full gap-1 py-1 text-sm md:text-base">
                  <CiBrightnessUp />5 Days
                </div>
                <div className="flex items-center border-2 px-3 md:px-5 rounded-full gap-1 py-1 text-sm md:text-base">
                  <MdCalendarMonth />
                  Mar-oct
                </div>
                <div className="flex items-center border-2 px-3 md:px-5 rounded-full gap-1 py-1 text-sm md:text-base">
                  <SiLevelsdotfyi />
                  Easy
                </div>
                <div className="flex items-center border-2 px-3 md:px-5 rounded-full gap-1 py-1 text-sm md:text-base">
                  <CiLocationOn />
                  Keflavik Airport
                </div>
                <div className="flex items-center border-2 px-3 md:px-5 rounded-full gap-1 py-1 text-sm md:text-base">
                  <CiTimer />
                  Fliexible
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl"> From $1,567</h1>
              <button className="border-2 border-black py-2 px-5 rounded-full">
                Booking Now
              </button>
            </div>
          </div>
        </section>
        <section className="packages-grid text-black pt-10 md:pt-16 px-4 sm:px-6 md:px-10">
  {/* Header */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
    <div>
      <p className="text-sm text-gray-500 uppercase tracking-wide">[Packages]</p>
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug">
        Choose our range of <br className="hidden sm:block" /> expertly crafted packages
      </h1>
    </div>
    <div className="text-sm sm:text-base text-gray-700 max-w-md leading-relaxed">
      <p>
        Whether you're seeking awe-inspiring landscapes, thrilling outdoor adventures, or immersive cultural experiences, 
        Snaeland has the perfect itinerary for you.
      </p>
    </div>
  </div>

  {/* Images Scrollable */}
  <div className="overflow-x-auto whitespace-nowrap py-6 flex gap-5">
    {/* Reusable Card */}
    {[{
      img: img5,
      title: "Askja Caldera",
      desc: "A glimpse into Iceland's raw natural beauty."
    }, {
      img: img2,
      title: "Mossy Mountain",
      desc: "Feel peace and serenity in nature."
    }, {
      img: img3,
      title: "Black Sand Beach",
      desc: "Volcanic shore and dramatic seascapes."
    }].map(({ img, title, desc }, index) => (
      <div key={index} className="relative inline-block w-[260px] sm:w-[300px] h-[180px] sm:h-[200px] md:w-[500px] md:h-[350px] rounded-xl overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 text-white space-y-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
          <p className="text-xs sm:text-sm">{desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

       <footer className="footer-grid text-black pt-10 bg-[#000]">
  {/* Top Section */}
  <div className="flex justify-center items-center text-center px-4">
    <div className="space-y-5">
      <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold pt-8 leading-snug">
        Find the perfect trip and discover <br className="hidden sm:block" /> extraordinary adventures with us
      </h1>
      <p className="text-white text-sm sm:text-base leading-relaxed">
        Embark on a journey of experience, exploration, and excitement as we guide you<br className="hidden sm:block" />
        toward unforgettable experiences across the globe.
      </p>
      <div className="flex justify-center">
        <button className="flex justify-center mb-10 gap-2 hover:gap-4 duration-300 bg-white text-black py-2 px-4 font-bold items-center rounded-full">
          Get Started
          <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center text-xl">
            <MdOutlineArrowOutward className="text-white hover:rotate-[360deg] transition-transform duration-500" />
          </div>
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="backdrop-blur-sm px-5 md:px-10">
    <div className="flex flex-col md:flex-row justify-between text-white gap-10 py-10">
      {/* About */}
      <div className="md:w-1/3 space-y-2">
        <h1 className="text-xl font-semibold">SNAELAND</h1>
        <p className="text-sm leading-relaxed">
          Your getaway to the extraordinary beauty,<br />
          culture, and exhilarating adventures awaiting<br />
          in the captivating landscape of Iceland.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 md:gap-20 flex-wrap md:w-2/3">
        {/* Navigation */}
        <div className="space-y-2">
          <h2 className="font-bold">Navigation</h2>
          <p>Home</p>
          <p>Destinations</p>
          <p>Travel Packages</p>
          <p>Gallery</p>
        </div>

        {/* Social */}
        <div className="space-y-2">
          <h2 className="font-bold">Social</h2>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h2 className="font-bold">Contact Us</h2>
          <p>travel@snealand.io</p>
          <p>(704) 555-0127</p>
          <p>2118 Thaniridge Cir, Syracuse</p>
          <p>Connecticut 35624</p>
        </div>
      </div>
    </div>

    {/* Large Watermark Text */}
    <div className="hidden md:flex justify-center pb-10">
      <h1 className="text-[80px] sm:text-[150px] lg:text-[250px] text-white opacity-10">
        SNAELAND
      </h1>
    </div>
  </div>
</footer>

      </div>
    </div>
  );
};

export default Home;