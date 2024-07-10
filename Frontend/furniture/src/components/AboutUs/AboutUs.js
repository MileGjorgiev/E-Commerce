import React from 'react';
import './AboutUs.css';
import img from './images/rattindo.jpeg'
import img1 from './images/photo1.jpg'
import img2 from './images/photo2.jpeg'
import img3 from './images/photo3.jpg'
import img4 from './images/photo4.jpg'
import img5 from './images/photo5.jpg'
import img6 from './images/photo6.jpg'
import img7 from './images/photo7.jpg'
import img8 from './images/photo8.jpg'
import img9 from './images/photo9.jpg'

const AboutUs = () => {
    return(
        <div className='container mt-5' id='aboutUs'>
            <div className='mt-4 mb-4'>
                <nav aria-label="breadcrumb mt-3">
                   <ol class="breadcrumb">
                     <li class="breadcrumb-item"><a className='text-secondary text-decoration-none fs-4' href="/">Дома</a></li>
                     <li class="breadcrumb-item active fs-4" aria-current="page">За нас</li>
                    </ol>
                </nav>
            </div>
            <div className='row '>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center p-0'>
                    <img src={img} style={{width: "100%",height: "100%"}}/>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center d-flex align-items-center border border-1'>
                    <div >
                    <p className='fs-1' >За нас</p>
                    <p>Секое парче мебел од бамбус во нашата продавница е уникатно изработено за да внесе природна убавина и елеганција во вашиот дом. 
                     Ние сме семејна фирма со страст за квалитет и одржливост, основана со цел да донесеме врвен мебел од бамбус до македонскиот пазар.
                     Нашите производи се внимателно изработени од врвни занаетчии, кои со љубов и вештина го претвораат бамбусот во уметност.</p>
            
                    <p>Веруваме дека бамбусот е иднината на одржливиот мебел. Тој е еколошки, траен и има извонредна естетика.
                    Со секое купување од нашата продавница,
                    вие не само што добивате убав и функционален мебел, туку и придонесувате за заштита на животната средина.</p>

                    <p>Нашата мисија е да обезбедиме висококвалитетни, естетски и еколошки производи кои ќе го трансформираат
                    вашиот простор и ќе донесат природна хармонија во вашиот дом. 
                    Посветени сме на задоволството на нашите клиенти и секогаш сме тука за да ви помогнеме да го најдете совршениот мебел за вашиот дом.</p>

                    <p>Добредојдовте во нашата продавница за мебел од бамбус – местото каде што природата и уметноста се среќаваат.</p>
                    </div>
                    
                </div>
            
            </div>
            <div className='slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img className='slideImg' src={img1} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img2} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img3} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img4} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img5} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img6} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img7} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img8} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img9} />
                    </div>

                    {/* doubled */}

                    <div className='slide'>
                        <img className='slideImg' src={img1} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img2} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img3} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img4} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img5} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img6} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img7} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img8} />
                    </div>
                    <div className='slide'>
                        <img className='slideImg' src={img9} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs;