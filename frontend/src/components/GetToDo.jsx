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

    }, [])
    
    return (
        <> 
        {todo.map((value) => {
            return <ListingTask key = {value._id} task = {value}></ListingTask>
        })}
        </>
    )
}

function ListingTask({task}) {

    function markShitDone (task_id) {

    }
    return (
    <div>
        <p>{task.title}</p>
        <p>{task.description}</p>
        <label htmlFor="markdone">Mark</label>
        <input type="radio" name="markdone" id="" onChange={() => markShitDone(task._id)} />  
        <hr />  
    </div>
    )

}
