// import React from 'react'

const Dynamic = () => {
    let gender = 'male';
    let randomNubers = Math.random()
    let fbLink = 'facebook'
    let name = 'dami'
    let absentTrainees = ['dami','collins']
  return (
    <div>
        <h2>Dynamic componenet</h2>
        <h4> {gender}  </h4>
        <h2> {randomNubers} </h2>
        <img src={name} alt="" />
        <a  href={fbLink}>facebook</a>
        <h2> {absentTrainees[0]} </h2>
    </div>
  )
}

export default Dynamic