// import React from 'react'
import content from '../../assets/single-property.jpg'
import headerr from '../../assets/page-heading-bg.jpg'
// import m from '../../assets/deal-02.jpg'
import './Gallary.css'

function Gallary() {
  return (
    <div className='properties'>
    <div className='primary'>
    <button >HOME / PROPERTIES</button>

    </div>
    <h1>  MORE DATILE </h1>
    <img src={headerr} />

    <div className='contents'>
      <div className='content-left'>
        <img src={content} />
        <p>24 New Street Miami, OR 24560</p>
        <button>Apparment</button>
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




  )
}

export default Gallary
