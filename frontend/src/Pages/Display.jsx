import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'


const Display = () => {
  const [mydata , setMyData] = useState([])

  const loadData = async()=>{
      const api = "http://localhost:8080/user/display"

      try {
        const res = await axios.get(api);
        console.log(res.data);
        setMyData(res.data)
      } catch (error) {
        console.log(error); 
      }

  }
  useEffect(()=>{loadData()},[])

  const result = mydata.map((key)=>{
    return(
      <>
         <tr>
          <td>{key.fname}</td>
          <td>{key.lname}</td>
          <td>{key.userid.uname}</td>
          <td>{key.userid.uemail}</td>
         </tr>
      
      </>
    )
  })
  return (
    <>
     <center>
      <h1>Display data </h1>
      <table border="1">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {result} 
        </tbody>
        
        
      </table>
     </center>
    
    </>
  )
}

export default Display