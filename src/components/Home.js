import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { motion } from "framer-motion"

const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

const container = {
    hidden: { marginTop: 50, opacity: 0 },
    visible: {
        marginTop: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5,
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
    useEffect(()=>{
        axios.get("https://api.github.com/search/repositories?q=topic:ebislab")
        .then(res=>
            setData(res.data),
            setFeezeScroll(true)
            )
    },[])


    return (
        <motion.div                 
        className="container"
        variants={container}
        transition={transition}
        initial="hidden"
        animate="visible"
        style={{background: "dimgray", margin: "0px 7%", position:"relative", top:"-300px"}}>
            <div style={{display:"flex"}}>
                <div style={{margin: "20px"}}>Link 1</div>
                <div style={{margin: "20px"}}>Link 2</div>
                <div style={{margin: "20px"}}>Link 3</div>
                <div style={{margin: "20px"}}>Link 3</div>
            </div>


            
            <div 
            style={{display:"flex", flexWrap:"wrap", flexGrow:"1"}}>                
                {data.items && data.items.map(item=>
                <>
                {console.log(freezeScroll == true ?"its frozen":"its not frozen")}
                    <motion.div className="box" style={{backgroundImage:`url(https://github.com/ebisLab/${item.name}/tree/master/public/img.png/?raw=true)`|| `url(https://github.com/ebisLab/${item.name}/blob/master/client/public/img.png/?raw=true)`, width:"100%", background:`url(https://github.com/ebisLab/${item.name}/blob/master/public/img.png?raw=true)`, backgroundSize:"cover"}} variants={boxitem} key={item.id}>
                        {item.name}
                        <div>Github</div>
                    <div>Website</div>
                        </motion.div>

                    </>
                    )} 

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
                        Illustrations
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
             


            </div>

            
        </motion.div>
    )
}
