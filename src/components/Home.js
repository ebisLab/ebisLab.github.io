import React,{useState, useEffect} from 'react';
import axios from 'axios'

export default function Home() {
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users/ebisLab/repos")
        .then(res=>
            setData(res.data))

    },[])

    console.log("DATA-->", data)
    return (
        <div style={{background: "deepskyblue", margin: "0px 20px", position:"relative", top:"-100px"}}>
            <div style={{display:"flex"}}>
                <div style={{margin: "20px"}}>Link 1</div>
                <div style={{margin: "20px"}}>Link 2</div>
                <div style={{margin: "20px"}}>Link 3</div>
                <div style={{margin: "20px"}}>Link 3</div>
            </div>
            <div style={{display:"flex", flexWrap:"wrap", flexGrow:"1"}}>
                {data.map(item=>
                <div className="box" key={item.id}>
                   ( {item.name})
                
                </div>)}
            {/* <div style={{background: "crimson" , width: "100%", padding: "20px", margin: "20px"}}>Picture 1</div>
            <div style={{background: "darksalmon" , width: "100%", padding: "20px", margin: "20px"}}>Picture 2</div>
            <div style={{background: "indianred", width: "100%", padding: "20px", margin: "20px"}}> Picture 3</div> */}
            </div>

            
        </div>
    )
}
