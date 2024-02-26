// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import m1 from '../../assets/banner-01.jpg'
import m2 from '../../assets/banner-02.jpg'
import m3 from '../../assets/banner-03.jpg'
import  './Home.css'

// ======================= imgs sec 2====================================
import content from '../../assets/single-property.jpg'

// ========================= imgs sec3===========================
import property1 from '../../assets/property-01.jpg';
import property2 from '../../assets/property-02.jpg';
import property3 from '../../assets/property-03.jpg';
import property4 from '../../assets/property-04.jpg';
import property5 from '../../assets/property-05.jpg';
import property6 from '../../assets/property-05.jpg';
// ========================= imgs sec4===========================
import video1 from '../../assets/video-bg.jpg';
import video2 from '../../assets/video-frame.jpg';
// ========================= imgs contact===========================

import contactt from '../../assets/property-04.jpg';

// ============================= slider==============================

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
  };
  
  return (
    <div className="header">
     <div className="slider">
     <Slider {...settings}>
         <img src= {m1} />
         <img src= {m2} />
         <img src= {m3} />
      </Slider>
    
      
       </div>
 {/* ======================================property ================== */}
 <div className='properties'>
    <div className='contents'>
      <div className='content-left'>
        <img src={content} />
        {/* <p>24 New Street Miami, OR 24560</p> */}
        {/* <button>Apparment</button> */}
        <hr/>
        <h5>
        When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra .<br/>
         

When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </h5>
      </div>
      <div className='content-right'>
        <div>
        <h3>450 m2</h3>
        <h4>Total Flat Space</h4>
        </div>
        <div>
        <h3>450 m2</h3>
        <h4>Total Flat Space</h4>
        </div>
        <div>
        <h3>450 m2</h3>
        <h4>Total Flat Space</h4>
        </div>
        <div>
        <h3>450 m2</h3>
        <h4>Total Flat Space</h4>
        </div>
      
      </div>
      
       </div>

       <div className='deal'> 
       <div className='deal-content'>
       <h4>Find Your Best<br/> Deal Right Now!</h4>
       <div className='btnn'>
        <button className='e1'>show naw</button>
        <button className='e'>show naw</button>
        <button className='e'>show naw</button>
       </div>
       </div>
        </div>

    </div>
    <hr/>
    
{/* =================================Ditils ========================== */}

<div className='properties'>


      <div className='ptns'>
        <button  className='btn2'> Show All</button>
        <button  className='btn1'> Appartmant</button>
        <button  className='btn1'> Villa Hose</button>
        <button  className='btn1'> Panthouse</button>
      </div>

      <div className='cards'>
        <div className="card">
          <img src= {property5} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          {/* <p>18 Old Street Miami, OR 97219</p> */}

        </div>
        <div className="card">
          <img src= {property1} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          {/* <p>18 Old Street Miami, OR 97219</p> */}

        </div>
        <div className="card">
          <img src= {property2} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          {/* <p>18 Old Street Miami, OR 97219</p> */}

        </div>
        <div className="card">
          <img src= {property3} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          {/* <p>18 Old Street Miami, OR 97219</p> */}

        </div>
        <div className="card">
          <img src= {property4} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          {/* <p>18 Old Street Miami, OR 97219</p> */}

        </div>
        <div className="card">
          <img src= {property6} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          {/* <p>18 Old Street Miami, OR 97219</p> */}

        </div>

      </div>
    </div>

{/* ====================================== video ========================= */}


<div className="main-video">
  <div className="img-video">
    <h4 className="k">| VIDEO VIEW</h4>
  <h6 className="d">Get Closer View<br/> Different Feeling</h6>

    <img src= {video1} />

  </div>
  <div className="video-video">
  <img src= {video2} />

  </div>

</div>

  {/* ====================================== contact us ====================== */}

   
  <div className='main-contact'> 
   {/* <div className=' title-contact'>
    <p className='p2'>Get In Touch<br/> With Our Agents</p>
    <p className='title'>
    When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
    </p>

   </div> */}
   <div className='form'> 
   <h4>Contact Us</h4>
 
     <form>
      <input type="text" placeholder='Enter Your Name' />
      <input type="text" placeholder='Enter Your Emil' />
      <input type="text" placeholder='Enter Your number' />
      <input type="text" placeholder='Enter Your massege' />
      <button className='o'> Send</button>
     </form>
   </div>
   <div className="img-contact">
    <img src= {contactt}  />
   </div>
   
     </div>

    </div>
    
  )
}

export default Home
