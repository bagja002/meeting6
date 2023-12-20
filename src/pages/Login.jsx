import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../component/navbar";

function Login(props) {
  return (
    <Wrapper>
      <Navbar />
      <Form>
        <Title>SILAHKAN MASUK</Title>
        <Input placeholder="Masukan username" />
        <Input placeholder="Masukan Password" />
        <ButtonContainer>
          <NavLink to={"/register"} >Register </NavLink>
          <SubmitButton>
            MASUK
          </SubmitButton>
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

const SubmitButton = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  position: relative;
  white-space: nowrap;
  fill: #6fbfc4;
  stroke-width: 1px;
  stroke: #000;
  overflow: hidden;
  align-self: stretch;
  aspect-ratio: 2.3823529411764706;
  justify-content: center;
  padding: 12px 16px;
  font: 100 15px Inter, sans-serif;
  background-color: #6fbfc4; /* Tambahkan warna latar belakang sesuai kebutuhan */
  cursor: pointer; /* Tambahkan cursor pointer untuk tombol */
  @media (max-width: 991px) {
    white-space: initial;
  }
`;



export default Login;
