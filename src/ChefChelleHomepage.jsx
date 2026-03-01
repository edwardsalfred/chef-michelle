import { useState, useEffect, useRef } from "react";
import chefPhoto from "./assets/chef-photo.png";
import heroImg from "./assets/Gemini_Generated_Image_mxn15rmxn15rmxn1 (1).png";
import breadPudding from "./assets/breadpudding.png";

const ChefChelleHomepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      text: "Chef Chelle catered our corporate event, and every dish was a masterpiece! From the savory Cajun entrees to the heavenly desserts, our team couldn't stop raving about the food.",
      author: "Karen T.",
      location: "Gulfport, MS",
    },
    {
      text: "The bread pudding alone is worth the call. Chef Chelle brought warmth, flavor, and pure Southern soul to our family reunion. Absolutely unforgettable.",
      author: "Marcus D.",
      location: "New Orleans, LA",
    },
    {
      text: "Professional, creative, and incredibly talented. Chef Chelle turned our wedding reception into a culinary experience our guests still talk about.",
      author: "Ashley & James R.",
      location: "Biloxi, MS",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { title: "Catering Menu Consultation", price: "$25", tag: "Event Service", desc: "Personalized menu planning session with Chef Chelle for your catered event." },
    { title: "Drop Off Menu Consultation", price: "$20", tag: "Non-Service", desc: "Menu consultation for drop-off catering orders." },
    { title: "Dish Tasting & Consultation", price: "$65", tag: "Event Service", desc: "Taste dishes and plan your menu with Chef Chelle's expert guidance." },
  ];

  const mealPrep = [
    { title: "5-Day Meal Preparation", price: "$90", note: "Order By Friday" },
    { title: "10-Day Meal Preparation", price: "$145", note: "Order By Friday" },
    { title: "15-Day Meal Preparation", price: "$200", note: "Order By Friday" },
    { title: "Signature Add-On", price: "$7", note: "With Meal Prep Only" },
  ];

  const faqCategories = [
    {
      label: "Booking & Payments",
      items: [
        { q: "How do I initiate a booking?", a: "To start your booking, complete the payment and submit the required consultation contact form on the website. You will be contacted within 4 to 8 hours, or sooner, to begin your planning process." },
        { q: "How are quotes calculated?", a: "Quotes are based on your selected menu, guest count, event service needs, labor for setup and breakdown, and preparation hours. Your quote will be available within 6 to 12 hours, or sooner. A $100 holding fee is available upon quote agreement." },
        { q: "When will I receive my contract and invoice?", a: "After you approve your quote, you may request a contract. The contract will be sent as an attachment with your electronic invoice. Both documents are typically delivered within 24 to 48 hours, weekends included." },
        { q: "When are deposits due and are they refundable?", a: "Deposits are due 3 to 7 days after contract signing, depending on your event date. Your deposit, consultation fee, and holding fee are applied to your total balance. Deposits are refundable if the event is canceled within 14 days of booking. Deposits may be applied to a future event within 6 months. After 6 months, a new contract is required." },
        { q: "What payment options do you accept?", a: "Full payment is due 2 weeks before your event. Accepted payment methods include Square, cash, cashier's check, and PayPal for international clients. Payment plans are available upon request." },
        { q: "How far in advance should I book?", a: "Booking early is recommended, especially for weddings and large events. Availability fills quickly during peak seasons." },
        { q: "How do I book Chef Chelle for my event?", a: "Visit the Booking page on the website or contact us by email to start your consultation and secure your date." },
      ],
    },
    {
      label: "Services & Menus",
      items: [
        { q: "What types of events do you cater?", a: "We cater weddings, brunches, corporate events, private celebrations, and other special occasions. Each menu is customized to match your event needs." },
        { q: "Do you offer custom menus?", a: "Yes. Every menu is tailored to your preferences, budget, theme, and guest count to create a personalized culinary experience." },
        { q: "What is included in full service catering?", a: "Full service catering may include menu planning, food preparation, professional servers, and on-site hospitality support to ensure a smooth event." },
        { q: "Do you provide drop-off catering?", a: "Yes. Our drop-off option includes a one-on-one consultation, custom menu planning, and guidance on portions, packaging, and setup." },
        { q: "Can I schedule a tasting before booking?", a: "Yes. We offer dish tastings and catering consultations so you can experience the food before your event." },
        { q: "Do you accommodate dietary restrictions?", a: "Yes. We work with clients to address dietary needs such as allergies or special meal preferences when planning your menu." },
      ],
    },
    {
      label: "Meal Prep & Ingredients",
      items: [
        { q: "Do you offer meal prep services?", a: "Yes. We provide weekly ready-to-heat meal prep options designed for convenience and bold Southern flavor." },
        { q: "Where do you source your ingredients?", a: "We prioritize fresh, locally sourced ingredients to deliver high-quality flavor in every dish." },
      ],
    },
  ];

  const navLinks = ["Home", "Events", "Kitchen & More", "About", "Booking", "Bread Pudding", "Testimonials", "FAQ"];

  const animClass = (id) =>
    visibleSections.has(id) ? "opacity-1 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Josefin+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        :root {
          --gold: #C8A45A;
          --gold-light: #E8D5A3;
          --cream: #FAF6EE;
          --dark: #1A1412;
          --dark-warm: #2A211C;
          --burgundy: #6B2D3E;
          --burgundy-deep: #4A1E2B;
          --charcoal: #3A3330;
          --text-light: #D4CFC7;
          --text-muted: #9A948C;
        }

        body { background: var(--dark); color: var(--cream); }

        .opacity-0 { opacity: 0; }
        .opacity-1 { opacity: 1; }
        .translate-y-0 { transform: translateY(0); }
        .translate-y-8 { transform: translateY(40px); }

        .fade-section {
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: var(--dark);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.05);
          transition: transform 8s ease-out;
          animation: heroZoom 20s ease-in-out infinite alternate;
        }

        @keyframes heroZoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(26, 20, 18, 0.7) 0%,
            rgba(26, 20, 18, 0.55) 30%,
            rgba(26, 20, 18, 0.6) 60%,
            rgba(26, 20, 18, 0.85) 100%
          );
          z-index: 1;
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(26, 20, 18, 0.5) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-ornament {
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 24px auto;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 400;
          color: var(--cream);
          letter-spacing: 0.02em;
          line-height: 1.05;
          animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        .hero-subtitle {
          font-family: 'Josefin Sans', sans-serif;
          font-size: clamp(0.7rem, 1.5vw, 0.9rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: 12px;
          font-weight: 400;
          animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
          opacity: 0;
        }

        .hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2vw, 1.35rem);
          color: var(--text-light);
          font-weight: 300;
          font-style: italic;
          max-width: 540px;
          margin: 28px auto 0;
          line-height: 1.6;
          animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards;
          opacity: 0;
        }

        .hero-cta {
          margin-top: 40px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards;
          opacity: 0;
        }

        .btn-gold {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 16px 40px;
          border: 1px solid var(--gold);
          background: transparent;
          color: var(--gold);
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-gold:hover {
          background: var(--gold);
          color: var(--dark);
        }

        .btn-gold.filled {
          background: var(--gold);
          color: var(--dark);
        }

        .btn-gold.filled:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(200, 164, 90, 0.25);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* NAV */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s ease;
        }

        .nav.scrolled {
          background: rgba(26, 20, 18, 0.95);
          backdrop-filter: blur(12px);
          padding: 14px 40px;
          border-bottom: 1px solid rgba(200, 164, 90, 0.1);
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          color: var(--gold);
          letter-spacing: 0.05em;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
        }

        .nav-links a {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-light);
          text-decoration: none;
          transition: color 0.3s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s;
        }

        .nav-links a:hover { color: var(--gold); }
        .nav-links a:hover::after { width: 100%; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .hamburger span {
          width: 24px;
          height: 1.5px;
          background: var(--gold);
          transition: all 0.3s;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            position: fixed;
            inset: 0;
            background: rgba(26, 20, 18, 0.98);
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;
            z-index: 99;
          }
          .mobile-menu a {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 0.85rem;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s;
          }
          .mobile-menu a:hover { color: var(--gold); }
        }

        /* SECTION STYLES */
        .section {
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-label {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 400;
          color: var(--cream);
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .section-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 600px;
          font-weight: 300;
        }

        /* MARQUEE */
        .marquee-wrap {
          overflow: hidden;
          padding: 32px 0;
          border-top: 1px solid rgba(200, 164, 90, 0.15);
          border-bottom: 1px solid rgba(200, 164, 90, 0.15);
          background: var(--dark);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-track span {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          white-space: nowrap;
          padding: 0 40px;
          opacity: 0.7;
        }

        .marquee-track span::after {
          content: '✦';
          margin-left: 40px;
          opacity: 0.4;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* ABOUT SECTION */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-image {
          aspect-ratio: 4/5;
          background: linear-gradient(135deg, var(--burgundy-deep) 0%, var(--dark-warm) 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-image::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(200, 164, 90, 0.25);
          z-index: 2;
          pointer-events: none;
        }

        .about-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: contrast(1.02) brightness(0.98);
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-image:hover .about-photo {
          transform: scale(1.03);
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        /* PILLARS */
        .pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .pillar {
          padding: 40px 32px;
          border: 1px solid rgba(200, 164, 90, 0.1);
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .pillar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 1px;
          background: var(--gold);
          transition: width 0.5s;
        }

        .pillar:hover::before { width: 100%; }

        .pillar:hover {
          background: rgba(200, 164, 90, 0.03);
          border-color: rgba(200, 164, 90, 0.2);
        }

        .pillar-number {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: rgba(200, 164, 90, 0.15);
          font-style: italic;
          margin-bottom: 16px;
        }

        .pillar h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 12px;
        }

        .pillar p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-muted);
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .pillars { grid-template-columns: 1fr; }
        }

        /* SERVICES */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .service-card {
          padding: 36px 28px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(200, 164, 90, 0.08);
          transition: all 0.4s ease;
          position: relative;
        }

        .service-card:hover {
          border-color: rgba(200, 164, 90, 0.25);
          transform: translateY(-4px);
          background: rgba(200, 164, 90, 0.03);
        }

        .service-tag {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--burgundy);
          background: rgba(107, 45, 62, 0.15);
          padding: 4px 12px;
          display: inline-block;
          margin-bottom: 16px;
          border: 1px solid rgba(107, 45, 62, 0.2);
        }

        .service-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 8px;
        }

        .service-card .price {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 1.5rem;
          color: var(--gold);
          font-weight: 600;
          margin: 16px 0;
        }

        .service-card p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }

        /* MEAL PREP */
        .mealprep-bg {
          background: linear-gradient(170deg, var(--dark-warm) 0%, var(--burgundy-deep) 100%);
          position: relative;
        }

        .mealprep-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(200, 164, 90, 0.06) 0%, transparent 60%);
        }

        .mealprep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
          position: relative;
        }

        .mealprep-card {
          padding: 32px 24px;
          text-align: center;
          border: 1px solid rgba(200, 164, 90, 0.12);
          background: rgba(0,0,0,0.2);
          transition: all 0.4s ease;
        }

        .mealprep-card:hover {
          border-color: var(--gold);
          background: rgba(200, 164, 90, 0.05);
        }

        .mealprep-card .note {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.7;
          margin-bottom: 12px;
        }

        .mealprep-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--cream);
          margin-bottom: 16px;
          min-height: 52px;
        }

        .mealprep-card .price {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 2rem;
          color: var(--gold);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .mealprep-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .mealprep-grid { grid-template-columns: 1fr; }
        }

        /* BREAD PUDDING */
        .pudding-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .pudding-visual {
          aspect-ratio: 4/3;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(200, 164, 90, 0.15);
        }

        .pudding-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pudding-visual:hover .pudding-photo {
          transform: scale(1.04);
        }

        .pudding-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26, 20, 18, 0.15) 0%, rgba(26, 20, 18, 0.35) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .pudding-visual::after {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1px solid rgba(200, 164, 90, 0.2);
          z-index: 2;
          pointer-events: none;
        }

        .pudding-price-tag {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: var(--gold);
          color: var(--dark);
          font-family: 'Josefin Sans', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          box-shadow: 0 4px 30px rgba(200, 164, 90, 0.4);
        }

        @media (max-width: 768px) {
          .pudding-section { grid-template-columns: 1fr; gap: 40px; }
        }

        /* TESTIMONIALS */
        .testimonial-container {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .testimonial-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-style: italic;
          font-weight: 300;
          color: var(--cream);
          line-height: 1.7;
          margin-bottom: 32px;
          transition: opacity 0.5s ease;
        }

        .testimonial-author {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .testimonial-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 32px;
        }

        .testimonial-dot {
          width: 8px;
          height: 8px;
          border: 1px solid var(--gold);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
          background: transparent;
          padding: 0;
        }

        .testimonial-dot.active {
          background: var(--gold);
          transform: scale(1.2);
        }

        /* CONTACT / FOOTER */
        .footer-section {
          border-top: 1px solid rgba(200, 164, 90, 0.1);
          padding: 80px 40px;
          text-align: center;
        }

        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: var(--gold);
          margin-bottom: 24px;
        }

        .footer-email {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-email:hover { color: var(--gold); }

        .footer-copy {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          opacity: 0.5;
          margin-top: 40px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards;
          opacity: 0;
          z-index: 2;
        }

        .scroll-indicator span {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 1; height: 40px; }
          50% { opacity: 0.4; height: 24px; }
        }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0 auto 40px;
        }

        /* FAQ */
        .faq-wrapper {
          max-width: 820px;
          margin: 0 auto;
        }

        .faq-categories {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .faq-cat-btn {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 8px 20px;
          border: 1px solid rgba(200, 164, 90, 0.2);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-cat-btn:hover,
        .faq-cat-btn.active {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(200, 164, 90, 0.05);
        }

        .faq-item {
          border-bottom: 1px solid rgba(200, 164, 90, 0.08);
          overflow: hidden;
        }

        .faq-item:first-child {
          border-top: 1px solid rgba(200, 164, 90, 0.08);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 20px;
          transition: all 0.3s;
        }

        .faq-question:hover .faq-q-text {
          color: var(--gold);
        }

        .faq-q-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 400;
          color: var(--cream);
          transition: color 0.3s;
          line-height: 1.4;
        }

        .faq-toggle {
          width: 28px;
          height: 28px;
          border: 1px solid rgba(200, 164, 90, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.4s ease;
          position: relative;
        }

        .faq-toggle.open {
          border-color: var(--gold);
          background: rgba(200, 164, 90, 0.08);
          transform: rotate(45deg);
        }

        .faq-toggle::before,
        .faq-toggle::after {
          content: '';
          position: absolute;
          background: var(--gold);
          transition: all 0.3s;
        }

        .faq-toggle::before {
          width: 12px;
          height: 1px;
        }

        .faq-toggle::after {
          width: 1px;
          height: 12px;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), padding 0.4s ease;
          padding: 0 0 0 0;
        }

        .faq-answer.open {
          max-height: 300px;
          padding: 0 0 24px 0;
        }

        .faq-answer p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-muted);
          font-weight: 300;
          max-width: 700px;
        }

        .faq-category-label {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.6;
          margin: 40px 0 8px;
        }

        .faq-category-label:first-child {
          margin-top: 0;
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`nav ${scrollY > 60 ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">Chef Chelle</a>
        <ul className="nav-links">
          {navLinks.slice(0, 6).map((link) => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {navLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url("${heroImg}")`,
          }}
        />
        <div style={{ zIndex: 2, position: "relative" }}>
          <div className="hero-ornament" />
          <h1 className="hero-title">SOUTHERN<br />ELEGANCE</h1>
          <div className="hero-subtitle">Taste the Soul of the South</div>
          <p className="hero-tagline">
            Experience the warmth of Louisiana and the Gulf Coast through a modern culinary lens.
          </p>
          <div className="hero-cta">
            <a href="#events" className="btn-gold filled">Explore Menus</a>
            <a href="#booking" className="btn-gold">Book a Tasting</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex' }}>
              <span>Weddings & Ceremonies</span>
              <span>Corporate Events</span>
              <span>Private Dinners</span>
              <span>Meal Preparation</span>
              <span>Cooking Classes</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className={`section fade-section ${animClass("about")}`} ref={(el) => (sectionRefs.current.about = el)}>
        <div className="about-grid">
          <div>
            <div className="section-label">Meet The Chef</div>
            <h2 className="section-title">A Symphony of Southern Flavor.</h2>
            <div className="divider" style={{ margin: "0 0 32px 0" }} />
            <p className="section-text" style={{ marginBottom: "24px" }}>
              Chef Chelle brings the vibrant, soulful cooking of the South to life with a fresh, elegant approach. Based on the Gulf Coast, her menus are inspired by rich Louisiana traditions and a deep love for hospitality.
            </p>
            <p className="section-text" style={{ marginBottom: "40px" }}>
              From intimate private dinners to grand wedding celebrations, every dish is crafted with meticulous attention to detail and an undeniable passion for creating memorable moments.
            </p>
            <img src="/api/placeholder/180/60" alt="Chef Chelle Signature" style={{ opacity: 0.6, filter: 'invert(1)' }} />
          </div>
          <div className="about-image">
            <img src={chefPhoto} alt="Chef Chelle in the kitchen" className="about-photo" />
          </div>
        </div>

        <div className="pillars">
          {[
            { num: "01", title: "Local Sourcing", desc: "We partner with local farmers and fishermen, ensuring every ingredient reflects the absolute best of the season and the region." },
            { num: "02", title: "Refined Execution", desc: "Soul food elevated. Experience classical culinary techniques applied to beloved regional flavor profiles." },
            { num: "03", title: "Impeccable Service", desc: "True Southern hospitality means anticipating your needs before you do. We treat every guest like family." }
          ].map((pillar, i) => (
            <div key={i} className="pillar">
              <div className="pillar-number">{pillar.num}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS & MENUS */}
      <section id="events" className={`section fade-section ${animClass("events")}`} ref={(el) => (sectionRefs.current.events = el)}>
        <div className="section-label" style={{ textAlign: "center" }}>Services</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>Catering & Consultations</h2>
        <div className="divider" />
        <p className="section-text" style={{ margin: "0 auto", textAlign: "center" }}>
          Begin your journey with a personalized consultation to design a menu that perfectly aligns with your vision.
        </p>

        <div className="services-grid">
          {services.map((item, i) => (
            <div key={i} className="service-card">
              <div className="service-tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <div className="price">{item.price}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEAL PREP */}
      <div className="mealprep-bg">
        <section id="kitchen" className={`section fade-section ${animClass("kitchen")}`} ref={(el) => (sectionRefs.current.kitchen = el)}>
          <div className="section-label" style={{ textAlign: "center", color: "var(--gold-light)" }}>The Kitchen</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Weekly Meal Preparation</h2>
          <div className="divider" style={{ background: "linear-gradient(90deg, transparent, var(--gold-light), transparent)" }} />
          <p className="section-text" style={{ margin: "0 auto", textAlign: "center", color: "var(--cream)" }}>
            Chef-crafted, ready-to-heat meals utilizing fresh ingredients and wholesome preparations without sacrificing flavor.
          </p>

          <div className="mealprep-grid">
            {mealPrep.map((item, i) => (
              <div key={i} className="mealprep-card">
                <div className="note">{item.note}</div>
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="#booking" className="btn-gold filled">Order Meal Prep</a>
          </div>
        </section>
      </div>

      {/* BREAD PUDDING FEATURE */}
      <section id="pudding" className={`section fade-section ${animClass("pudding")}`} ref={(el) => (sectionRefs.current.pudding = el)}>
        <div className="pudding-section">
          <div className="pudding-visual">
            <img src={breadPudding} alt="The Famous Bread Pudding" className="pudding-photo" />
            <div className="pudding-price-tag">$55</div>
          </div>
          <div>
            <div className="section-label">Signature Dessert</div>
            <h2 className="section-title">The Famous<br />Bread Pudding.</h2>
            <div className="divider" style={{ margin: "0 0 32px 0" }} />
            <p className="section-text" style={{ marginBottom: "24px" }}>
              A closely guarded family recipe that has become legendary across the coast. Rich, custardy, and finished with a decadent praline sauce that demands a second slice.
            </p>
            <p className="section-text" style={{ marginBottom: "32px", fontSize: "0.95rem", opacity: 0.8 }}>
              Available by the pan. Requires 48-hour advance notice. Local pickup or delivery available for an additional fee.
            </p>
            <a href="#booking" className="btn-gold">Order a Pan</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(200, 164, 90, 0.08)" }}>
        <section id="test" className={`section fade-section ${animClass("test")}`} ref={(el) => (sectionRefs.current.test = el)} style={{ padding: "80px 40px" }}>
          <div className="testimonial-container">
            <div className="section-label" style={{ marginBottom: "24px" }}>Client Praise</div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-20px", left: "10%", fontSize: "6rem", color: "var(--gold)", opacity: 0.1, fontFamily: "serif", lineHeight: 1 }}>"</div>
              <div className="testimonial-quote">"{testimonials[activeTestimonial].text}"</div>
              <div className="testimonial-author">
                {testimonials[activeTestimonial].author} <span style={{ opacity: 0.5 }}>— {testimonials[activeTestimonial].location}</span>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === activeTestimonial ? "active" : ""}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FAQ SECTION */}
      <section id="faq" className={`section fade-section ${animClass("faq")}`} ref={(el) => (sectionRefs.current.faq = el)}>
        <div className="section-label" style={{ textAlign: "center" }}>Support</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
        <div className="divider" />

        <div className="faq-wrapper">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="faq-category-label">{category.label}</div>
              {category.items.map((item, itemIndex) => {
                const uniqueId = `faq-${catIndex}-${itemIndex}`;
                const isOpen = openFaq === uniqueId;

                return (
                  <div key={itemIndex} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => setOpenFaq(isOpen ? null : uniqueId)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{item.q}</span>
                      <div className={`faq-toggle ${isOpen ? 'open' : ''}`} />
                    </button>
                    <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "60px", padding: "40px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(200, 164, 90, 0.1)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "16px", fontWeight: 400 }}>Still have questions?</h3>
            <p className="section-text" style={{ margin: "0 auto 24px", fontSize: "1rem" }}>
              We're here to help plan your perfect event or meal prep down to the final detail.
            </p>
            <a href="mailto:contact@chefchelle.com" className="btn-gold filled" style={{ padding: "12px 32px" }}>Contact Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-logo">Chef Chelle</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "32px" }}>
          <a href="#" className="footer-email">INSTAGRAM</a>
          <a href="#" className="footer-email">FACEBOOK</a>
          <a href="mailto:hello@chefchelle.com" className="footer-email">HELLO@CHEFCHELLE.COM</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} CHEF CHELLE CATERING. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default ChefChelleHomepage;
