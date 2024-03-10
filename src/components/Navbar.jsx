import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles.js'
import {navLinks} from '../constants'
import {menu,close} from '../assets'
const Navbar = () => {
  const [active, setActive] = useState("")
  const [scroll, setScroll] = useState(false)
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0){
          setScroll(true)
      }
      else{
        setScroll(false)  
      }
    })
  }, [])  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scroll ? 'bg-primary':'bg-transparent'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0,0)
        }}>
         
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Samyak Jain&nbsp;</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 '>
            {navLinks.map((link) => 
            <li key={link.id} 
           className={`${active === link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
             <a href={`#${link.id}`}> {link.title} </a> </li>)}
              <a href="https://drive.google.com/file/d/1QCGRv4CPGuvCqkxznKpFEeq71wJP8gKQ/view" target='_blank'>
             <li className={` hover:text-white  text-secondary text-[18px] font-medium cursor-pointer`}>
              Resume
             </li> </a>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={ toggle ?close:menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=>setToggle(!toggle)}
          />
          <div className={`${!toggle?'hidden':'flex'} flex-col p-6   backdrop-blur-lg  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex flex-col justify-end items-start gap-4'>
            {navLinks.map((link) => 
            <li key={link.id} 
           className={`${active === link.title?"text-white":"text-secondary"} font-popins font-medium text-[16px]`} onClick={()=>{setActive(link.title); setToggle(!toggle)}}>
             <a href={`#${link.id}`}> {link.title} </a> </li>)}
             <a href="https://drive.google.com/file/d/1QCGRv4CPGuvCqkxznKpFEeq71wJP8gKQ/view" target='_blank'>
             <li className={` hover:text-white  text-secondary text-[18px] font-medium cursor-pointer`}>
              Resume
             </li> </a>
        </ul>
        
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar