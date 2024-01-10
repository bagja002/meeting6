import styled from "styled-components";
import Navbar from "../component/navbar";
import {useState } from "react";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Register(props) {

  const Navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    nama: '',
    no_telpon: '',
    password: '',
    alamat: ''
  });


  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Pengiriman data");
      console.log(data);

      await axios.post("http://127.0.0.1:4000/createData", data);
      console.log("Data Berhasil dikirim");
      // Munculkan modal sukses atau tampilkan pesan sukses

      
    } catch (error) {
      console.error(error);
      // Munculkan modal error atau tampilkan pesan error dari backend
    }
  };

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const closeModal = () => {
    Navigate('/login')
    
  };

  return (
    <Wrapper>
      <Navbar />
      <Form onSubmit={handlerSubmit}>
        <Input id="username" type="text" placeholder="Masukan Email" value={data.email} onChange={handlerChange} name="email" />
        <Input id="nama" type="text" placeholder="Masukan Nama" value={data.nama} onChange={handlerChange} name="nama" />
        <Input id="no_telpon" type="text" placeholder="Masukan No Telpon" value={data.no_telpon} onChange={handlerChange} name="no_telpon" />
        <Input id="password" type="password" placeholder="Masukan Password" value={data.password} onChange={handlerChange} name="password" />
        <Input id="konfirmasi_pass" type="text" placeholder="Masukan Alamat" value={data.alamat} onChange={handlerChange} name="alamat" />
        <Button type="submit">Buat</Button>
      </Form>
      
    
    </Wrapper>
  );
}


// Tambahkan gaya CSS untuk modal di sini


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
