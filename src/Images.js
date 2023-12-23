import React from "react";
import './style/Images.css';
import ImageOne from './Images/image-1.jpg';
import ImageTwo from './Images/image-2.jpg';
import ImageThree from './Images/image-3.jpg';
import ImageFour from './Images/image-4.jpg';

function Images() {
    return (
        <>
            <div className="image-Component">
                <div className="left">
                    <img className='imgCard' src={ImageThree} alt="baloonImage" />
                    <img className='imgCard' src={ImageFour} alt="" />
                </div>
                <div className="right">
                    <img className='imgCard' src={ImageOne} alt="skyImage" />
                    <img className='imgCard' src={ImageTwo} alt="heartBaloonImage" />
                </div>
            </div>
        </>
    )
}
export default Images;
