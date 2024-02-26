// pag properties
import './About.css'
import header from '../../assets/page-heading-bg.jpg';

import property1 from '../../assets/property-01.jpg';
import property2 from '../../assets/property-02.jpg';
import property3 from '../../assets/property-03.jpg';
import property4 from '../../assets/property-04.jpg';
import property5 from '../../assets/property-05.jpg';
import property6 from '../../assets/property-05.jpg';

function About() {
  return (
    <div className='properties'>
      <div className='primary'>
      <button >HOME / PROPERTIES</button>

      </div>
      <h1> PROPERTIES </h1>
      <img src={header} />

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
          <p>18 Old Street Miami, OR 97219</p>

        </div>
        <div className="card">
          <img src= {property1} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          <p>18 Old Street Miami, OR 97219</p>

        </div>
        <div className="card">
          <img src= {property2} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          <p>18 Old Street Miami, OR 97219</p>

        </div>
        <div className="card">
          <img src= {property3} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          <p>18 Old Street Miami, OR 97219</p>

        </div>
        <div className="card">
          <img src= {property4} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          <p>18 Old Street Miami, OR 97219</p>

        </div>
        <div className="card">
          <img src= {property6} />
          <div>
            <button>partment</button>
            <h4>$2.264.000</h4>
          </div>
          <p>18 Old Street Miami, OR 97219</p>

        </div>

      </div>
    </div>
    
  )
}

export default About
