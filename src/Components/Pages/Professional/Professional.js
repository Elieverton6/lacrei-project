import React from 'react';
import './Professional.css';
import { Link } from 'react-router-dom'
import ProfessionalImg from '../Professional/ProfessionalImg.svg'

export default function Professional() {
    return(

        <div className='Professional'>
            <header className="Header">
                <nav>
                    <ul>
                        <li><Link to="/"><h1 className='greencolorheader'>Lacrei</h1></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pessoa-usuaria">Pessoa Usúaria</Link></li>
                        <li><Link className='greencolorheader' to="/profissional">Profissional</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='professional-wrapper'>
                <div className='professional-name-description'>
                    <div className='professional-name'>
                        <h1>Professional</h1>
                        <div className='professional-description'>
                            <h2>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</h2>
                        </div>
                    </div>
                </div>
                <div className='professional-img'>
                    <img src={ProfessionalImg} />
                </div>
            </div>
            <footer className='Footer'>
            <div className='hr'></div>
                <div className='icon-links-text'>
                    <div className='textlinks'>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/pessoa-usuaria">Pessoa Usúaria</Link>
                            <Link className='boldfooter' to="/profissional">Profissional</Link>
                        </nav>
                    </div>
                    <div className='iconslinks'>
                        <nav>
                            <Link target="_blank" to="https://www.instagram.com/lacrei.saude/"><i class="fa-brands fa-instagram"></i></Link>
                            <Link target="_blank" to="https://www.facebook.com/lacrei.saude"><i class="fa-brands fa-facebook"></i></Link>
                            <Link target="_blank" to="https://www.linkedin.com/company/lacrei/"><i class="fa-brands fa-linkedin"></i></Link>
                        </nav>
                    </div>
                    <p>Desafio Front-end Lacrei</p>
                </div>
            </footer>
        </div>

    );
}