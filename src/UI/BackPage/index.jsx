import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import s from './style.module.css'



export default function BackPage() {
  const navigate = useNavigate();
    return (
        <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}> 
        <IoIosArrowBack />
        Back
      </Link>
    )
  }
