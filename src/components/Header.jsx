import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import {BsChevronDoubleLeft} from 'react-icons/bs'
import {BsChevronDoubleRight} from 'react-icons/bs'
import headerData from '../headerData'
import Logo from '../assets/header/logo.png'
import {RiFacebookCircleFill} from 'react-icons/ri'


function Header() {
    const [xs, setXs] = useState(0);
    const [isAuto, setIsAuto] = useState(true);
    async function doThis(){
        await sleep(10)
        HandleSlide('right')
    }
    useEffect(() => {
        if(isAuto){doThis()}
    }, [xs]);

    async function sleep(seconds){
        return new Promise((resolve)=> setTimeout(resolve,seconds*1000))
    }
    
    const HandleSlide = (direction) =>{
        if (direction === 'left')
        {
            setIsAuto(false)
            if(headerData.length > xs && xs > 0)
            {
                setXs(xs - 1)
            }
            if (xs ===  0)
            {
                setXs(headerData.length - 1)
            }
        }
        else
        {
            if(headerData.length > xs)
            {
                setXs(xs + 1)
            }
            if (xs ===  headerData.length - 1)
            {
                setXs(0)
            }
        }
    }

    return (
        <header className='flex relative w-full h-[100vh] overflow-hidden bg-slate-200'>
            
            <section className='absolute z-10 top-0 left-0 right-0 bottom-0 bg-black/60'/>
            {headerData.map(({img,title,desc})=>(
                <div className='relative' key={img}>
                    <div className='w-[100vw]'>
                        <img src={img} style={{ 'transform':`translateX(${xs*-100}vw)` }} className={`ease duration-1000 w-[100vw] h-[100vh] bg-center object-cover`}/>
                    </div>

                    <span className='absolute w-24 h-[100vh] top-0 left-0 z-20 text-slate-50 flex justify-center items-center text-3xl'><BsChevronDoubleLeft onClick={() => {HandleSlide('left')}} className='hover:scale-110 hidden sm:block cursor-pointer transition duration-300'/></span>
                    <span className='absolute w-24 h-[100vh] top-0 right-0 z-20 text-slate-50 flex justify-center items-center text-3xl'><BsChevronDoubleRight onClick={() => {HandleSlide('right')}} className='hover:scale-110 cursor-pointer hidden sm:block transition duration-300'/></span>


                    <div style={{ 'transform':`translateX(${xs*-100}vw)` }} className={`ease duration-1000
                    
                    absolute flex items-center justify-center flex-col-reverse top-0 bottom-0 z-10 left-0 right-0 sm:right-auto sm:left-28`}>

                        <h1 className='xl:text-6xl md:text-3xl 2xl:text-7xl text-white'>EVENT C</h1>
                        <img src={Logo} className='xl:w-[400px] w-[250px] sm:w-[300px] 2xl:w-[500px]'/>
                    </div>

                    <div style={{ 'transform':`translateX(${xs*-100}vw)` }} className={`ease duration-1000 mb-10
                    absolute sm:top-0 sm:right-28 w-full sm:w-fit z-30 bottom-0 flex flex-col sm:items-start items-center space-y-5 justify-center`}>
                        <h1 className='text-white underline xl:text-2xl 2xl:text-6xl underline-offset-4 md:text-2xl'>{title}</h1>
                        <p className='text-white text-sm md:text-2xl 2xl:text-4xl'>{desc}</p>
                    </div>


                    <div className='absolute text-white uppercase top-0 flex items-center h-[100px] w-[100vw] z-30'>
                        <h1 className=' flex-[0.7] text-sm sm:text-xl  ml-4'>Deside your own celebration !</h1>
                        <div className=' flex flex-[0.3] justify-end items-center space-x-5 mr-5  text-sm sm:text-xl'>
                            <a href='#AboutUs'>About Us.</a>
                        </div>
                    </div>
                </div>
            ))}
        </header>
    )
}

export default Header