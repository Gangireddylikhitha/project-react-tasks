import { Route, Routes } from "react-router-dom"

// import { Restaurant } from "./day5Navigation"
// import { HomeScreen } from "../components/HomeScreen"
// import { AboutScreen } from "../components/AboutScreen"
import { LoginForm } from "../components/loginForm"
import { useState } from "react"

export const FormData=()=>{

  // const[data,setData]=useState([])


        const[isForm,setIsForm]=useState(false)
      
      
        const formHandler=()=>{
          setIsForm(prevState => !prevState); 
        }
      
      
      // const dataHandler=(newData)=>{
      //   setData([...data,newData])
      // }
      
      // const onSubmit=(event)=>{
      //   event.preventDefault()
      
      //   dataHandler({name:"ram"})
      // }






    return(
      
<div>
    {/* <Routes>

        <Route path="/" element={<Restaurant/>}/>
         <Route path="/home" element={<HomeScreen/>}/>
         <Route path="/about" element={<AboutScreen/>}/>

      </Routes> */}

      <button onClick={formHandler} style={{ backgroundColor: "green" }}>add+</button>
 
      {
        isForm?(<LoginForm/>):""
      } 

  </div>  
 
       
    )
}