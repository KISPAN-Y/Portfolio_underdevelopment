// components/PreLoader.jsx
import React from 'react';

const PreLoader = () => {
  const PreLoaderStyles = `
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 7, 12, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      gap: 20px;
    }
    
    .line {
      border-bottom: 10px solid #f3f3f3;
      border-left: 10px solid #f3f3f3;
      width: 35px;
      height: 35px;
      transform: rotate(45deg);
    }

    .line2 {
      width: 10px;
      height: 40px;
      background: #f3f3f3;
      transform: rotate(25deg);
    }

    .line3 {
      border-bottom: 10px solid #f3f3f3;
      border-left: 10px solid #f3f3f3;
      transform: rotateY(180deg) rotate(45deg);
      width: 35px;
      height: 35px;
    }
    
    .spinner {
      animation: pulse 1.5s infinite;
      animation-delay: 0.2s;
    }

    .spinner2 {
      animation: pulse 1.5s infinite;
    }

    .spinner3 {
      animation: pulse 1.5s infinite;
      animation-delay: 0.5s;
    }

    @keyframes pulse {
      0% { transform: scale(0); }
      50% { transform: scale(1); }
      100% { transform: scale(0); }
    }
  `;

  return (
    <>
      <style>{PreLoaderStyles}</style>
      <div className="preloader">
        <div className="spinner"><div className='line'></div></div>
        <div className="spinner2"><div className='line2'></div></div>
        <div className="spinner3"><div className='line3'></div></div>
      </div>
    </>
  );
};

export default PreLoader;