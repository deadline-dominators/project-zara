import "./about.css";
import image from '../../assests/2girls.png';
import worker1 from '../../assests/khalil.jpg';
import worker2 from '../../assests/image 47.png';
import worker3 from '../../assests/image 51.png';
import linkedin from '../../assests/Icon-Linkedin.svg';
import instagram from '../../assests/Instagram.svg';
import twitter from '../../assests/twitter.svg';
import point from '../../assests/point.svg';
import frame701 from '../../assests/Frame 701.svg';
import frame702 from '../../assests/Frame 702.svg';
import frame703 from '../../assests/Frame 703.svg';
import circle from '../../assests/Circle.svg';
import white from '../../assests/white.svg';




const About = () => {
  return (
    <div className="about">
      <img className="about-child" alt="" src="/line-3.svg" />
      <div className="roadmap1">
        <div className="account" >Home</div>
        <img className="roadmap-child" alt="" src="/line-13.svg" />
        <div className="english">About</div>
    
      </div>
      <div className="our-story-parent">
        <div className="our-story">Our Story</div>
        <div className="launced-in-2015-exclusive-is-parent">
          <div className="launced-in-2015">{`Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. `}</div>
          <div className="exclusive-has-more">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </div>
        </div>
      </div>
      <div className="side-image">
        <img
          className="portrait-two-african-females-h-icon"
          alt=""
          src={image}
        />
      </div>
      <div className="full-services">
        <div className="services-parent">
          <img className="services-icon" alt="" src={frame701} />
          <div className="free-and-fast-delivery-parent">
            <div className="free-and-fast">FREE AND FAST DELIVERY</div>
            <div className="free-delivery-for">
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className="services-group">
          <img className="services-icon" alt="" src={frame702} />
          <div className="free-and-fast-delivery-parent">
            <div className="free-and-fast">24/7 CUSTOMER SERVICE</div>
            <div className="friendly-247-customer">
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className="services-container">
          <img className="services-icon" alt="" src={frame703} />
          <div className="free-and-fast-delivery-parent">
            <div className="free-and-fast">MONEY BACK GUARANTEE</div>
            <div className="friendly-247-customer">
              We reurn money within 30 days
            </div>
          </div>
        </div>
        <div className="services-parent">
          <img className="services-icon" alt="" src={circle} />
          <div className="free-and-fast-delivery-parent">
            <div className="free-and-fast">MONEY BACK GUARANTEE</div>
            <div className="friendly-247-customer">
              We return money within 30 days
            </div>
          </div>
        </div>
      </div>
      <div className="frame-group">
        <div className="instance-wrapper">
          <div className="services-parent1">
            <img className="services-icon" alt="" src={circle} />
            <div className="free-and-fast-delivery-group">
              <b className="free-and-fast1">{`10.5k `}</b>
              <div className="free-delivery-for1">Sallers active our site</div>
            </div>
          </div>
        </div>
        <div className="instance-container">
          <div className="services-parent2">
            <img className="services-icon" alt="" src={white} />
            <div className="free-and-fast-delivery-parent">
              <b className="free-and-fast1">33k</b>
              <div className="founder-chairman">Monthly Produduct Sale</div>
            </div>
          </div>
        </div>
        <div className="instance-wrapper">
          <div className="services-parent3">
            <img className="services-icon" alt="" src={circle} />
            <div className="free-and-fast-delivery-group">
              <b className="free-and-fast1">45.5k</b>
              <div className="founder-chairman">
                Customer active in our site
              </div>
            </div>
          </div>
        </div>
        <div className="instance-wrapper">
          <div className="services-parent4">
            <img className="services-icon" alt="" src={circle} />
            <div className="free-and-fast-delivery-group">
              <b className="free-and-fast1">25k</b>
              <div className="founder-chairman">
                Anual gross sale in our site
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="frame-parent1">
          <div className="image-46-wrapper">
            <img className="image-46-icon" alt="" src={worker1} />
          </div>
          <div className="frame-parent2">
            <div className="tom-cruise-parent">
              <div className="tom-cruise">Khalil kordoghli</div>
              <div className="founder-chairman">{`Founder & Chairman`}</div>
            </div>
            <div className="icon-twitter-parent">
              <img className="dropdown-icon" alt="" src={twitter} />
              <img className="dropdown-icon" alt="" src={instagram} />
              <img className="dropdown-icon" alt="" src={linkedin} />
            </div>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="image-46-wrapper">
            <img className="image-51-icon" alt="" src={worker3} />
          </div>
          <div className="frame-parent2">
            <div className="tom-cruise-parent">
              <div className="tom-cruise">Zeineb khmida</div>
              <div className="founder-chairman">Managing Director</div>
            </div>
            <div className="icon-twitter-parent">
              <img className="dropdown-icon" alt="" src={twitter} />
              <img className="dropdown-icon" alt="" src={instagram} />
              <img className="dropdown-icon" alt="" src={linkedin} />
            </div>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="image-46-wrapper">
            <img className="image-47-icon" alt="" src={worker2} />
          </div>
          <div className="frame-parent2">
            <div className="tom-cruise-parent">
              <div className="tom-cruise">leith ayadi </div>
              <div className="founder-chairman">Product Designer</div>
            </div>
            <div className="icon-twitter-parent">
              <img className="dropdown-icon" alt="" src={twitter} />
              <img className="dropdown-icon" alt="" src={instagram} />
              <img className="dropdown-icon" alt="" src={linkedin} />
            </div>
          </div>
        </div>
      </div>
      <div className="ellipse-parent">
        <div className="frame-child" />
        <div className="frame-child" />
        <img className="frame-inner" alt="" src={point} />
        <div className="frame-child" />
        <div className="frame-child" />
      </div>
    </div>
  );
};

export default About;

