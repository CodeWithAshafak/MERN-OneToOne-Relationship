import React, { useState } from 'react'


import axios from "axios"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {
  const [input , setInput] = useState({})
  const inputHandle = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(Values=>({...Values , [name]:value}))
    console.log(input);
  }
  const handleSubmit = async ()=>{
     const api = "http://localhost:8080/user/save"
     try {

      const res =  await axios.post(api,input)
      console.log(res.data);
      alert("data saved in DB")
      
      
     } catch (error) {
      console.log(error);
  
     }
  }
  return (
    <>
    
    <h1>student info</h1>





      <Form  style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>user name</Form.Label>
        <Form.Control type="email" name='uname' value={input.uname} onChange={inputHandle} />

        <Form.Label>user email</Form.Label>
        <Form.Control type="email" name='uemail' value={input.uemail} onChange={inputHandle} />


        <Form.Label>first name</Form.Label>
        <Form.Control type="email" name='fname' value={input.fname} onChange={inputHandle} />

        <Form.Label> Last name</Form.Label>
        <Form.Control type="email" name='lname' value={input.lname} onChange={inputHandle} />

        
      </Form.Group>

     
      
      <Button variant="primary" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
    
    </>
  )
}

export default Insert