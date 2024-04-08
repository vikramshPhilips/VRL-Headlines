import React from 'react'
import './Homepage.css'
import logo from '../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'


const Homepage = (props) => {
  const Navigator = useNavigate();
  const logOut=() => {
    Navigator("/");
  }
  const news = () =>{
    Navigator("/news");
  }
  const {dataFromParent} = props;
  
  console.log(dataFromParent);
  return (
    <div>
            <div className="TitleBar">
              <img src={logo} alt="Philips Logo" className='logo hovr' />
                  <div className='title_item'> <p onClick={news}>Top Headlines</p></div>
                  <div className='title_item'><p onClick= {() => { window.location.href="https://vikramsh2002.github.io/My-Portfolio/"}}>About Us</p></div>
                  <div className='title_item'><p onClick={logOut}>Log Out</p> </div>
            </div>
            <h1 className='Title'> Welcome To <span> VRL </span>News</h1>
            
            <div className='slideshow'>
                 <div className='Slide'></div>
            </div>
    </div>
  )
}

export default Homepage
