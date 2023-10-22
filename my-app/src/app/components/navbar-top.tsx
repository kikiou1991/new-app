import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from '@nextui-org/react'
import React from 'react'

const NavbarTop = () => {
  return (
    <div>
        <Navbar isBordered>
            <NavbarContent as="div" className="items-center" justify="end">
            <Input
          className="bg-white h-10 py-1.5 px-3 pr-5 mt-2 mb-2 w-full rounded-full text-lg focus:outline-none"
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