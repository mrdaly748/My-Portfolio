import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const HotelRef = useRef(null);
  const FoodRef = useRef(null);
  const ChatAppRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [HotelRef.current, FoodRef.current, ChatAppRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Hotel Project */}
          <div ref={HotelRef} className="first-project-wrapper">
            <a
              href="https://quickstay-one-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper"
            >
              <img src="/images/Hotel.png" alt="Hotel-Booking App Interface" />
            </a>
            <div className="text-content">
              <h2>Book hotels effortlessly with a sleek, responsive interface.</h2>
              <p className="text-white-50 md:text-xl">
                An app built with MERN Stack & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Food Delivery Project */}
            <div className="project" ref={FoodRef}>
              <a
                href="https://food-del-frontend-03bi.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper bg-[#FFEFDB]"
              >
                <img
                  src="/images/Food-Del.png"
                  alt="Food Delivery App Interface"
                />
              </a>
              <h2>Order your favorite meals quickly and conveniently.</h2>
            </div>

            {/* Chat App Project */}
            <div className="project" ref={ChatAppRef}>
              <a
                href="https://fullstack-chat-app-1-xt0e.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper bg-[#FFE7EB]"
              >
                <img src="/images/Chat_App.png" alt="Chat-App interface" />
              </a>
              <h2>Connect instantly with real-time messaging.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default AppShowcase;
