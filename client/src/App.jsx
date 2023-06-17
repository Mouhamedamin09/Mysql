import  React from 'react'
import Axios from 'axios';

import './App.css'


function App() {

  const [name,setName] =React.useState('')
  const [age,setAge] =React.useState(0)
  const [country,setCountry] =React.useState('')
  const [position,setPosition] =React.useState('')
  const [wage,setWage] =React.useState(0)
 
  function AddEmployee() {
    console.log(name+age)
      Axios.post('http://localhost:3001/create',{
        name:name,
        age:age,
        country:country,
        position:position,
        wage:wage
      
      
      }).then(() =>{
        console.log("success")
      }).catch((error) =>{
        console.log(error)
      })
  }




  return (
    <div className='App'>
      <div className='information'>
        <label>Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}} />
        <label>Age:</label>
        <input type="number" onChange={(event) => {setAge(event.target.value)}} />
        <label>Country:</label>
        <input type="text" onChange={(event) => {setCountry(event.target.value)}} />
        <label>position:</label>
        <input type="text" onChange={(event) => {setPosition(event.target.value)}} />
        <label>Wage(year) :</label>
        <input type="text" onChange={(event) => {setWage(event.target.value)}} />
        <button onClick={AddEmployee}>add Employee</button>
      </div>
    </div>
  )
}

export default App
