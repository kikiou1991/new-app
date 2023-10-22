import { Divider, Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'


const navElements = [
    {
        key: '1',
        title: 'Home',
        path: '#home'
    },
    {
        key: '2',
        title: 'Messages',
        path: '#messages'
    },
    {
        key: '3',
        title: 'Settings',
        path: '#settings'
    },
    {
        key: '4',
        title: 'Members',
        path: '#members'
    },
]

const projects = [
    {
        id: '1',
        title: 'Memory-game',
        path: 'memory-game'
    },
    {
        id: '2',
        title: 'Other',
        path: 'other'
    }
]

const Navigation = () => {
  return (
    <>
    <Navbar className='h-screen px-4 pt-8 pb-4 bg-light flex flex-col justify-between  bg-slate-500 w-1/6'>
        <NavbarContent className='flex flex-col text-slate '>
            {navElements.map((link,index) => (
                <NavbarItem  key={index}>
                   <Link href={link.path}>
                   {link.title}
                   </Link>
                </NavbarItem>
            ))}
            
                <Divider className='my-4 '/>
            

        </NavbarContent>
        <NavbarContent className='flex flex-col text-slate'>
                {projects.map((link,index) => (
                    <NavbarItem key={index}>
                        <Link href={link.path}>
                            {link.title}
                        </Link>
                    </NavbarItem>
                ))}
        </NavbarContent>
    </Navbar>
    </>
  )
}

export default Navigation