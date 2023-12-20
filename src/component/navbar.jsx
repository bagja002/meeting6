import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from "styled-components"


const Navbars = styled.div`
  height:200px;
  width:100%;
  position:relative;
  background:yellow;
`


function Navbar(props) {
  return (
    <>
    <Navbars style={{padding:"30px"}}>
      <NavLink style={{padding:"20px"}}  to={"/register"}>Register</NavLink>
      <NavLink  to={"/login"}>Login</NavLink>
    </Navbars>
    </>
  )
}

export default Navbar