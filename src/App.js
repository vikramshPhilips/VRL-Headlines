import React from 'react'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import HomePage from './Components/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import TrialForm from './Components/TestValidations/TrialForm'
import News from './Components/News'
import ForgotPasswd from './Components/ForgotPassword'

const App = () => {
/* Mounted the LoginSigop component after creating it in src 
Steps are :
    1.  Go to SRC then create components folder 
    2. Create Assests Folder for the assets under components folder
    3. Create another folder in componets sames as loginsigup
    4. Under this LoginSignup folder create two files one .jsx and another is .css 
    5. In .jsx file use racf to create basic code
    6. import css using  import "pathToCss"
    */
  return (
    <div>
       <Router>
        <Routes>
              {/* <Route path="/" element={<HomePage/> }/> */}
              <Route path="/" element={<LoginSignup/> }/>
              <Route path="/log" element={<TrialForm/>}/>
              <Route path="/home" element={<HomePage/>}/> 
              <Route path="/news" element={<News/>}/>
              <Route path="/forgot" element={<ForgotPasswd/>}/>
              

        </Routes>
        </Router>
    
    
      
    </div>
  )
}

export default App
