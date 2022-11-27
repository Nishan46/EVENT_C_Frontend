import React from 'react'
import Logo from '../assets/header/logo.png'

function Footer() {
  return (
    <footer className='w-full h-fit flex mt-10 bg-slate-900 text-white'>
        <div className='flex items-center justify-between w-full'>
            <section className='ml-10 relative'>
                <h1 className='text-2xl tracking-widest'>EVENT C</h1>
                <p className='mb-2'>Deside your own celebration !</p>
                <p className='text-slate-300'>120/25, A,</p>
                <p className='text-slate-300'>Samagi Mawatha,</p>
                <p className='text-slate-300'>Magammana,</p>
                <p className='text-slate-300'>Homagama.</p>
            </section>
            <section className='flex'>
                <p>Contact Us.</p>
            </section>
            <img src={Logo} className='h-[200px]'/>
        </div>
    </footer>
  )
}

export default Footer