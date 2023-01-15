import {React, useEffect, useState} from 'react'
import JsCoder from '../img/JsCoder.png'
import DesWebCoder from '../img/DesWebCoder.png'
import ReactCoder from '../img/ReactCoder.png'
import Modal from './Modal.js'

function AboutMe() {
    
    function activateModal() {
        const modal = document.querySelector('.modal')
        const preview = document.querySelectorAll('.certificate-container img')
        const original = document.querySelector('.full-img')
        
        preview.forEach(preview => {
            preview.addEventListener('click', ()=>{
                modal.classList.add('open')
                original.classList.add('open')
                const originalSrc = preview.getAttribute('data-original')
                original.src = originalSrc
            })
        })
    
        modal.addEventListener('click', (e)=>{
            if (e.target.classList.contains('modal')) {
                modal.classList.remove('open')
                original.classList.remove('open')
            }
        })
    }

    return (
        <>
        <div className='aboutMe-container'>
            <h2 className='aboutMe-container__title'>Sobre Mí</h2>
            <div className='aboutMe-container__wrapper'>
                <div className="personalInfo-box">
                    <span>Hola!</span>
                    <p>Me llamo Facundo, un desarrollador de front end interesado por el mundo de la tecnologia desde pequeño. Busco solucionar problemas y brindar productos funcionales y visualmente agradables</p>
                    <p>Muchas gracias por estar aquí y me gustaria cualquier tipo de feedback o una oportunidad de trabajo</p>
                    <a href="#">Contacto</a>
                </div>
                <div className="skills-box">
                    
                    <div className="technology-container">
                        <span>React</span>
                        <span>Javascript</span>
                        <span>SCSS</span>
                        <span>CSS</span>
                        <span>HTML</span>
                    </div>

                    <div className="courses-box">
                        <div className="certificate-container">
                            <img onClick={()=>activateModal()} src={ReactCoder} alt="courses" data-original={ReactCoder}/>
                            <span>"React"</span>
                        </div>
                        <div  className="certificate-container">
                            <img onClick={()=>activateModal()} src={JsCoder} alt="courses" data-original={JsCoder}/>
                            <span>"Javascript"</span>
                        </div>
                        <div  className="certificate-container">
                            <img onClick={()=>activateModal()} src={DesWebCoder} alt="courses" data-original={DesWebCoder}/>
                            <span>"Desarrollo Web"</span>
                        </div>
                        
                    </div>

                    <div className="languages-box">
                        <span>Español (Nativo)</span>
                        
                        <span>Inglés (B1)</span>
                    </div>
                </div>
            </div>

        </div>
        <Modal />
        
        </>
    )
}

export default AboutMe