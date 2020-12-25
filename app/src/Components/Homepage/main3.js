import React, { useState, useEffect } from 'react'
import './../../StyleSheets/Homepage/main3.css';
import './../../StyleSheets/extras.css';


export default function Main3() {
const [main3compdiv, setH1] = useState("dummy1")



const listenScrollEvent = (event) => {
  if (window.scrollY > 900) {
  // eslint-disable-next-line
    return setH1("main3compdiv")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
});

  return (
    <div className="main3">
       <div className="main3comp">
        <div className={main3compdiv}>
            <div className="topline"/>
            <div className="outercircle"/>
            <div className="innercircle"/>
            <div className="texthead">Committed To Provide Quality Product In Competitive Market</div>
            <div className="textbody">We Are Digiyogi And We Craft Technology To Help People, Enterprises, We Provide Ultimate Solution For Modern Business. Digiyogi Committed To Deliver Top Shelf Products In Competitive Market. We Combine Design And Development With Marketing Strategies, Which Helps To Boost Your Commerce In All Three Dimensions. We Strive To Fulfil Your Needs, We Try To Create Experiences Rather Than Building Products. </div>
            <div className="botline"/>
            <div className="botline1"/>
        </div>
      </div>
    </div>
  );
}
