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
            <li><AnchorLink className='anchor-link' offset={150} href='#home'><Link className='anchor-link' to="/"><p onClick={()=>setMenu("home")}><FiHome /></p></Link></AnchorLink> 
                {menu==="home" ? <img src={new_underline}/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={100} href='#about'><Link className='anchor-link' to="/"><p onClick={()=>setMenu("about")}><PiDetective /></p></Link></AnchorLink> 
                {menu==="about" ? <img src={new_underline}/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={100} href='#portfolio'><Link className='anchor-link' to="/"><p onClick={()=>setMenu("portfolio")}><FaRegFolderOpen /></p></Link></AnchorLink> 
                {menu==="portfolio" ? <img src={new_underline}/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={100} href='#contact'><Link className='anchor-link' to="/"><p onClick={()=>setMenu("contact")}><MdAlternateEmail /></p></Link></AnchorLink> 
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
