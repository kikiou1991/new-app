import { Navbar, Divider, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button, NavbarMenuToggle, NavbarMenu} from '@nextui-org/react'
import React from 'react'
import { ProjectIcon } from './svgs/projectIcon'
import { Calendar } from './svgs/calendar'
import { NotiBell } from './svgs/notification'

import { navElements, projects } from './navbar'
import NavigationMobile from './navbar-mobile'

const NavbarTop = () => {
  return (
    <div>
          
        <Navbar isBordered className='w-full border-slate-300 bg-white' classNames={{base: "w-screen", wrapper: "w-screen max-w-none"}}>
            <NavbarContent className="sm:hidden flex flex-grow-0" justify="start">
              <NavbarMenuToggle aria-label={"Open menu"} />
                <NavbarMenu >
                  <NavigationMobile/> 
                          
                </NavbarMenu>
            </NavbarContent>
                  <NavbarContent className="items-start w-1/6 " justify="start" >

                    <NavbarBrand className='mt-2 mb-2 py-2 px-2 flex-grow-0  text-black'>
                      <ProjectIcon/>
                      <p>Current Project</p>
                    </NavbarBrand>
                    <Input
                      className="w-2/6 bg-slate-200 h-10 py-1 px-3 mt-2 mb-2 ml-2 rounded-full text-lg focus:outline-none"
                      placeholder="Type to search..."
                      size="sm"
                      startContent={''}
                      type="search"
                      
                      
                    />
                  </NavbarContent>
                  <NavbarContent className='w-2/6 flex flex-row flex-grow-0 gap-4 'justify='end'>
                    <Button className='bg-white' size='sm' isIconOnly>
                      <Calendar/>
                    </Button>
                    <Button className='bg-white' size='sm' isIconOnly>
                      <NotiBell/>
                    </Button>

                    <NavbarBrand className='flex flex-grow-0 flex-col w-2/6'>
                      <p>Gabor Adorjani</p>
                      <p>Bristol,UK</p>


                    </NavbarBrand>
                    <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                  </NavbarContent>
            
           
        </Navbar>
    
    </div>
    
    
  );
}

export default NavbarTop