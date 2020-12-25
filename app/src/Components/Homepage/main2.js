import React, { useState, useEffect } from 'react'
import './../../StyleSheets/Homepage/main2.css';
import './../../StyleSheets/extras.css';


export default function Main2() {
const [main2compdiv, setH1] = useState("dummy1")



const listenScrollEvent = (event) => {
  if (window.scrollY > 400) {
  // eslint-disable-next-line
    return setH1("main2compdiv")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
});

  return (
    <div className="main2">
       <div className="main2comp">
        <div className={main2compdiv}>
            <div className="topline"/>
            <div className="outercircle"/>
            <div className="innercircle"/>
            <div className="texthead">Let's Go Together For Future With DigiYogi</div>
            <div className="textbody">We Are Digiyogi, We Build Quality IT product to Simplify Work flow of Modern Business, We Help to Bring Traditional Enterprises to Digital Mainstream by Providing Ultimate IT Solution </div>
            <div className="botline"/>
            <div className="botline1"/>
        </div>
      </div>
    </div>
  );
}
