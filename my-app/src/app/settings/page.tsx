import { Navbar } from '@nextui-org/react'
import React from 'react'
import NavbarTop from '../components/navbar-top'
import Navigation from '../components/navbar'
import Settings from '../pages/settings'




export default function Home() {
  return (
    <>
    <div className='flex flex-col w-full'>

        <div className='w-full'>
            <NavbarTop/>
        </div>
        <div className='w-full flex flex-row'>
            <div className='w-1/6'>
                <Navigation/>
            
            </div>
            <div className='w-5/6'>
                <Settings/>
                
            </div>


        </div>
    
    </div>
</>
  )
}
