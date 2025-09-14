import React, { useEffect } from 'react';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
      threshold: 0.2, // triggers when 20% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // fade out on exit
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <section className="fade-in"><Hero /></section>
      <section className="fade-in"><About /></section>
      <section className="fade-in"><Portfolio /></section>
      <section className="fade-in"><Contact /></section>
    </div>
  );
};

export default Home;
