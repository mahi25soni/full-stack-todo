import React from 'react'

export default function GetToDo() {
    console.log("get to do")

  return (
    <> 
        <p>task details</p>
        <p>description</p>
        <label htmlFor="markdone">Mark</label>
        <input type="radio" name="markdone" id="" />
    </>
  )
}
