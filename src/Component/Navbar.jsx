import React from 'react'
import "./Navbar.css"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    return (
        <div className="nav-main">
        <div className="Navbar">
            <brand>P</brand>
            <ul className="List">
            <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li>
                    <a href="">Contact</a>
                </li>
              
            </ul>
            <button className="Btn" id="Clicker" onClick={()=>{
                const BtbAtb=document.getElementById("Mobile_view");
                const AtbValue=BtbAtb.getAttribute("Dis-v");
                if(AtbValue==="false")
                {
                    BtbAtb.setAttribute("Dis-v","true");
                }
                else if(AtbValue==="true")
                {
                    BtbAtb.setAttribute("Dis-v","false")
                }
                
            }}><MenuIcon /></button>
        </div>
        <div className="Mobile_nav"  Dis-v="false" id="Mobile_view">
        <ul className="List" Dis-v="false">
            <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li>
                    <a href="">Contact</a>
                </li>
                
              
            </ul>
        </div>
        </div>
    )
}
