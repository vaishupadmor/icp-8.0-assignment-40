import React from 'react'
import Navbar from "./../../../component/navbar/navbar"
import homeimg from "./../../home/home/home.jpg"
import Footer from "./../../../component/footer/footer"
import toast ,{ Toaster } from "react-hot-toast";

function home() {
  return (
    <div>
        <Navbar/>
        
        <h1 className='heading'>home</h1>
        <img src={homeimg} className='images'/>
        
      <div >
        <button type='button' onClick={ ()=>{
         toast.success("heelo toaster !")
        }

        }  style={{backgroundColor:'#A6B37D',borderRadius: 20, margin:10 ,padding:5,width:90}}> show toast</button>

<button type='button' onClick={ ()=>{
         toast.error("something went wrong !")
        }

        }  style={{backgroundColor:'#A6B37D',borderRadius: 20, margin:10 ,padding:5,width:90}}> show error</button>

<button type='button' onClick={ ()=>{
         toast.loading(" loading !")
        }

        }  style={{backgroundColor:'#A6B37D',borderRadius: 20, margin:10 ,padding:5,width:90}}> load</button>

<button type='button' onClick={ ()=>{
         toast.dismiss("finished !",{
          
          duration:"6599",
          
         })
         toast.success("loaded successsfully !")
        }

        }  style={
          {
            borderRadius: 20, margin:10 ,padding:5,backgroundColor:'#A6B37D',width:90,
          }
        }> Finish</button>

</div>
        <Toaster position='top-right'/>
        <Footer/>
    </div>
  )
}

export default home