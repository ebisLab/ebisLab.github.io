import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { motion } from "framer-motion"
import imgdata from '../data/imgdata.json'
import {BrowserRouter as Router, Route, Link, Switch, useLocation} from "react-router-dom"

const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

const container = {
    hidden: { marginTop: 150, opacity: 0 },
    visible: {
        marginTop: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: .6,
        duration:1.5,
        when: "beforeChildren",
        staggerChildren: 3.0
      }
    }
  };

  const container2 = {
    hidden: { marginTop: 0, opacity: 1 },
    visible: {
        marginTop: 50,
      opacity: 0,
      scale: 1,
      transition: {
        delay: .2,
        when: "beforeChildren",
        staggerChildren: 3.0
      }
    }
  };
  
  const boxitem = {
    hidden: { marginTop: 20, opacity: 0 },
    visible: {
      marginTop: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

    
  const boxitem2 = {
    hidden: { marginTop: 20, opacity: 0 },
    visible: {
      marginTop: 0,
      opacity: 1,
      transition: {
        // delay: 0.1,
        staggerChildren: 0.07,
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  };

export default function Home() {
    const [data, setData]=useState([])
    const [freezeScroll,setFeezeScroll]=useState(false)

    const [query, setQuery] = useState('')
    const [extQuery, setExtQuery]=useState('')


    
    useEffect(()=>{
        axios.get("https://api.github.com/search/repositories?q=topic:ebislab")
        .then(res=>
            setData(res.data),
            setFeezeScroll(true)
            )
    },[])
    const filterthrough = (e)=>{
        e.preventDefault()
        setQuery(data.items.filter(el=>el.name.includes(`${e.target.dataset.tab}`)))
        setExtQuery(imgdata.filter(el=>el.includes(`${e.target.dataset.tab}`)))
    }

    return (

       
        <motion.div 
        key="1"
        // exit={{ marginTop: "-50%", opacity: 0, transition }}
        exit={{marginTop:"300px", opacity:0}}  
        className="container"
        variants={container}
        transition={transition}
        initial="hidden"
        animate="visible"
        style={{background: "lightgrey", margin: "0px 7%", marginTop:"300px" }}
        >

            <ul style={{display:"flex", listStyleType:"none"}}>
            <li style={{margin: "20px"}} onClick={() => setQuery(null)}>All</li>
                    <li data-tab="folio" className="something" style={{margin: "20px"}} onClick={filterthrough}>Folio</li>
                    <li data-tab="0" style={{margin: "20px"}} onClick={filterthrough}>Illustrations</li>
                    <li style={{margin: "20px"}} onClick={filterthrough}>FullStack</li>
                    <li data-tab="ux" style={{margin: "20px"}} onClick={filterthrough}>UI</li>
                </ul>


            
            <div 
            style={{display:"flex", flexWrap:"wrap", flexGrow:"1"}}>                

                {query ?(query.map((item,key)=> <motion.div 
                className="box" key={key} info={item} 
                style={{backgroundImage:`url(https://github.com/ebisLab/${item.name}/tree/master/public/img.png/?raw=true)`|| `url(https://github.com/ebisLab/${item.name}/blob/master/client/public/img.png/?raw=true)`, 
                width:"100%", 
                background:`url(https://github.com/ebisLab/${item.name}/blob/master/public/img.png?raw=true)`, 
                backgroundSize:"cover"}} 
                variants={boxitem} 
                key={item.id}>
                        {item.name}
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>)): 
                <>
{                (data.items && data.items.map((item, key)=> (
                    <>
                <motion.div className="box" key={key} info={item} style={{backgroundImage:`url(https://github.com/ebisLab/${item.name}/tree/master/public/img.png/?raw=true)`|| `url(https://github.com/ebisLab/${item.name}/blob/master/client/public/img.png/?raw=true)`, width:"100%", background:`url(https://github.com/ebisLab/${item.name}/blob/master/public/img.png?raw=true)`, backgroundSize:"cover"}} variants={boxitem} key={item.id}>
                        {item.name}
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>

                      

                                
                      

                </>

                
                )))}
                 {/* -------- REFACTOR THIS PART --------- */}
                <motion.div className="box" style={{width:"100%", background:`url(/img/img.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>    
                     <motion.div className="box" style={{width:"100%", background:`url(/img/img2.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>
                        <motion.div className="box" style={{width:"100%", background:`url(/img/img3.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>   
                      <motion.div className="box" style={{width:"100%", background:`url(/img/img4.jpg)`, backgroundSize:"cover"}} variants={boxitem2}>
                        RECORDSSSSSS Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>   
                        <motion.div className="box" style={{width:"100%", background:`url(/img/img5.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div> 
                        <motion.div className="box" style={{width:"100%", background:`url(/img/img6.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>     
                        <motion.div className="box" style={{width:"100%", background:`url(/img/img7.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>  
                      <motion.div className="box" style={{width:"100%", background:`url(/img/img8.png)`, backgroundSize:"cover"}} variants={boxitem2}>
                        Illustrations
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>   
////
                        {/* {imgdata.map(item=>(
                          <motion.div key={item.bg} className="box" style={{width:"100%", background:`url(/img/${item.bg})`, backgroundSize:"cover"}} variants={boxitem2}>
                          Illustrations
                          <div>Github</div>
                      <div>Website</div>
                          </motion.div> 
                        ))}     */}


                        /////

                        


{/* -----  END REFACTOR THIS PART ----- */}

                </>
        
                
                }


             


            </div>
        </motion.div>

    )
}
