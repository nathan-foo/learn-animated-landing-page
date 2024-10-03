"use client";

import "./styles.css";
import { gsap } from "gsap";
import anime from "animejs";
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".count p");
      let currentValue = 0;
  
      function updateCounter() {
          if (currentValue < 100) {
              let increment = Math.floor(Math.random() * 10) + 1;
              currentValue = Math.min(currentValue + increment, 100);
              counterElement.textContent = currentValue;
  
              let delay = Math.floor(Math.random() * 200) + 25;
              setTimeout(updateCounter, delay);
          }
      }
  
      updateCounter();
    }
  
    startLoader();
    gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });

    let textWrapper = document.querySelector(".ml16");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    console.log(textWrapper);

    anime.timeline({ loop: false })
      .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 30 * i
      })
      .add({
        targets: '.ml16 .letter',
        translateY: [0, 100],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 2000 + 30 * i
      });

      gsap.to(".pre-loader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3,
      });

      gsap.to(".loader", {
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75,
      });

      gsap.to(".loader-bg", {
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
      });

      gsap.to(".loader-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.5,
      });

      gsap.to(".header h1", {
        y: -200,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75,
        stagger: 0.05,
      });

      gsap.to(".img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4.5,
        stagger: 0.25,
      });
  }, []);
    
  return (
    <body>
      <div className="container">
        <div className="pre-loader">
          <div className="loader"></div>
          <div className="loader-bg"></div>
        </div>
        <div className="loader-content">
          <div className="count"><p>0</p></div>
          <div className="copy ml16"><p className="ml16">New Reality</p></div>
        </div>
        <div className="loader-2"></div>
      </div>
      <div className="site-content">
        <nav>
          <div className="logo">
            <a href="#">New Reality</a>
          </div>
          <div className="links">
            <a href="#">Info</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        <div className="header">
          <h1>N</h1>
          <h1>e</h1>
          <h1>w</h1>
          <h1>r</h1>
          <h1>e</h1>
          <h1>a</h1>
          <h1>l</h1>
        </div>
          <footer>
            <div className="footer-copy">
              <p>
                New Reality is a design studio based in Tokyo, Japan. We work with many companies to build and proactively deliver engaging brand experiences. We are unique in our ability to take a strategic approach while being visually clean.
              </p>
            </div>
            <div className="footer-nav">
              <div className="img"></div>
              <div className="img"></div>
            </div>
          </footer>
      </div>
    </body>
  );
}
