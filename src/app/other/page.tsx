import { Navbar } from '@nextui-org/react'
import React from 'react'
import NavbarTop from '../components/navbar-top'
import Navigation from '../components/navbar'
import HomePage from '../pages/home'
import Other from '../pages/projects'

export default function Home() {
  return (
    <>
        <div className='flex flex-col w-full bg-slate-100'>

            <div className='w-full'>
                <NavbarTop/>
            </div>
            <div className='w-full flex flex-row'>
                <div className='w-1/6'>
                    <Navigation/>
                
                </div>
                <div className='w-full h-full'>
                    <Other name='Other'/>
                    
                </div>


            </div>
        
        </div>
    </>

  )
}
