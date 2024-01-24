
import React, {  useState } from 'react'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import confirmpassword_icon from '../Assets/confirmpasswd.png'
import logo from '../Assets/Logo.png'
import warningImage from '../Assets/warning.png'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import validation from '../ValidationSchemas/ForgotPasswdValidation'
import './forgotpasswd.css'
const Index = () => {
    const navigate=useNavigate();
    const [isverified, setVerfied] = useState("false");
    const default_values={
        "Useremail":"",
        "ConfirmPasswd":"",
        "Passwd":""
    }
    

    const {values,errors,touched,handleChange,handleBlur,resetForm} = useFormik({
        initialValues:default_values,
        validationSchema:validation,
        
    }
    )
    const ChangePasswd = () => {
        if(errors.Useremail===undefined && errors.Passwd=== undefined && values.Passwd!=="" && values.Useremail!==""&& errors.ConfirmPasswd=== undefined && values.ConfirmPasswd!=="")
            {   //console.log("******************************** Printing Values");
                //console.log(values); 
                alert("Password Changed Successfully!!");
                navigate("/");
            }
        else{
            alert("Empty Field is not accepted..");
            resetForm();
        }
    }

    const verify = () => {
        const otp = prompt("Please Enter the OP T key ");
        if(otp==="Vikram1234"){
            setVerfied("true");

            
        }
        else {
            setVerfied("false");
            alert("Invalid OTP");
            resetForm();
        }
    }
  return (
    <form className='container' onSubmit={verify}>
        

        <div className='header'>
            <div className='logo'>
                <img src={logo} alt=" Philips Logo" className='logo' />
             </div>

            <div className='text'> Forgot Password </div>
            <div className='underline'></div>
            
        </div>
        <div className='inputs'>

                <div className='input'>
                        <img src={email_icon} alt="Email Icon" />
                        <input type="email" name="Useremail" placeholder='Email'  autoComplete='off' 
                        value={values.Useremail}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                </div>
                <div className= {errors.Useremail && touched.Useremail ? "Warning Show" :"Warning" }><p>{errors.Useremail} </p><img src={warningImage} alt="warning symbol"/></div>
                
                <div className={isverified === "false"?"change-container" : "noinput"}>
                <div className="showChange" onClick={verify}> Verfy Email </div>
                </div>
                <div className={isverified === "true"?"input" : "noinput"}>
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" name="Passwd" placeholder='Password'   autoComplete='off'
                    value={values.Passwd}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                </div>
                <div className= {errors.Passwd && touched.Passwd ? "Warning Show" :"Warning" }><p>{errors.Passwd} </p><img src={warningImage} alt="warning symbol"/></div> 

                <div className={isverified === "true"?"input" : "noinput"} >
                    <img src={confirmpassword_icon} alt="Confirm Password Icon" />
                    <input type="password" name="ConfirmPasswd" placeholder='Confirm Password'   autoComplete='off'
                    value={values.ConfirmPasswd}
                    onChange={handleChange}
                    onBlur={handleBlur}/>

                </div>
                <div className= {errors.ConfirmPasswd && touched.ConfirmPasswd ? "Warning Show" :"Warning" }><p>{errors.ConfirmPasswd} </p><img src={warningImage} alt="warning symbol"/></div> 
                <div className={isverified === "true"?"change-container" : "noinput"}>
                <div className="showChange"  onClick={(e) => ChangePasswd()}>
                     Change Password
                    </div> 
                </div>  

        </div>

    </form>

  )
}

export default Index
