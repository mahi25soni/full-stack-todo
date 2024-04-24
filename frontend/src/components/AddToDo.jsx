import React, { useState } from 'react'

export default function AddToDo() {
    console.log("add to do")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    async function getTaskData(e) {
        e.preventDefault()
        setTitle(e.target.task_title.value)
        setDesc(e.target.task_desc.value)

        const response = await fetch("http://localhost:3000/api/task/create/", {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                title : title,
                description : desc
            })
        })
        const final = await response.json();
        console.log("The shit is ", final)

    }

  return (
    <>
        <form onSubmit={getTaskData}>
            <input type="text" name="task_title" id="" placeholder='Your task title'/> <br /> <br />
            <input type="text" name="task_desc" id="" placeholder='Your task desc'/> <br /> <br />
            <button type='submit'>Add task</button>
        </form>


        <hr />
    </>
  )
}
