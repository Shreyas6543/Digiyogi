import React, { useState, useEffect } from 'react'
import './../../StyleSheets/Homepage/header.css';
import './../../StyleSheets/Homepage/header1.css';
import './../../StyleSheets/Homepage/header2.css';
import './../../StyleSheets/Homepage/header3.css';
import './../../StyleSheets/Homepage/header4.css';
import './../../StyleSheets/extras.css';


function Header1() {
const [header, setHeader] = useState("header")

const listenScrollEvent = (event) => {
  if (window.scrollY < 0) {
    return setHeader("header")
  } else if (window.scrollY > 10 && window.scrollY < 930) {
    return setHeader("header1")
  }else if (window.scrollY > 930 && window.scrollY < 1730) {
    return setHeader("header4")
  }else if (window.scrollY > 1730 && window.scrollY < 2520)  {
    return setHeader("header3")
  }else if (window.scrollY > 2520)  {
    return setHeader("header4")
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
