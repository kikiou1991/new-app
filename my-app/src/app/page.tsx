import Image from 'next/image'

import Home from './home/page'
import NavbarTop from './components/navbar-top'
import Navigation from './components/navbar'




export default function Page() {
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
                <Home/>
                
            </div>


        </div>
    
    </div>
</>
  )
}
