import React from 'react'
import './../../StyleSheets/Homepage/main1.css';
import './../../StyleSheets/extras.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const right = <FontAwesomeIcon icon={faAngleRight} />;

export default function Main1() {

  return (
    <div className="main1">
        <div className="main1back">
            <div className="main1fore">
            </div>
            <div className="main1text1">
            Welcome to DigiYogi
            </div>
            <div className="main1text2">
            Here you can build your Dream Project
            </div>
            <div className="main1butcont">
                <div className="main1but">
                    <span>Start Now <i>{right}</i></span>
                </div>
            </div>
        </div>
    </div>
  );
}
