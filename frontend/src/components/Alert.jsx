import React from 'react'

export default function Alert({message}) {
  console.log("alert wale mei aa toh gaya")
  return (
    <>
    <div>
        window.alert({message})
    </div>
    </>
  )
}
