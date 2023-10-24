import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri';
import {BiSearch} from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/Cg';
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                 </div>
                 <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                 </div>
                 <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt />
                 </div>
            </div>
        </div>
        <Contacts src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=800" name="Renil Soni" status="Online" />
        <Contacts src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800" name="Aanal Panchal" status="Online" />
        <Contacts src="https://images.pexels.com/photos/1651888/pexels-photo-1651888.jpeg?auto=compress&cs=tinysrgb&w=800" name="Naitik Panchal" status="Offline" />
        <Contacts src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800" name="Rutwa Dave" status="Online" />
        <Contacts src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=800" name="Krushal Dobariya" status="Online"/>
    </div>
  )
}

export default RightSidebar