import React from 'react';
import './Footer.css';

export default ()=> {
    return (
        <footer>
            <div className="line"></div>
            <div className="container--footer">
                <div className="footer--map">
                    <h1>Maps</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.04885950993!2d-46.87549697542578!3d-23.681531451728482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57689047d011%3A0x934fcd8a89169c0e!2sEm%20Busca%20do%20FullStack!5e0!3m2!1spt-BR!2sbr!4v1640309144977!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </div>
                <div className="footer--redes">
                    <h1>Redes Sociais</h1>
                    <a href="#"><img src="https://static.wixstatic.com/media/1c71a7_7e627eb008cc4fdf8bb042646b507e9f~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01/90dd9f12fdd1eefb8c8976903944c026-logotip.webp" alt="" />Em_busca_do_fullStack</a>
                    <a href="#"><img src="https://expertdigital.net/wp-content/uploads/2018/05/Curso-de-Instagram-2.0-Circle.png" alt=""/>@Em_busca_do_fullStack</a>
                    <a href="#" className="rede"><img src="https://www.adapti.info/site/images/whatsapp.png" alt="" />(11) 9 9760-0097<br/>(11) 9 7415-5930<br/>(11) 9 7415-5930</a>
                </div>
                <div className="footer--contact">
                    <h1>Contate Nos</h1>
                    <input type="email" name="email" id="email" className=""/>
                    <input type="text" name="text"className=""/>
                    <input type="submit" className="buttons"/>
                </div>
            </div>
            <div className="log"><a href="#">desenvolvido por <span>EmBuscaDoFullStack</span></a></div>
        </footer>
    );
}
