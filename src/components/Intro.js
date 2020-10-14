import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

export default function Intro() {
    return (
        <div>
            <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>
                <div style={{background: "pink", width:"100%"}}>
                <div style={{position:"relative"}}>
                        <h1 className="placement">
                        Go to 
                        <a href="http://www.eunicebaiden.com">E.B.'s Folio</a>
                        </h1>
                    </div>
                    
                </div>
                <div style={{background: "gold", width:"100%"}}>
                    <div style={{position:"relative"}}>
                        <h1 className="placement">
                        Continue to
                        E.B.'s lab
                        </h1>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
