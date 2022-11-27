import React from 'react'
import Logo from '../assets/header/logos.jpg'
import Footer from './Footer'
import Items from './Items'

function HomeBody() {
  return (
    <div className='w-full relative h-[100vh]'>
        <h1 className='mt-[100px] sm:ml-10 ml-5 capitalize text-3xl underline font-extrabold'>Who are We ?</h1>
        <div className='w-[80%] h-fit flex flex-col sm:flex-row items-center space-x-2 justify-center mt-10 bg-slate-50 rounded-sm mx-auto shadow-2xl'>
            <img className='h-[250px] mt-5 sm:mt-0' src={Logo}/>
            <p>Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <h1 className='mt-[100px] sm:ml-10 ml-5 capitalize text-3xl underline'>What's we have? Let's find out !</h1>
        <div className='w-full flex flex-col justify-center h-fit bg-slate-50 border-b-slate-100 rounded-sm border-b shadow-xl mt-20'>
            <h2 className='py-5 ml-5 text-xl'>Our Services ,</h2>
            <div className='sm:flex-row flex flex-col sm:items-start sm:justify-between '>
              <ul className='ml-10 list-[square]'>
                <li>Providing sound items and renting ,</li>
                  <ul className='ml-10 list-disc'>
                    <li>DJ / Beach Parties.</li>
                    <li>Birthdays.</li>
                    <li>Weddings.</li>
                    <li>Big girl parties. & etc..</li>
                  </ul>
              </ul>
              <ul className='mx-10 mt-10 sm:mt-0 list-[square]'>
                <li>Photography & Videography ,</li>
                  <ul className='ml-10 list-disc'>
                    <li>Birthdays , Weddings and other parties.</li>
                    <li>Arial Videography.</li>
                  </ul>
              </ul>
            </div>
            <section className='flex justify-center'>
              <ul className='ml-10 my-10 list-[square]'>
                <li>Other Services ,</li>
                  <ul className='ml-10 mx-5 sm:mx-0 list-disc'>
                    <li>Decorations.</li>
                    <li>Groom Dressing.</li>
                    <li>Bright Dressing.</li>
                    <li>Wedding Cakes & Birthday cakes.</li>
                    <li>Wedding Drum , Ashtaka , JayaMangala Gatha. </li>
                    <li>Party Items Renting.</li>
                  </ul>
              </ul>
            </section>
        </div>
        <Footer/>
    </div>
  )
}

export default HomeBody