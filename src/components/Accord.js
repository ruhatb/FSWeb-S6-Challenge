import React, { useState } from "react";
import Karakter from "./Karakter";

import './App.css';

export default function Accord(props) {
const { title, children } = props;
const [open, setOpen ] = useState(false);


 return (
        <div className={`accord ${open ? "open" : ""}`}>
        <div className="acc-title" onClick={() => setOpen(!open)}>
        <div className="title">
            {title} , {children}
        </div>
        </div>
        </div>
       
 );
 
 };

