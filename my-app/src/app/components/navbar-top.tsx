import { Navbar, Divider, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from '@nextui-org/react'
import React from 'react'
import { ProjectIcon } from './svgs/projectIcon'

const NavbarTop = () => {
  return (
    <div>
        <Navbar isBordered className='w-full border-slate-300 bg-white'>
            <NavbarContent justify='start' className='w-full'>
              <NavbarBrand className='border-black w-1/6 px-3 flex flex-row gap-2'>
                <ProjectIcon/>
                <p>Current Project</p>
              </NavbarBrand>
              <Input
                className="bg-white h-10 py-1.5 px-3 pr-5 mt-2 mb-2 w-5/6 rounded-full text-lg focus:outline-none"
                placeholder="Type to search..."
                size="sm"
                startContent={''}
                type="search"
              />
            </NavbarContent>
            
           
        </Navbar>
    
    </div>
    
    
  );
}

export default NavbarTop