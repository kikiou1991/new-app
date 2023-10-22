import { Divider, Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react';
import { MessagesLogo } from './svgs/messages';
import { HomeLogo } from './svgs/home';
import { SettingsLogo } from './svgs/settings';
import { MembersLogo } from './svgs/members';




const navElements = [
    {
        key: '1',
        title: 'Home',
        path: '#home',
        icon: <HomeLogo/>
    },
    {
        key: '2',
        title: 'Messages',
        path: '#messages',
        icon: <MessagesLogo/>
    },
    {
        key: '3',
        title: 'Settings',
        path: '#settings',
        icon: <SettingsLogo/>
    },
    {
        key: '4',
        title: 'Members',
        path: '#members',
        icon: <MembersLogo/>
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
    <div className='h-screen px-4 pt-8 pb-4 bg-light flex flex-col   bg-slate-200'>
        <div className='flex flex-col text-slate gap-1  '>
            {navElements.map((link,index) => (
                <ul  key={index}>
                   <Link className='flex flex-row gap-2' href={link.path}>
                   {link.icon}{link.title}
                   </Link>
                </ul>
            ))}
            
                <Divider className='my-4 '/>
            

        </div>
        
        {"Projects"}
        <ul className='flex flex-col bg-slate-200 gap-1 mt-4'>
                {projects.map((link,index) => (
                    <li key={index}>
                        <Link href={link.path}>
                            {link.title}
                        </Link>
                    </li>
                ))}
        </ul>
    </div>
    </>
  )
}

export default Navigation