import React from 'react'
import {BsTwitter,BsInstagram, BsFacebook} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import{BsGithub} from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://twitter.com/vedantgadodia" target="_blank"><BsTwitter/></a>
           
        </div>
        <div>
        <a href="https://github.com/ved-ant" target="_blank"><BsGithub/></a>
        </div>
        <div>
        <a href="https://www.instagram.com/vedant.gadodia/" target="_blank"><BsInstagram/></a>
        </div>
        <div>
        <a href="https://www.facebook.com/profile.php?id=100008232396785a" target="_blank"><BsFacebook/></a>
        </div>
    </div>
  )
}

export default SocialMedia