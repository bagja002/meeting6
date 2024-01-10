import * as React from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Navbar from "../component/navbar";
import axios from 'axios'
function Login(props) {

  const [data, setData] = React.useState({
    username:'',
    password:'',
 
  })

  //handler untuk submit data

  const handlerSubmit=(e)=>{

    e.preventDefault()
    console.log("Pengiriman data")
    //logik axios untuk pengiriman daa
    console.log(data)

    axios.post("Backend URL", data)
    .then(()=>{
      console.log("Berhasil Login")
      
  
    })
    .catch((error)=>{
      console.eror(error)
    })
  }

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  };


  return (
    <Wrapper>
      <Navbar />
      <Form onSubmit={handlerSubmit}>
        <Title>SILAHKAN MASUK</Title>
        <Input id="username" name="username" type="text" onChange={handlerChange} value={data.username}  placeholder="Masukan username" />
        <Input id="password" name="password" type="password" onChange={handlerChange} value={data.password}  placeholder="Masukan Password" />
        <ButtonContainer>
          <NavLink to={"/register"} >Register </NavLink>
          <Button type="submit">
            MASUK
          </Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #cbe7e9;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Form = styled.div`
  border-radius: 30px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  width: 590px;
  max-width: 100%;
  flex-direction: column;
  margin: 197px 0 148px;
  padding: 47px 33px 47px 68px;
  @media (max-width: 991px) {
    margin: 40px 0;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  color: #000;
  align-self: center;
  white-space: nowrap;
  font: 700 20px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Input = styled.input`
  color: #000;
  white-space: nowrap;
  font: 700 15px Inter, sans-serif;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 12px 20px;
  margin: 15px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

const RegisterLink = styled.div`
  color: #0038ff;
  text-decoration-line: underline;
  white-space: nowrap;
  font: 400 15px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Button = styled.button`
  color: #000;
  white-space: nowrap;
  font: 700 15px Inter, sans-serif;
  background-color: #78d9df;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 12px 26px;
  margin: 21px 13px 22px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;



export default Login;
