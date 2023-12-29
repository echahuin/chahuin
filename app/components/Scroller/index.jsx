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
          src="/css.svg"
          alt="devLogo Logo"
          width={250}
          height={150}
          priority
        /></li>
      <li> <Image
          src="/next.svg"
          alt="devLogo Logo"
          width={250}
          height={150}
          priority
        /> </li>
      <li> <Image
          src="/nodejs-ar21.svg"
          alt="devLogo Logo"
          width={250}
          height={150}
          priority
        /> </li>
      <li> <Image
          src="/reactjs-icon.svg"
          alt="devLogo Logo"
          width={250}
          height={150}
          priority
        /> </li>
      <li> <Image
          src="/vercel-ar21.svg"
          alt="devLogo Logo"
          width={250}
          height={150}
          priority
        /> </li>
      {/* <li> <Image
          src="/javascript-horizontal.svg"
          alt="devLogo Logo"
          width={300}
          height={150}
          priority
        /> </li> */}
    </ul>
  </div>
  );
};

export default Scroller;
