import React, { useContext, useEffect } from 'react'
import Credential from '../../Context/Credentials/context'

const Index = () => {
  //const [mycred,data,myf] = useContext(Credential);
  const [mycred,myUpdate]=useContext(Credential);
  
  

  return (
    <div>
           <h1> Hello {mycred.name}</h1>
           <h1>{mycred.email}</h1> 
           {
              useEffect(()=> { myUpdate(prompt("Enter the Key"),prompt("Enter the value "))},[])
           }
           {/* <h1>{data.MobileNo}</h1>
           {myf.myf(mycred.name)} */}
           
           

           
    </div>
  )
}

export default Index
