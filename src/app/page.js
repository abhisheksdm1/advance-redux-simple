'use client'
import Nav from '@/components/Nav'
import Section from '@/components/Section1'
import Image from 'next/image'
import { useSelector } from "react-redux"

export default function Home() {
  const count = useSelector((state) => state.ui.cartIsVisible); 
    return (
    <main className="flex min-h-screen flex-col items-center">
        <Nav/>
         {count && <Section style={{height:'100%'}}/>}
        </main>
  )
}
