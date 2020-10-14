import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

export default function Intro() {
    return (
        <div>
            <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>
                <div style={{background: "pink", width:"100%"}}>Left part</div>
                <div style={{background: "gold", width:"100%"}}>Right part</div>
            </div>
            
        </div>
    )
}
