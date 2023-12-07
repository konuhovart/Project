import React from 'react'
import Container from '../../UI/Container'
import s from './style.module.css'

export default function Foot() {
  return (
    <>
    <Container>
    <div className={s.container}>
      <div className={s.foot}>
        <div className={s.contact}>
          
            <h2>Contact</h2>
            <p className={s.phone}>+49 999 999 99 99</p> 
            <a href="https://www.instagram.com/startainstitute/"><img src="/media/insta.png" alt="instagram" /></a>
            <a href="https://tel-ran.de/tel:+491717788664"><img src="/media/whats.png" alt="whatsapp" /></a>
          
        </div>
        <div className={s.address}>
          <div>
            <h2>Address</h2>
            <a className={s.www}href="https://www.google.com/search?q=telranDE">
              Linkstrasse2, 8 OG, 10785,
              Berlin, Deutschland
            </a>
           <p className={s.hours}>Working hours:</p> 
          <p className={s.aday}>24 hours a day</p>
          </div>
        </div>
      </div>
      <div className={s.map}>
        <iframe
          title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410280410965!2d13.372526677001085!3d52.507913737123985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1697909485753!5m2!1sru!2sde"
          width="100%"
          height="525"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      </Container>
    </>
  )
}

