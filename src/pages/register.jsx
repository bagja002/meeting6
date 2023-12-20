
import styled from "styled-components";
import Navbar from "../component/navbar";
import { useEffect } from "react";


function Register(props) {




  return (
    <Wrapper>
      <Navbar />
      <Form>
        <Input type="text" placeholder="Masukan username" />
        <Input type="text"  placeholder="Masukan Nama" />
        <Input type="text" placeholder="Masukan No Telpon" />
        <Input type="password"  placeholder="Masukan Password" />
        <Input type="password" placeholder="Masukan Konfirmasi Password" />
        <Button>Buat</Button>
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

const Form = styled.form`
  border-radius: 30px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  width: 668px;
  max-width: 100%;
  flex-direction: column;
  margin: 147px 0 107px;
  padding: 48px 80px;
  @media (max-width: 991px) {
    margin: 40px 0;
    padding: 0 20px;
  }
`;

const Input = styled.input`
  color: #000;
  white-space: nowrap;
  font: 700 20px Inter, sans-serif;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 9px 30px;
  margin: 13px 13px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
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

export default Register;
