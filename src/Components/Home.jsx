import React from 'react'
import { ImHtmlFive } from "react-icons/im"
import userImg from "../Images/resumeimage.jpg"
import { IoLogoReact, IoLogoCss3, IoLogoJavascript } from "react-icons/io5"
import { BiLogoRedux, BiLogoJquery } from "react-icons/bi"
import { RiBootstrapLine } from "react-icons/ri"
import { AiFillHtml5 } from "react-icons/ai"
import { FaGitlab } from "react-icons/fa6"
import Glass from "../Images/glass.png"
import Contact from './Contact'
const Home = () => {

  return (
    <div>
      <div className='bgBanner'>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <div className="col-lg-6">
              <h1 className='bigHead_text mb-0'>Hi, I'm </h1>
              <h2 className='bigHead_text mb-0'>Vignesh Babu <img src={Glass} alt='glassicon' className='glassIcon' /></h2>
              <p className='para_text mt-md-3'>Web Developer Specializing in FrontEnd Development - ReactJS</p>
              <button className='Button' >Hire me</button>
            </div>
            <div className="col-lg-6">
              <div className='rotateCircle'>
                <div className="center-circle shadow-lg">

                </div>
                <div className='secondCircle'></div>
                <div className="outer-circles">
                  <div className="outer-circle shadow-sm">
                    <IoLogoReact className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <BiLogoRedux className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <RiBootstrapLine className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <BiLogoJquery className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <IoLogoJavascript className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <IoLogoCss3 className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <AiFillHtml5 className='logos' />
                  </div>
                  <div className="outer-circle shadow-sm">
                    <FaGitlab className='logos' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Contact />
      </div>
    </div>
  )
}

export default Home