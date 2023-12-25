import React from 'react'
import "./sidebar.scss"
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logoD.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
      <div className='nav-bar'>
          <NavLink className="logo" to={"/"}>
              <img src={Logo} alt="..." />
          </NavLink>
          <nav>
              <NavLink exact="true" activeclassname="active" to="/">
                  <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
              </NavLink>
              <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                  <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
              </NavLink>
              <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
              </NavLink>
          </nav>
          <ul>
              <li>
                  <a href="">
                      
                  </a>
              </li>
          </ul>
    </div>
  )
}
