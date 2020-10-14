import React from 'react'

export default function Home() {
    return (
        <div style={{background: "deepskyblue", margin: "0px 20px", height: "300px", position:"relative", top:"-100px"}}>
            <div style={{display:"flex"}}>
                <div style={{margin: "20px"}}>Link 1</div>
                <div style={{margin: "20px"}}>Link 2</div>
                <div style={{margin: "20px"}}>Link 3</div>
                <div style={{margin: "20px"}}>Link 3</div>
            </div>
            <div style={{display:"flex", flexWrap:"wrap", flexGrow:"1"}}>
                
                <div className="box">Picture 1</div>
                <div className="box">Picture 2</div>
                <div className="box">Picture 3</div>
                <div className="box">Picture 4</div>
                <div className="box">Picture 5</div>
                <div className="box">Picture 6</div>
                <div className="box">Picture 7</div>
            {/* <div style={{background: "crimson" , width: "100%", padding: "20px", margin: "20px"}}>Picture 1</div>
            <div style={{background: "darksalmon" , width: "100%", padding: "20px", margin: "20px"}}>Picture 2</div>
            <div style={{background: "indianred", width: "100%", padding: "20px", margin: "20px"}}> Picture 3</div> */}
            </div>

            
        </div>
    )
}
