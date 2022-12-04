import React from 'react';
import homeimg1 from '../Home/Home.svg';
import '../Home/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (

        <div className='Home'>
            <header className="Header">
                <nav>
                    <ul>
                        <li><Link to="/"><h1 className='greencolorheader'>Lacrei</h1></Link></li>
                    </ul>
                    <ul>
                        <li><Link className='greencolorheader' to="/">Home</Link></li>
                        <li><Link to="/pessoa-usuaria">Pessoa Usúaria</Link></li>
                        <li><Link to="/profissional">Profissional</Link></li>
                    </ul>
                </nav>
            </header>
            <main className='WelcomePage'>
                <div className='welcome-description-wrapper'>
                    <div className='welcome-text'>
                        <h1>Boas vindas a Lacrei Saúde</h1>
                        <div className='description-text-button'>
                            <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
                            <div className='description-button'>
                                <button><Link className='tdnone' to="/pessoa-usuaria">Pessoa Usuária</Link></button>
                                <button><Link className='tdnone' to="/profissional">Profissional</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='welcome-img'>
                        <img src={homeimg1}/>
                    </div>
                </div>
            </main>
            <footer className='Footer'>
            <div className='hr'></div>
                <div className='icon-links-text'>
                    <div className='textlinks'>
                        <nav>
                            <Link className='boldfooter' to="/">Home</Link>
                            <Link to="/pessoa-usuaria">Pessoa Usúaria</Link>
                            <Link to="/profissional">Profissional</Link>
                        </nav>
                    </div>
                    <div className='iconslinks'>
                        <nav>
                            <a href="https://www.instagram.com/lacrei.saude/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/lacrei.saude" target="_blank" ><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/company/lacrei/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        </nav>
                    </div>
                    <p>Desafio Front-end Lacrei</p>
                </div>
            </footer>
        </div>
        
    );
}