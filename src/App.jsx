import {React, useState, useEffect} from 'react';
import './App.css';
import bill from './containers/imgs/billll-car.png';
import jeff from './containers/imgs/jeff-bezos-car.png';
import steve from './containers/imgs/stevejobs-car.png';
import mark from './containers/imgs/Mark-Zuckerberg-car.png';
import Header from './containers/Header';
import Footer from './containers/Footer';
import whats from './containers/imgs/whatsapp.png';
import Jobs from './containers/Jobs';
function App() {
  var carga =1000;
  var cron;
  function loading() {
    document.getElementById('timer').style.display = 'none';
  }
  function start() {
    cron = setInterval(()=>{loading();},carga);
    if(cron > 10){
      stop();
    }
  }
  function stop(){
    clearInterval(cron);
  }
  window.onload = function(){
    start();
  }

  let slidePosition = 0;
  const slides = document.getElementsByClassName('carousel__item');
  function next(){
    MoveToNextSlide();
  };
  function Previous(){
    MoveToPrevSlide();
  };
  function updateSlide(){
    for(let slide of slides){
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
    }
    slides[slidePosition].classList.add('carousel__item--visible');
  }

  function MoveToPrevSlide(){

    if(slidePosition === 0){
      slidePosition = 3;
    }else{
      slidePosition--;
    }
    updateSlide();
  };
  function MoveToNextSlide(){
    
    if(slidePosition === 3){
      slidePosition = 0;
    }else{
      slidePosition++;
    }
    updateSlide();
  };
  


  return (

    <div className="page">
             <div className = "loading" id="timer">
        <img src = "https://www.rchandru.com/images/portfolio/loading.gif"/> 
        </div>
            <Header/>
            <div className="whats"><img src={whats} alt="" /></div>
             <section id='div1'>
               <div className = "container"><div className = "text"><h1>Em Busca <br/><span>do Fullstack</span></h1>
               <p>Venha conhecer nossos trabalhos e no que podemos ajudar você e seu negócio!</p>
               </div><img src="https://static6.depositphotos.com/1030334/671/i/600/depositphotos_6710151-stock-photo-eyes.jpg"className="img"/></div>
            <div className="divcolor">
            </div>
            </section>
            <section id='div2'>
            <div className = "container"><div className = "text1"><h1>Em Busca <br/><span>do Fullstack</span></h1>
               <p>Venha conhecer nossos trabalhos e no que podemos ajudar você e seu negócio!</p>
               </div><img src="https://comoinvestir.thecap.com.br/wp-content/uploads/2021/07/maiores-empresas-mercado-e-commerce-brasil.jpg"className="img1"/></div>
            <div className="divcolors"></div>
            </section>
            <section id='div3'>
              <div className = "container">
                <Jobs/>
                </div>
            <div className="divcolor">
            </div>
            </section>
            <section id='div4'>
            <div className = "container">
              <div className = "carousel">
                <div className="carousel__item carousel__item--visible">
                <img src={bill} alt="" />
                </div>
                <div className="carousel__item">
                <img src={jeff} alt="" />
                </div>           
                <div className="carousel__item">
                <img src={steve} alt=""/>
                </div>
                <div className="carousel__item">
                <img src={mark} alt="" />
                </div>
                <div className="carousel__actions">
                  <button id="carousel__button--prev" className="carousel__button--prev" aria-label="Previous" onClick={Previous}></button>
                  <button id="carousel__button--next" className="carousel__button--next"aria-label="next slides" onClick={next}></button>
                </div>
              </div>
            </div>
            <div className="divcolors"></div>
            </section>
            <footer id='div5'>
             <Footer/>
             </footer>

    </div>
  );
}

export default App;
