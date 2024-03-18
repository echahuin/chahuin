"use client"
import React, { useEffect } from 'react';
import './styleScroller.css';
import Image from 'next/image'

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach((content) => {
          const duplicateItem = content.cloneNode(true);
          duplicateItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicateItem);
        });
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="scroller" >
    <ul className="tag-list scroller__inner">
      <li>  <Image
          className="imageStyle"
          src="/css.svg"
          alt="devLogo Logo"
          width={200}
          height={80}
          priority
        /></li>
      <li> <Image
          className="imageStyle"
          src="/next.svg"
          alt="devLogo Logo"
          width={200}
          height={80}
          priority
        /> </li>
      <li> <Image
          className="imageStyle"
          src="/nodejs-ar21.svg"
          alt="devLogo Logo"
          width={200}
          height={80}
          priority
        /> </li>
      <li> <Image
          className="imageStyle"
          src="/reactjs-icon.svg"
          alt="devLogo Logo"
          width={200}
          height={80}
          priority
        /> </li>
      <li> <Image
          className="imageStyle"
          src="/vercel-ar21.svg"
          alt="devLogo Logo"
          width={200}
          height={80}
          priority
        /> </li>
    </ul>
  </div>
  );
};

export default Scroller;
