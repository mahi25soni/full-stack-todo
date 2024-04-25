import React, { useEffect, useState } from 'react'

export default function GetToDo() {
    
    const [todo , setTodo] = useState([])
    console.log("insdie the get to do function")

    useEffect(() => {

        console.log("insdie the use effect")

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
    
    console.log("above return")
    return (
        <> 

        {todo.map(function (value) {
            return <ListingTask key = {value._id} task={value} setTodo={setTodo}></ListingTask>
        })}

        </>
    )
}

function ListingTask({task, setTodo}) {

    async function markShitDone (task_id) {
        const response = await fetch(`http://localhost:3000/api/task/done/${task_id}`,{
            method : 'PUT'
        })
        const final = await response.json();
        setTodo(final.data)
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
