import { Navbar } from '@nextui-org/react'
import React from 'react'
import Navigation from './navbar'
import Searchbar from './searchbar'
import NavbarTop from './navbar-top'

export const Main = () => {
  return (

<div className='flex flex-row'>
    
    <Navigation/>
    
    <NavbarTop/>
</div>
  )
}

