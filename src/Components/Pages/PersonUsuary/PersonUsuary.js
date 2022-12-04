import React from 'react'
import './PersonUsuary.css'
import { Link } from 'react-router-dom'
import PersonUsuaryImg from '../PersonUsuary/PersonUsuaryImg.svg'

export default function PersonUsuary() {
    return (

        <div className='PersonUsuaryContainer'>
            <header className="Header">
                <nav>
                    <ul>
                        <li><Link to="/"><h1 className='greencolorheader'>Lacrei</h1></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link className='greencolorheader' to="/pessoa-usuaria">Pessoa Usúaria</Link></li>
                        <li><Link to="/profissional">Profissional</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='person-usuary-wrapper'>
                <div className='person-usuary-name-description'>
                    <div className='person-usuary-name'>
                        <h1>Pessoa Usuária</h1>
                        <div className='person-usuary-description'>
                            <h2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</h2>
                        </div>
                    </div>
                </div>
                <div className='person-usuary-img'>
                    <img src={PersonUsuaryImg} />
                </div>
            </div>
            <footer className='Footer'>
            <div className='hr'></div>
                <div className='icon-links-text'>
                    <div className='textlinks'>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link className='boldfooter' to="/pessoa-usuaria">Pessoa Usúaria</Link>
                            <Link to="/profissional">Profissional</Link>
                        </nav>
                    </div>
                    <div className='iconslinks'>
                        <nav>
                            <Link target="_blank" to="https://www.instagram.com/lacrei.saude/"><i class="fa-brands fa-instagram"></i></Link>
                            <Link target="_blank" to="https://www.facebook.com/lacrei.saude"><i class="fa-brands fa-facebook"></i></Link>
                            <a target="_blank" href="https://www.linkedin.com/company/lacrei/"><i class="fa-brands fa-linkedin"></i></a>
                        </nav>
                    </div>
                    <p>Desafio Front-end Lacrei</p>
                </div>
            </footer>
        </div>

    );
}