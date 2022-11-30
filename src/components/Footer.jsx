import React from 'react'
import Logo from '../assets/header/logo.png'
import {FaFacebook , FaGoogle} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <footer className='w-full h-fit flex flex-col mt-10 bg-slate-900 text-white'>
        <div className='flex sm:items-center flex-col sm:flex-row  sm:justify-between w-full my-5'>
            <section className='ml-10 mt-10 sm:mt-5 lg:mt-0 relative '>
                <h1 className='text-2xl tracking-widest'>EVENT C</h1>
                <p className='mb-2'>Deside your own celebration !</p>
                <p className='text-slate-300'>120/25, A,</p>
                <p className='text-slate-300'>Samagi Mawatha,</p>
                <p className='text-slate-300'>Magammana,</p>
                <p className='text-slate-300'>Homagama.</p>
            </section>
            <div className='flex flex-col ml-10 sm:ml-0 mt-10  lg:my-0 lg:flex-row lg:items-center lg:space-x-10 2xl:justify-around 2xl:w-full '>
              <section className='flex flex-col'>
                  <p>Contact Us.</p>
                  <ul className='ml-5 list-disc text-slate-300'>
                    <li><p>Phone : +94117969870</p></li>
                    <li><p>Email : EventC@gmail.com</p></li>
                  </ul>
              </section>
              <div className='flex mt-10 sm:mt-5 lg:mt-0 items-center space-y-3 text-slate-300  justify-between'>
                <section className='flex flex-col space-y-3'>
                  <span className='flex'><FaFacebook className="text-2xl "/><p className='mx-2'>Facebook</p></span>
                  <span className='flex'><FaGoogle className="text-2xl "/><p className='mx-2'>Email</p></span>
                  <span className='flex'><AiFillInstagram className="text-2xl "/><p className='mx-2'>Instergram</p></span>
                </section>
                <section className=''>
                  <img src={Logo} className='h-[180px] object-contain sm:hidden'/>
                </section>
              </div>
            </div>
            <img src={Logo} className='h-[200px] hidden sm:block relative w-[200px] left-[calc(50%-100px)] sm:left-0'/>
        </div>
        <div className='w-full flex justify-center items-center text-slate-300 bg-gray-700'>
          <p className='tracking-widest my-1'>&copy; Copyright 2022 EventC.lk</p>
        </div>
    </footer>
  )
}

export default Footer