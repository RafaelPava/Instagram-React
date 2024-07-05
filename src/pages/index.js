import ReactDOM from 'react-dom';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from './api/header/container';
import Corpo from './api/main/corpo';

const inter = Inter({ subsets: ["latin"] });

function Pagina(){
  return (
    <>
      <Container />
      <Corpo />
    </>
  );
}

ReactDOM.render(<Pagina />, document.querySelector('.root'));