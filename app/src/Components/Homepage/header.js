import React, { useState, useEffect } from 'react'
import './../../StyleSheets/Homepage/header.css';
import './../../StyleSheets/extras.css';


function Header1() {
const [header, setHeader] = useState("header")

const listenScrollEvent = (event) => {
  if (window.scrollY < 90) {
    return setHeader("header")
  } else if (window.scrollY > 90 && window.scrollY < 900) {
    return setHeader("header8")
  }else if (window.scrollY > 940 && window.scrollY < 1500) {
    return setHeader("header3")
  }else if (window.scrollY > 1500 && window.scrollY < 2700)  {
    return setHeader("header8")
  }else if (window.scrollY > 2700)  {
    return setHeader("header3")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

  return (
  <div className="head">
    <div className="pchead">
        <header className={header}>
            <div className="logo"/>
            <div className="links">
                <div className="item1">About</div>
                <div className="item2">Connect</div>
                <div className="item3">Services</div>
            </div>
        </header>
    </div>
  </div>
  );
}

export default Header1;