// useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.on-scroll-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup: Disconnect observer on unmount
    return () => observer.disconnect();
  }, [5]); // Empty dependency array = runs once on mount
};

export default useScrollAnimation;