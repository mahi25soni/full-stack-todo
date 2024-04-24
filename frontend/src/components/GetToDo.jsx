import React, { useEffect, useState } from 'react'

export default function GetToDo() {
    
    const [todo , setTodo] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/task/")
        .then((response) => {
            response.json()
            .then((final) => {
                setTodo(final.data)
            })
        })
        .catch(err => {
            console.log("The error is " , err)
        })
    })

    return (
        <> 
        {todo.map(value => {

        })}

        </>
    )
}

function ListingTask(props) {
    
    return (
    <div>
        <p>{value.title}</p>
        <p>{value.description}</p>
        <label htmlFor="markdone">Mark</label>
        <input type="radio" name="markdone" id="" onChange={} />    
    </div>
    )

}
