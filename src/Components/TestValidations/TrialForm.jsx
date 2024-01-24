import React, { useState } from 'react'
import {useFormik} from 'formik'

import {TrialSchema} from '../../TrialValidationSchema/index.jsx'
import {mycss} from './TrialForm.css'
import warningImage from '../Assets/warning.png'
/*

Formik : It is used for data handling
Yup: It is used for data validation

*/ 

const TrialForm = () => {
    // work is to get Data
    const default_data={
        
        "username":"",
        "password":""
    }
    const {values,errors, touched,handleBlur,handleChange, handleSubmit,resetForm} = useFormik(  // This returns an object with various methods

        {

            initialValues:default_data,
            // validationSchema: TrialSchema,
            validationSchema: TrialSchema,
            onSubmit: (value) => {
                resetForm();
                console.log(value);
            }
             

        }
    )

    // const formik = useFormik(  // This returns an object with various methods

    //     {

    //         initialValues:default_data,
    //         // validationSchema: TrialSchema,
    //         validationSchema: TrialSchema,
    //         onSubmit: (value) => {
    //             console.log(value);
    //             setFieldValue(default_data);
    //             console.log(value);
    //         }
             

    //     }
    // )

    
    
    const [data,setData] = useState(default_data);
    


    // Hook for data
    

    const inputHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setData({...data,[name]:value});
    }

    const submitAnswer =  (data) => {
        console.log(data);
    }

    //console.log(errors);
    //console.log(formik);


  return (
    <div>
      
        <form onSubmit={handleSubmit}>
            <input type="email"  name="username" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
           <div className= {errors.username && touched.username ? "warning show" :"warning" }><p>{errors.username} </p><img src={warningImage} alt="warning symbol"/></div>
            
            
            <input type="password"  name="password" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
            <div className= {errors.password && touched.password ? "warning show" :"warning" }><p>{errors.password} </p><img src={warningImage} alt="warning symbol"/></div>
            
            <input type="submit" value="Login"/>





        </form>
    
   

    </div>
  )
}

export default TrialForm
