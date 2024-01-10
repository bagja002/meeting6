import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Home() {
    //mencoba state dan useeffect
    //Instalasi State
    const [nama, setNama] = useState("")
    const [alamat, setAlamat] = useState("")
    //get 

    useEffect(()=>{
        const getData = async ()=>{
            await axios.get("https://58583bc60e284c0e889fb1575ff5639d.api.mockbin.io/")
            .then((respons)=>{
                console.log("Data brhasil di buat")
                console.log(respons.data)
                setNama(respons.data.nama)
                setAlamat(respons.data.alamat)
            })
            .catch((error)=>{
                console.error(error)
                console.log("Gagal get data")
            })

        }
        getData()
    },[nama])
    

  return (
    <div>
        <div>Nama dari pemilik akun ini yaitu: {nama}</div>
        <div>Alamat dari pemilik akun yaitu :{alamat}</div>
    

    </div>
  )
}

export default Home
