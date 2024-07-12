import ReactDOM from 'react-dom';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from '../components/header/container';
import Corpo from '../components/main/corpo';

const inter = Inter({ subsets: ["latin"] });

export default function Home(){
  return (
    <>
      <Container />
      <Corpo />
    </>
  );
}