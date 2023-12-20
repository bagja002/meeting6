import React, { useState } from 'react'

function Button() {
    const [Angka, setAngka] = useState(0)


    //Ini untuk menulis kode javascrip 
    //Event Handler 
     const hanldesubmit = ()=>{
        console.log("Tombol ini telah di klik ")
        setAngka(Angka+1)
     }


  return (
    <div>
        <div>Tombol ini telah di klik sebanyak : {Angka}</div>
      <button onClick={hanldesubmit} >klik aku </button>

    </div>
  )
}

export default Button
