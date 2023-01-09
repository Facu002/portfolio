import React from 'react'
import pumaWeb from '../img/pumaWeb.png'
import RockstarGtaV from '../img/RockstarGtaV.png' 
import IWatchSe from '../img/IWatchSe.png'
function Projects() {
    return (
        <div className='projects-container'>
        <h2 className='projects-container__title'>Mis proyectos</h2>
            <div className="projects-container__wrapper">
                <div className="projectPreview-container">
                    <img className='project-thumbnail' src={pumaWeb} alt="projectThumbnail" />
                    
                    <div className="project-info">
                        <span className='project-info__projectName'>E-commerce insipirado en Puma</span>
                        <div>
                            <span>React</span>
                            <span>Javascript</span>
                            <span>SCSS</span>
                            <span>Firebase</span>
                        </div>

                        <div className="project-description">
                        E-commerce. Primer proyecto en el que uso React que me sirvió para aprender los fundamentos de React y me adentre al uso de Firebase para el almacenamiento y llamados de datos. 
                        Al ser mi primer experiencia mis dificultades fueron acostumbrarme al uso de estados.
                        </div>

                        <div className="project-view">
                            <a href='https://puma-react-6i35.vercel.app/' target="_blank">Ver Demo</a>
                            <a href='https://github.com/Facu002/PUMA---react' target="_blank">Ver Código</a>
                        </div>
                    </div>
                    
                </div>
                <div className="projectPreview-container">
                    <img className='project-thumbnail' src={IWatchSe} alt="projectThumbnail" />

                    <div className="project-info">
                        <span className='project-info__projectName'>Landing IWatch SE</span>
                        <div>
                            <span>React</span>
                            <span>Javascript</span>
                            <span>SCSS</span>
                        </div>

                        <div className="project-description">
                        Landing Page. Clon de la pagina de IWatch SE, los componentes de React me falicitaron el diseño inusual de la pagina, en el que cada seccion de esta es una carta. Tambien fue necesario el uso de mucho CSS debido al enfoque al diseño de las paginas de Apple.
                        </div>

                        <div className="project-view">
                            <a href='' target="_blank">Ver Demo</a>
                            <a href='' target="_blank">Ver Código</a>
                        </div>
                    </div>
                </div>
                <div className="projectPreview-container">
                    <img className='project-thumbnail' src={RockstarGtaV} alt="projectThumbnail" />

                    <div className="project-info">
                        <span className='project-info__projectName'>Landing Gta V</span>
                        <div>
                            <span>React</span>
                            <span>Javascript</span>
                            <span>SCSS</span>
                            <span>SwiperJs</span>
                        </div>

                        <div className="project-description">
                        Landing Page. Clon de la pagina de Gta V, use React context para agregar una segunda pagina de Gta Online, en la que tuve que utilizar librerias de animaciones para asimilar las usadas en la pagina real.
                        Esta es una de las paginas mas recientes, si bien no tuve grandes complicaciones, lo mas dificil fue encontrar una libreria acorde a lo que la pagina oficial utiliza.
                        </div>

                        <div className="project-view">
                            <a href='https://gtav-web.vercel.app/' target="_blank">Ver Demo</a>
                            <a href='https://github.com/Facu002/iwatch-landing' target="_blank">Ver Código</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects