'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Head from "./components/Head";
import Body from "./components/Body"
import React from "react";


export default function Home() {
const [name, setName] = React.useState("Sam Smith")

  return (
    <div>
      <Head userName={name}/>
      <Body userName={name}/>
    </div>
  );
}
