import React from 'react'
import * as Yup from 'yup'


const props=(str)=> {return `Password must have  at least  one ${str}`; };
const LogInSignUp_Validation = Yup.object({

   "Name": Yup.string("Should be a String").required("Name Can't be empty").min(2).max(30).matches(/^[a-zA-Z][a-zA-Z\s'-]*[a-zA-Z]$/,"Invalid Name Format"), //This regex ensures that the name starts and ends with alphabets, allowing hyphens, spaces, and alphabets in between.
   "Useremail":Yup.string().email("Invalid Email").required("Email can't be empty"),
   "Passwd":Yup.string().min(6,"Password Must at least have 6 char").max(15,"Password at most have 15 character").required("Please Enter the Psssword").matches(/[0-9]/,props("Numeric"))
   .matches(/[a-z]/,props("Lowercase Letter")).matches(/[A-Z]/,props("Uppercase Letter")).matches(/[@,,#,$,!,%,*,?,&,-,_,+,=,^,:,;,",']/,props("Special Symbol"))

})

export default LogInSignUp_Validation
