import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Ensure starting at 0 (without suffix)
      gsap.set(numberElement, { textContent: 0 });

      // Animate number
      gsap.to(numberElement, {
        textContent: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { textContent: 1 }, // ensures whole numbers
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%", // start animating when visible
        },
        onUpdate: function () {
          // Update text with suffix during animation
          numberElement.textContent =
            Math.floor(this.targets()[0].textContent) + item.suffix;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
