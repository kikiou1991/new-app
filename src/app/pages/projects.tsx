import { Button, ButtonGroup, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import Link from 'next/link'

import { Avatar, AvatarGroup } from "@nextui-org/react";
import { EditBtn } from '../components/svgs/edit';
import { LinkBtn } from './linkbtn';
import React, { useState } from 'react';
import { FilterDrop } from '../components/svgs/filter-drop';
import { DownArrow } from '../components/svgs/downarrow';
import { Calander2 } from '../components/svgs/calander2';
import { SocialIcon } from '../components/svgs/socialshare';
import Cards from '../components/cards';
import { Add } from '../components/svgs/add';
import { useSearchParams } from 'next/navigation';

interface Props  {
    name: string;
}


const Other: React.FC<Props> = ({name}) => {
    
//     const [selectedOption, setSelectedOption] = useState('merge');

//   const descriptionsMap = {
//     merge:
//       "All commits from the source branch are added to the destination branch via a merge commit.",
//     squash:
//       "All commits from the source branch are added to the destination branch as a single commit.",
//     rebase: "All commits from the source branch are added to the destination branch individually.",
//   };

//   const labelsMap = {
//     merge: "Create a merge commit",
//     squash: "Squash and merge",
//     rebase: "Rebase and merge",
//   }

//   // Convert the Set to an Array and get the first value.
//   const selectedOptionValue = Array.from(selectedOption)[0];

//   const handleSelectionChange = (key: string) => {
//     setSelectedOption(key);
    

    return (
        <div className='h-full mt-10'>

            <div className='w-full flex flex-row items-center gap-1 ml-8 mt-2'>
                       
                        <h1 className='text-4xl flex flex-row items-center'>{name}</h1>
                        <Button size='sm' isIconOnly variant='faded' color='primary'>
                            <EditBtn />
                        </Button>
                        <Button size='sm' isIconOnly variant='faded' color='primary'>
                            <LinkBtn />
                        </Button>


              
                <div className='flex flex-grow-0 flex-row items-center gap-3 w-1/6 ml-auto mr-20' >
                    <Add/>
                    <Link className='text-blue-600' color='primary' href={'./invite'}>Invite</Link>
                    <AvatarGroup isBordered>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='flex flex-grow-0 flex-row gap-4 items-center ml-8 mt-6 mb-3'>
                    <Button color="primary" variant="ghost" className='px-1'>
                        
                        <FilterDrop/>
                      
                        {'Filter'}
                        <Button className='bg-slate-200' size='sm' isIconOnly>
                            <DownArrow/>
                        </Button>
                    </Button>
                    <Button color="primary" variant="ghost" className='px-1'>
                        
                            <Calander2/>
                     
                        {'Today'}
                        <Button className='bg-slate-200' size='sm' isIconOnly>
                            <DownArrow/>
                        </Button>

                    </Button>
                    {/* <ButtonGroup variant="flat">
                        <Button>{labelsMap[selectedOptionValue]}</Button>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                            <Button isIconOnly>
                                <DownArrow/>
                            </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                            disallowEmptySelection
                            aria-label="Merge options"
                            selectedKeys={selectedOption}
                            selectionMode="single"
                            onSelectionChange={setSelectedOption}
                            className="max-w-[300px]"
                            >
                            <DropdownItem key="merge" description={descriptionsMap["merge"]}>
                                {labelsMap["merge"]}
                            </DropdownItem>
                            <DropdownItem key="squash" description={descriptionsMap["squash"]}>
                                {labelsMap["squash"]}
                            </DropdownItem>
                            <DropdownItem key="rebase" description={descriptionsMap["rebase"]}>
                                {labelsMap["rebase"]}
                            </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonGroup> */}
                </div>
                <div className='ml-auto mr-8'>
                    <Button color='primary' variant='ghost' className='px-1'>
                        
                            <SocialIcon/>
                       
                        {'Share'}
                    </Button>
                    <Divider orientation="vertical"/>
                </div>

            </div>
            <Divider className="my-6 bg-slate-600" />
            <div className='h-full w-full ml-3'>
                <Cards project='otherProject' />

            </div>
           
        </div>
    )
}

export default Other