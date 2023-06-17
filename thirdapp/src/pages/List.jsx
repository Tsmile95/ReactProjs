import React,{useState} from 'react';
import { listItems } from '../db'

const List = () => {
    const [customers] = useState(listItems)

  return (
    <div>
        <h2>List component</h2>
        <div>
            {customers.map((customer)=>{
                const {id,name,age,profession}= customer
                return(
                    <div key={id}>
                        <h2> {name} </h2>
                        <h3> {age} </h3>
                        <h4>{profession} </h4>

                    </div>
                )
            })}
        </div>

     


    </div>
  )
}

export default List