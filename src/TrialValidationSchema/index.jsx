import React from "react";
import * as Yup from 'yup';
const props=(str)=> {return `Password must have  at least have one ${str}`; };
export const  TrialSchema = Yup.object({
    
    "username": Yup.string().email("Invalid Email").required("This is Required to be filled"),
    "password":Yup.string().min(6,"Password Must at least have 6 char").max(15,"Password at most have 15 character").required("Please Enter the Psssword").matches(/[0-9]/,props("Numeric"))
    .matches(/[a-z]/,props("Lowercase Letter")).matches(/[A-Z]/,props("Uppercase Letter")).matches(/[@,$,!,%,*,?,&,-,_,+,=,^,:,;,",']/,props("Special Symbol"))

});



/*
     const checkValidFormat= (str) =>{
        return `Password must have at least 1 ${str} characters`;
     }   

    Yup.object({
"username": Yup.string().email().required("Enter the Username First"),
"password":Yup.string().min(6,"Password Must at least have 6 char").max(15,"Password at most have 15 character").required("Please Enter the Psssword")


});
}
*/