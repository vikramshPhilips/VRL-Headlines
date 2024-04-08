import react, { useState } from 'react';
import { useContext } from 'react';
import Credentials_Context from './context';
const CredState = (prop) =>{
    const defaultCredentials = {
        "name":"",
        "email":"",
        "passwd":"",
        "logStatus":"false"
    }
    const [credentials,setCredentials] = useState(defaultCredentials);
    const updateCredentials = (key,value) => {

        setTimeout(() =>{

            setCredentials({...credentials,[key]:value});
        },1)
        
    }

    
    // const myf =  (name) => {
    //     console.log("Hello! " + name);
    // }
    // const hello = { myf}
    // const personalDetails = {
    //     "MobileNo": "8758984365",
    //     "Address": "11/2 Housing Society Sector 28 Nagwara, Banglore",
    //     "State":"Karnataka"
    // }
    
    
    // const [credentials, setCredentials]= useState(defaultCredentials);
    // console.log(defaultCredentials)


    // Test Multi Input Values 
    // value={[defaultCredentials,personalDetails,hello]}
    
    return (
        <Credentials_Context.Provider value={[credentials,updateCredentials]}>
            {prop.children}
        </Credentials_Context.Provider>
    )

}

export default CredState;