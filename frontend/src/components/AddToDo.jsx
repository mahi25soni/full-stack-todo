import React, { useState , useEffect} from 'react'
import Alert from './Alert'

export default function AddToDo() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const sendTaskData = async (e) => {
        if (title && desc) {

            const response = await fetch("http://localhost:3000/api/task/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: desc
                })
            });

            const final = await response.json();
            console.log(final)
        }

    };


    const handleEvent = (e) => {
        if(e.target.name === "task_title"){
            setTitle(e.target.value)
        }
        else if(e.target.name === "task_desc"){
            setDesc(e.target.value)
        }
    }


  return (
    <>
        <form onSubmit={sendTaskData}>
            <input type="text" name="task_title" id="" onChange={handleEvent} placeholder='Your task title'/> <br /> <br />
            <input type="text" name="task_desc" id=""  onChange={handleEvent} placeholder='Your task desc'/> <br /> <br />
            <button type='submit'>Add task</button>
        </form>


        <hr />
    </>
  )
}
