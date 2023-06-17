import React,{useState} from 'react';
// import { useState } from 'react';

const UseState = () => {
    // console.log(useState('Eggys'));
    const [traineeDetails,setTraineeDetails] = useState({
        name:'David',
        POR : 'Benin',
        SOR : 'Lagos',
        age:50
    })
    const[name,setName]=useState('Emma')
    const [age,setAge] = useState(100)
    function handleName(){
        if(name === 'Emma'){
            setName('Dami')

        }else{
            setName('Emma')
        }
    }
    let handleAge = ()=>{
        age === 100 ? setAge(200):setAge(100)
    }

    let handleTraineeDetails = function(){
        setTraineeDetails({...traineeDetails,name:'Dami',POR:'Ekiti',SOR:'Nassarawa',age:120})
    }


  return (
    <div>
        <h2>useState basic</h2>
        <h2> {name} </h2>
        <button className="btn btn-primary text-white" onClick={handleName}>click to change name</button>
        <h4> {age} </h4>
        <button className='btn btn-danger text-white' onClick={handleAge}>click to change age</button>
        <h2>My name is {traineeDetails.name} ,I hail from {traineeDetails.POR} , I currently reside in {traineeDetails.SOR} and I am {traineeDetails.age}  years old</h2>
        <button className="btn btn-primary text-white" onClick={handleTraineeDetails}>
            click to change trainee details
        </button>

    </div>
  )
}

export default UseState