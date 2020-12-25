import React, { useState, useEffect } from 'react'
import './../../StyleSheets/Homepage/main1.css';
import './../../StyleSheets/extras.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const right = <FontAwesomeIcon icon={faAngleRight} />;


export default function Main1() {
const [main1fore, setHeader] = useState("main1fore")

const listenScrollEvent = (event) => {
  if (window.scrollY < 0) {
    return setHeader("main1fore")
  } else if (window.scrollY > 10 && window.scrollY < 100) {
    return setHeader("main1fore1")
  }else if (window.scrollY > 100 && window.scrollY < 200) {
    return setHeader("main1fore2")
  }else if (window.scrollY > 200 && window.scrollY < 300)  {
    return setHeader("main1fore3")
  }else if (window.scrollY > 300)  {
    return setHeader("main1fore4")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

  return (
    <div className="main1">
      <div className="main1comp">
        <div className="main1back">
            <div className={main1fore}>
            </div>
            <div className="main1text1">
            Welcome to DigiYogi
            </div>
            <div className="main1text2">
            Here you can build your Dream Project
            </div>
            <div className="main1but">
                    Start Now <i className="i">{right}</i><span><i>{right}</i><i>{right}</i><i>{right}</i></span>
            </div>
        </div>
      </div>
    </div>
  );
}
