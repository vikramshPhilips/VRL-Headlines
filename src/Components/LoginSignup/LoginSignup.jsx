import React, {  useState } from 'react'
import './LoginSignup.css'
import {useForm} from 'react-hook-form'
/* Importing the Images that are in assests
*/

import user_icon from '../Assets/User.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import logo from '../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'


import LogInSignUp_Validation from '../ValidationSchemas/LogInSignUp_Validation'
import warningImage from '../Assets/warning.png'

import Homepage from '../Homepage'



const LoginSignup = () => {

    /*  Give Functionality to sign up form we will use state variable
    Syntx will be 
    const [variable_name, function_name] = useSate(<stateName>)
    # If state is login then login button is in gray else sigup in gray
    # Note this variable is passed in html 
    */
    const [heading,setHeading]= useState("Log In");
    
    const default_data={
        "Name":"",
        "Useremail":"",
        "Passwd":""
    }

    const {values,errors,touched, handleBlur,handleChange,handleSubmit,resetForm}= useFormik(
        {
            initialValues: default_data,
            validationSchema: LogInSignUp_Validation,
            
            onSubmit: () => {
                console.log("Submitted By On Submit ");

            }
            
            
        }
    )



    // const [register,setRegister]= useState(default_data);
    // const [records, setRecords] = useState([]);




    // const [email,setEmail] = useState("");
    // const [name,setName] = useState("");
    // const [passwd,setPasswd] = useState("");
    
    // const RegisterInputs= (evt) =>{
    //     const name = evt.target.name;
    //     const value = evt.target.value;
    //     setRegister({...register, [name]:value});

    //     console.log(register);

    // }
    
    const navigate=useNavigate();

    // const submitRegisterForm = () => {

    //         alert("Register Successfully");
            
    //         // Insert a new registration
    //         const newEntry =  {...register, id: new Date().getTime().toString()};
    //         setRecords([...records,newEntry] );

    //         console.log(newEntry);
    //         alert();
    //         setRegister(default_data);

    //         // setEmail("");
    //         // setPasswd("");
    //         // setName("");
    //         setHeading("Log In");  
            
                 

    // }
    const Submission = ()=>{
        if(heading==="Log In"){
            if(errors.Useremail===undefined && errors.Passwd=== undefined && values.Passwd!=="" && values.Useremail!=="")
            {   //console.log("******************************** Printing Values");
                //console.log(values); 
                submitLogInForm();
            }
            else
                alert("Invalid username or password");
        }
        else{
            if(errors.Useremail===undefined && errors.Passwd=== undefined && errors.Name===undefined && values.Name!=="" && values.Passwd!=="" && values.Useremail!=="")
                
                submitRegisterForm();
        }
        console.log(errors);


    }
    const submitLogInForm = () => {
        navigate("/home");
    }
    const ResetData=() =>{
        values.Name="";
        values.Useremail="";
        values.Passwd="";
    }
    const submitRegisterForm = () => {

        if(resetForm)
           { 
            
            resetForm();
            //ResetData();  
            console.log("Reset Success!");
            console.log(values); 

            alert("Register Success!");
            
            setHeading("Log In");
            
        
        }

        //resetForm({values: default_data});
        
    }

    // const Redirect = (place)=>{
    //     return (
    //         place === "Homepage"? 
            
    //         :
    //         ""    );
    // }
    
    
    
    return (

    <form className='container' onSubmit={handleSubmit}>
        

        <div className='header'>
            <div className='logo'>
                <img src={logo} alt=" Philips Logo" className='logo' />
             </div>

            <div className='text'> {heading} </div>
            <div className='underline'></div>
            
        </div>


        <div className='inputs'>

                <div className={ heading === "Log In" ? "noinput" : "input"}>
                    <img src={user_icon} alt="User Icon" />
                    <input type="text"  placeholder='Name' name="Name"  autoComplete='off'
                    /*value ={name}*//* onChange={(e) => setName(e.target.value)*/
                    value={values.Name} onChange={handleChange} onBlur={handleBlur}
                    />



                </div>
                { heading==="Sign Up" ? <div className= {errors.Name && touched.Name ? "Warning Show" :"Warning" }><p>{errors.Name} </p><img src={warningImage} alt="warning symbol"/></div> : null}



                <div className='input'>
                        <img src={email_icon} alt="Email Icon" />
                        <input type="email" name="Useremail" placeholder='Email'  autoComplete='off' 
                        value={values.Useremail}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                </div>

                <div className= {errors.Useremail && touched.Useremail ? "Warning Show" :"Warning" }><p>{errors.Useremail} </p><img src={warningImage} alt="warning symbol"/></div>

                <div className='input'>
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" name="Passwd" placeholder='Password'   autoComplete='off'
                    value={values.Passwd}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                </div>
                <div className= {errors.Passwd && touched.Passwd ? "Warning Show" :"Warning" }><p>{errors.Passwd} </p><img src={warningImage} alt="warning symbol"/></div>    


        </div>

        <div className={ heading === "Sign Up"? "noinput" :"forgot-password"}> 
            Lost Password ? 
            <span onClick={(e) => navigate("/forgot")}>  Click Here!! </span>
        </div>

        <div className='submit-container' >

            

            <div className= "submit"
            onClick={Submission}>
                {heading}
            </div>

            <div className={ "submit gray"}
            onClick={heading ==="Log In"?() => 
            { 
                resetForm(); 
                setHeading("Sign Up");
            } :  
            () => { 
                    resetForm();   
                    setHeading("Log In"); 
                  }}>
            
                {heading === "Log In"? "Sign Up" : "Log In"}

            </div>
        </div>
        {/* <div className='noinput'> <Homepage dataFromParent={values}/> </div> */}
        
        
    </form>
    )
}

export default LoginSignup
