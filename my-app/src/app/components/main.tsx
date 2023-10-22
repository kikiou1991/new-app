import { Navbar } from '@nextui-org/react'
import React from 'react'
import Navigation from './navbar'
import Searchbar from './searchbar'
import NavbarTop from './navbar-top'
import UserInterface from './main-interface'

export const Main = () => {
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
                <UserInterface/>
            </div>


        </div>
    
    </div>
</>
  )
}

