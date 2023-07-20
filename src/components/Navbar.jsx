import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../styles"
import { navLinks } from '../constants'
import { logo,menu,close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link to='/' className='flex items-center gap-2' onClick={()=>{
          setActive("")
          window.scrollTo(0,0)
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-cover' />
          <p className='text-[18px] font-bold cursor-pointer flex items-center'>Mohamed &nbsp; | &nbsp;<span className='sm:block hidden text-blue-500'> ZORATECH</span></p> 
        </Link>
        <ul className='hidden sm:flex flex-row gap-10'>
          {navLinks.map(link=>(<li key={link.id} className={`${active===link.id?"text-white":"text-secondary"} hover:text-white font-medium text-[18px]`} onClick={()=>setActive(link.id)}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle===true?close:menu} alt="menu" className='w-[28] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)} />
          <div className={`${!toggle? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='flex flex-col justify-end items-start gap-4'>
            {navLinks.map(link=>(<li key={link.id} className={`${active===link.id?"text-white":"text-secondary"} hover:text-white font-medium text-[16px] font-[poppins]`} 
            onClick={()=>{
              setActive(link.id)
              setToggle(false)
            }
              }>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar