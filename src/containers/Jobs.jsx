import React from 'react';
import './Jobs.css';


export default function Jobs() {
    let slidePosition = 0;
    
    const slides = document.getElementsByClassName('container__jobs');
    
    function next(){
      MoveToNextSlide();
    };
    function Previous(){
      MoveToPrevSlide();
    };
    function updateSlide(){
      for(let slide of slides){
        slide.classList.remove('container__jobs-active');
        slide.classList.add('container__jobs--hidden');
      }
      slides[slidePosition].classList.add('container__jobs-active');
    }
  
    function MoveToPrevSlide(){
      if(slidePosition === 0){
        slidePosition = 2;
      }else{
        slidePosition--;
      }
      updateSlide();
    };
    function MoveToNextSlide(){
      if(slidePosition === 2){
        slidePosition = 0;
      }else{
        slidePosition++;
      }
      updateSlide();
    };
    return (
        <div className="container-jobs">
            <h1 className="jobs">Jobs</h1>
            <div className="container__jobs container__jobs-active">
                <div className="container-item container-item-active"><h1>Sites</h1><p>Desenvolvimento de websites,blogs responsiveis e qualidade garantida nos mecanismos de busca.</p><img src="http://cdn.onlinewebfonts.com/svg/img_156907.png"/></div><div className="container-item jobs-active"><h1>Sistemas</h1><p>Sistemas ERP, gestão empresarial para melhor atendimento de seus cliente e tendo controle total de seu negocio.</p><img src="https://www.domatech.com.br/wp-content/uploads/2020/06/icon-01-300x299.png"/></div><div className="container-item"><h1>E-commerces</h1><p>Comercio eletronico para que seu negocio creça com total potência no mundo da tecnologia e atendendo 100% de todos os publicos e regiões.</p><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/e-commerce-website-9-920213.png"/></div>
            </div>
            <div className="container__jobs">
            <div className="container-item"><h1>design de cartões</h1><p>Cartões de visita físicos, dígitais e interativos com os melhores designers e com a maior qualidade.</p><img src="https://cdn-icons-png.flaticon.com/512/29/29766.png"/></div><div className="container-item jobs-active"><h1>CFTV</h1><p>Cameras de alta qualidade para melhor segurança de suas residências ou empresas.</p><img src="https://www.imagensempng.com.br/wp-content/uploads/2021/09/05-7.png"/></div><div className="container-item"><h1 className="tam">montagem de maquinas</h1><p>Montagem de computadores,notebooks,placas e peças para clientes e empresas.</p><img src="https://toppng.com/public/uploads/thumbnail/download-icons-smartphone-tablet-computer-pc-svg-eps-moto-e-11562936266pz0f5mxbcs.png"/></div>
                </div>
            <div className="container__jobs">
            <div className="container-item"><h1>manutenção & suporte</h1><p>manutenção e suporte 24hrs, troca de peças, manutenção de hardware e software.</p><img src="https://www.dimep.com.br/wp-content/uploads/2021/03/ico-suporte-tecnico.png"/></div><div className="container-item jobs-active"><h1>cabeamento</h1><p>cabeamento estruturado de melhor qualidade, velocidade e instalação. </p><img src="https://cdn-icons-png.flaticon.com/512/3/3751.png"/></div><div className="container-item"><h1>landing page</h1><p>Paginas Web de atendimento rapido e pratico, com foco em aumentar e chamar a atenção do publico.</p><img src="https://www.pngkit.com/png/full/128-1285182_software-development-clipart-software-code-landing-page-icon.png"/></div>
            </div>
            <div className="carousel__actions">
                  <button id="carousel__button--prev" className="carousel__button--prev" aria-label="Previous" onClick={Previous}><img src="https://cdn-icons-png.flaticon.com/512/318/318427.png" alt="" className="imgp"/></button>
                  <button id="carousel__button--next" className="carousel__button--next"aria-label="next slides" onClick={next}><img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-noir.png" alt="" className="imgn"/></button>
                </div>
        </div>
    )
}
