import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { motion } from "framer-motion"

const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 3.0
      }
    }
  };
  
  const boxitem = {
    hidden: { marginTop: 20, opacity: 0 },
    visible: {
      marginTop: 0,
      opacity: 1
    }
  };

export default function Home() {
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get("https://api.github.com/users/ebisLab/repos")
        .then(res=>
            setData(res.data))

    },[])
    return (
        <motion.div                 
        className="container"
        variants={container}
        transition={transition}
        initial="hidden"
        animate="visible"
        style={{background: "deepskyblue", margin: "0px 20px", position:"relative", top:"-100px"}}>
            <div style={{display:"flex"}}>
                <div style={{margin: "20px"}}>Link 1</div>
                <div style={{margin: "20px"}}>Link 2</div>
                <div style={{margin: "20px"}}>Link 3</div>
                <div style={{margin: "20px"}}>Link 3</div>
            </div>


            
            <div 
            style={{display:"flex", flexWrap:"wrap", flexGrow:"1"}}>
                {data.map(item=>
                    <motion.div className="box" variants={boxitem} key={item.id}>{item.name}</motion.div>)}

                {/* // <motion.div className="box" variants={boxitem} key={item.id}>
                //    ( {item.name})
                // </motion.div>)} */}

{/* {[1,2,3,4].map(item=>
                <motion.div style={{margin: "40px", height:"100px", width: "100px", background:"white"}} variants={boxitem} key={item}/>)} */}
                
            </div>

            
        </motion.div>
    )
}
