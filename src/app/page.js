"use client"
/* COMPONENTS */
import Header from "@/component/Header";
import LandingText from "@/component/LandingText";
import Landing from "@/component/Landing";
import Socials from "@/component/Socials";
import Cards from "@/component/Cards";
import Inbox from "@/component/Inbox";
import AwardsWinner from "@/component/AwardsWinner";
import CrownHeading from "@/component/CrownHeading";
import HappyClientsSwiper from "@/component/HappyClientSwiper";
import Footer from "@/component/Footer";

import { useEffect, useState } from "react";
export default function Home() {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth<800)
    }
    handleResize()
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize);
  },[])
  return (
    <>
    <Header isMobile={isMobile}/>
    <LandingText isMobile={isMobile}/>
    <Landing isMobile={isMobile}/>
    <Socials/>
    <Cards isMobile={isMobile}/>
    <CrownHeading isMobile={isMobile} heading={"the most recent patterns, conveyed directly to your inbox"}/>
    <Inbox isMobile={isMobile}/>
    <AwardsWinner isMobile={isMobile}/>
    <CrownHeading isMobile={isMobile} heading={"happy clients"}/>
    <HappyClientsSwiper/>
    <Footer isMobile={isMobile}/>
    </>
  );
}
