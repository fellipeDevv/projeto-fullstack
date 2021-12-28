import {React, useEffect} from 'react';
import './Header.css';
import {Link} from 'react-scroll';
import logo from './imgs/logo2.png';

export default ()=> { // eslint-disable-line import/no-anonymous-default-export
    
        function scrollListener () {
            if (window.scrollY > 10) {
                document.getElementById('buton--top').style.display = 'block';
            } else {
                document.getElementById('buton--top').style.display = 'none';
            }
        }
        window.addEventListener('scroll', scrollListener);

    function abrir() {
        document.getElementById('buton-item').style.display = 'inline-block';
      }
      function fechar() {
        document.getElementById('buton-item').style.display = 'none';
      }
    
    return ( 
        <header>
        <div className ="header--logo">
            <a href=""><img src = {logo}/></a>
        </div>
        <div className ="header--itens">
            <li>
                <Link to="div1"spy={true} smooth={true} offset={0} duration={500} >Home</Link>
                <Link to="div2"spy={true} smooth={true} offset={0} duration={500} >About me</Link>
                <Link to="div3"spy={true} smooth={true} offset={0} duration={500} >Jobs</Link>
                <Link to="div5"spy={true} smooth={true} offset={0} duration={500} >contact me</Link>
            </li>
        </div>
        <div className ="header--search">
            <input type="search" name="" id="" placeholder="Ϙ pesquisar" />
        </div>
        <div className="header--buton" onClick={abrir}>
            
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                </div>
                
                <div className="buton-item" id="buton-item" onMouseLeave={fechar}>
                <Link to="div1"spy={true} smooth={true} offset={0} duration={500} onClick={fechar}>Home</Link>
                <Link to="div2"spy={true} smooth={true} offset={0} duration={500} onClick={fechar}>About me</Link>
                <Link to="div3"spy={true} smooth={true} offset={0} duration={500} onClick={fechar}>Jobs</Link>
                <Link to="div5"spy={true} smooth={true} offset={0} duration={500} onClick={fechar}>contact me</Link>
            
                </div>
            <div>
             <div className="cards">
              <Link to="div1"spy={true} smooth={true} offset={0} duration={500}id="dv1"/>
              <Link to="div2"spy={true} smooth={true} offset={0} duration={500} id="dv2"/>
              <Link to="div3"spy={true} smooth={true} offset={0} duration={500}id="dv3"/>
              <Link to="div4"spy={true} smooth={true} offset={0} duration={500}id="dv4"/>
            </div>
            <div className="buton--top" id="buton--top"><Link to="div1"spy={true} smooth={true} offset={0} duration={500}>▲</Link></div>
         </div>
        </header>

     );
}

