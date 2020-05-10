import React, { useState, useEffect } from 'react';
import './App.css';

  function useForm(init){
    const [value,setValue] = useState(init)
    function handleChange(e){
        setValue(e.target.value)
    }
    useEffect(()=>{
        
    },[value])

    return {value,
          onChange:handleChange}
  }


function App() {

 async function  handleSubmit() {
    if(!(userEmail.value||userPassword2.value||userPassword.value)){
      alert('Joylar bosh iltimos toldiring')
    }
    else if(userPassword.value!==userPassword2.value){
      alert('Password malumotlari bir biriga oxshash emas')
    }else{
        let res = await fetch(
          'http://localhost:7000',
          {
            method:'POST',
            body:JSON.stringify({
              userEmail:userEmail.value,
              pasword:userPassword.value,
            })
          }
        )
        res = await res.json()
        if(res.status=='success'){
          alert(res.message)
        }else if(res.status=='fail'){
          alert(res.message)
        }
    }
  }

    const userEmail = useForm('')
    const userPassword = useForm('')
    const userPassword2 = useForm('')
    console.log(" effect");
  return (
   <Container>
     <h1>Registration Form</h1>
     <input type="email" 
     name="userEmail"
     value={userEmail.value}
     onChange={userEmail.onChange}
     placeholder="Enter your email"/>

     <input type="password" 
     name="userPassword"
     value={userPassword.value}
     onChange={userPassword.onChange}
     placeholder="enter password"/>

     <input type="password" 
     name="userPassword"
     value={userPassword2.value}
     onChange={userPassword2.onChange}
     placeholder="enter password agin"/>
      
     <button
     onClick={handleSubmit}
     > Sign up</button>
   </Container>
  );
}

const Container =(props)=>{
  return(
    
    <div className="App">
  <header className="App-header">

   {props.children}

  </header>
    </div>

  );
}

export default App;
