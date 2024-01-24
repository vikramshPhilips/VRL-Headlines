import React from 'react'
import * as Yup from 'yup'
const props=(str)=> {return `Password must have  at least have one ${str}`; };
const ForgotPasswdValidation = Yup.object({

   "Useremail":Yup.string().email("Invalid Email").required("Email can't be empty"),
   "Passwd":Yup.string().min(6,"Password Must at least have 6 char").max(15,"Password at most have 15 character").required("Please Enter the Psssword").matches(/[0-9]/,props("Numeric")),
   "ConfirmPasswd": Yup.string().required("Confirm Password can't be empty").oneOf([Yup.ref("Passwd"),null],"Confirm Password must be same as Password")
})


export default ForgotPasswdValidation
