import React, { useState } from 'react'
import './Navbar.css'
import ul from '../../assets/ul.png'
import new_underline from '../../assets/underline.png'
import Dropdown from './Dropdown'
import { FiHome } from "react-icons/fi";
import { PiDetective } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router'

const Navbar = () => {

  const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
        {/*<img src={ul} alt="" />*/}
        <ul className="nav-menu">
            <li><a className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}><FiHome /></p></a> 
                {menu==="home" ? <img src={new_underline}/> : <></>}</li>
            <li><a className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}><PiDetective /></p></a> 
                {menu==="about" ? <img src={new_underline}/> : <></>}</li>
            <li><a className='anchor-link' href='#portfolio'><p onClick={()=>setMenu("portfolio")}><FaRegFolderOpen /></p></a> 
                {menu==="portfolio" ? <img src={new_underline}/> : <></>}</li>
            <li><a className='anchor-link' href='#contact'><p onClick={()=>setMenu("contact")}><MdAlternateEmail /></p></a> 
                {menu==="contact" ? <img src={new_underline}/> : <></>}</li>
            
            
            {/*<li><Link className='anchor-link' to="/resources"><p onClick={()=>setMenu("resources")}>{<Dropdown/>}</p></Link> {menu==="resources" ? <img src={new_underline}/> : <></>}</li>*/}
            {/* <li><Link className='anchor-link' to="/blog"><p onClick={()=>setMenu("blog")}>blog</p></Link> {menu==="blog" ? <img src={new_underline}/> : <></>}</li> */}

        </ul>
        
        {/*<div className="nav-connect" onClick={()=>setMenu("contact")}>
          <AnchorLink className='anchor-link' offset={110} href='#contact'>
            <Link className='anchor-link' to="/">
                connect with me
            </Link>
          </AnchorLink>
        </div>*/}
    </div>
  )
}

export default Navbar
