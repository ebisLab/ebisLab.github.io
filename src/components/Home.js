import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { motion } from "framer-motion"
import imgdata from '../data/imgdata.json'
import {BrowserRouter as Router, Route, Link, Switch, useLocation, useHistory} from "react-router-dom"
const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

const container = {
    hidden: { marginTop: 150, opacity: 0 },
    visible: {
        marginTop: 108,
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
        delay: .6,
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
        staggerChildren: 0.07,
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  };



export default function Home() {
    const [data, setData]=useState([])
    const [freezeScroll,setFeezeScroll]=useState(false)
    const [checked, setChecked]=useState(false)

    const [query, setQuery] = useState('')
    const history=useHistory()




    
    useEffect(()=>{
        axios.get("https://api.github.com/search/repositories?q=topic:ebislab")
        .then(res=>
            setData(res.data),
            setFeezeScroll(true)
            )
    },[])


    const changeMobile=(e)=>{
      console.log(e.target.value)
      if(e.target.value =="all"){
        setQuery(null)
        return 
      }
      if(e.target.value =="illustration"){
        setQuery(imgdata.filter(el=>el.type.includes(`${e.target.value}`)))
        setChecked(true)
        console.log(imgdata)
        console.log("touched", e.target.value)
        return
      }
      if(e.target.value =="ux"){
        setQuery(imgdata.filter(el=>el.type.includes(`${e.target.value}`)))
        setChecked(true)
        return
      }
      if(e.target.value =="wordpress"){
        setQuery(imgdata.filter(el=>el.type.includes(`${e.target.value}`)))
        setChecked(true)
        return
      }
      setQuery(data.items.filter(el=>el.name.includes(`${e.target.value}`)))
      setChecked(false)
    }


    const filterthrough = (e)=>{
        e.preventDefault()
        if(e.target.dataset.tab =="illustration"){
          // setQuery(imgdata)
          setQuery(imgdata.filter(el=>el.type.includes(`${e.target.dataset.tab}`)))
          setChecked(true)
          console.log(imgdata)
          console.log("touched", e.target.dataset.tab)
          return
        }
        if(e.target.dataset.tab =="ux"){
          setQuery(imgdata.filter(el=>el.type.includes(`${e.target.dataset.tab}`)))
          setChecked(true)
          return
        }
        if(e.target.dataset.tab =="wordpress"){
          setQuery(imgdata.filter(el=>el.type.includes(`${e.target.dataset.tab}`)))
          setChecked(true)
          return
        }
        setQuery(data.items.filter(el=>el.name.includes(`${e.target.dataset.tab}`)))
        setChecked(false)
    }





const flower =()=>{
  if(query){

    return}

  return

}

    return (

       
        <motion.div 
        key="1"
        exit={{marginTop:"300px", opacity:0}}  
        className="container max"
        variants={container}
        transition={transition}
        initial="hidden"
        animate="visible"
        >

<div style={{color:"peachpuff"}} className="fullmenu">
            <ul style={{display:"flex", listStyleType:"none", justifyContent:"center", color:"peachpuff", fontFamily:"Reenie Beanie", fontSize:"2em"}}>
            <li style={{margin: "20px"}} className="submenu" onClick={() => setQuery(null)}>ALL</li>
                    <li data-tab="folio" className="submenu" style={{margin: "20px"}} onClick={filterthrough}>FullStack</li>
                    <li data-tab="illustration" className="submenu" style={{margin: "20px"}} onClick={filterthrough}>Illustrations</li>
                    <li data-tab="wordpress" className="submenu" style={{margin: "20px"}} onClick={filterthrough}>Wordpress</li>
                    <li data-tab="ux" className="submenu"style={{margin: "20px"}} onClick={filterthrough}>UI/UX</li>
                </ul>

      </div>

<div style={{color:"peachpuff"}} className="mobilemenu">
<form onChange={changeMobile}>
        <select name="categories" id="categories" 
        style={{ 
          background: "none",
         WebkitAppearance:"none",
         MozAppearance:"none",
        border: "2px solid peachpuff",
        width: "80%",
        height: "50px",
        color: "peachpuff",
        paddingBottom: "4px",
        textTransform: "uppercase",
        padding: "0 10px",
        margin: "30px 0",
        outline: "none"
      }}
        >
          <option value="all"> All </option>
          <option value="folio">FullStack</option>
          <option value="illustration">Illustrations</option>
          <option value="wordpress">Wordpress</option>
          <option value="ux">UI/UX</option>
        </select>
      </form>
</div>

            
            <div 
            style={{display:"flex", flexWrap:"wrap", flexGrow:0}}>     

                       {flower()}

                {query ?
                (query.map((item,key)=> {
             
                  const linked= checked?`url(/img/${item.bg})`:`url(https://github.com/ebisLab/${item.name}/blob/master/public/img.png?raw=true)`
                  const homepage= checked? "" :item.html_url
              
                return <motion.a 
                href={`${homepage}`} 
                className="box" key={key} info={item} 
                style={{
                  backgroundImage: linked, 
                width:"100%", 
                background: linked,
                backgroundSize:"cover"}} 
                variants={boxitem} 
                key={item.id}>
                  <motion.div 
                    
                    whileHover={{ opacity:1 }}
                    className="hovereffect"
                    >
                      <div>
                      <motion.div 
                      initial={{opacity:0, marginTop:65}}
                      animate={{opacity:1, marginTop:0, trasition: {delay: 6, transition}}}
                      className="hovereffectplacement"
                      >{item.name}</motion.div>
                        <div style={{padding:"10px"}}>{item.language}</div>
                        <div style={{display:"inline-flex"}}>
                       <a href={`${item.url}`} style={{padding:5, background:"darkgrey", margin:"5px", borderRadius:"5px"}}>Live Project</a>

                        </div>
                    
                    </div>
                    </motion.div>
                        
                        </motion.a>}))
                        :

                        
                <>
{                (data.items && data.items.map((item, key)=> (
                    <>
                <motion.a  href={item.html_url} className="box" key={key} info={item} 
                style={{
                  width:"100%", 
                  background:`url(https://github.com/ebisLab/${item.name}/blob/master/public/img.png?raw=true)`, 
                  backgroundSize:"cover",
                }} 
                  variants={boxitem} key={item.id}>
                    <motion.div 
                    whileHover={{ opacity:1 }}
                    className="hovereffect"
                    >
                      <div>
                      <motion.div 
                      initial={{opacity:0, marginTop:65}}
                      animate={{opacity:1, marginTop:0, trasition: {delay: 6, transition}}}
                      className="hovereffectplacement"
                      >{item.name}</motion.div>
                        <div style={{padding:"10px"}}>{item.language}</div>
                        <div style={{display:"inline-flex"}}>
                      <a href={`${item.html_url}`} style={{padding:5, margin: "5px", background:"lightgrey", color:"black", borderRadius:"5px"}}>Github</a>
                       <a href={`${item.homepage}`} style={{padding:5, background:"darkgrey", margin:"5px", borderRadius:"5px"}}>Live Project</a>

                        </div>
                    
                    </div>
                    </motion.div>
                        
                        </motion.a>
                </>

                
                )))}
                
                 {imgdata.map(item=>(
                          <motion.div key={item.bg} className="box" style={{width:"100%", background:`url(/img/${item.bg})`, backgroundSize:"cover"}} variants={boxitem2}>
                          <motion.div 
                    
                    whileHover={{ opacity:1 }}
                    className="hovereffect"
                     >
                      <div>
                      <motion.div 
                      initial={{opacity:0, marginTop:65}}
                      animate={{opacity:1, marginTop:0, trasition: {delay: 6, transition}}}
                      className="hovereffectplacement"
                      >{item.name}</motion.div>
                        <div style={{padding:"10px"}}>{item.language}</div>
                        <div style={{display:"inline-flex"}}>
                       <a href={`${item.url}`} style={{padding:5, background:"darkgrey", margin:"5px", borderRadius:"5px"}}>Live Project</a>

                        </div>
                    
                    </div>
                    </motion.div>
                          </motion.div> 
                        ))}    

                

                </>
        }


            </div>
        </motion.div>

    )
}
