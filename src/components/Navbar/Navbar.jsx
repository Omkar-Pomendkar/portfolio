import React, { useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

  // Create state Variable for menu
  // Add underline Effect in it
  const  [menu,setMenu] = useState("about");


  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        {/* over here we are making use of Ternary Operator */}
        <li>  <AnchorLink  className='anchor-link' offset={50} href='#home'><p  onClick={()=>setMenu("home")}>Home</p> </AnchorLink>  {menu === 'home'? <img src={underline} alt="" /> : <> </> }</li>
        <li> <AnchorLink  className='anchor-link' offset={50} href='#about'> <p  onClick={()=>setMenu("about")}> About</p> </AnchorLink>{menu === 'about'? <img src={underline} alt="" /> : <> </> }</li>
        <li> <AnchorLink  className='anchor-link' offset={50} href='#services'> <p  onClick={()=>setMenu("services")}>Services</p></AnchorLink> {menu === 'services'? <img src={underline} alt="" /> : <> </> }</li>
        <li> <AnchorLink  className='anchor-link' offset={50} href='#work'> <p  onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>  {menu === 'work'? <img src={underline} alt="" /> : <> </> }</li>
        <li> <AnchorLink  className='anchor-link' offset={50} href='#contact'> <p  onClick={()=>setMenu("contact")}> Contact</p> </AnchorLink>{menu === 'contact'? <img src={underline} alt="" /> : <> </> }</li>
      </ul>

      <div className="nav-connect"> <AnchorLink  className='anchor-link' offset={50} href='#contact'> <p  onClick={()=>setMenu("contact")}> Connect with me</p> </AnchorLink></div>
    </div>
  )
}

export default Navbar
