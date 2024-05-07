import React, { useEffect, useRef } from 'react';
import pic4 from '../assets/Images/pic5.jpg';
// import pic6 from '../assets/Images/pic8.png';
import digital from '../assets/Images/digital.jpg';
import studio from '../assets/Images/studio.jpg';
import graphics from '../assets/Images/graphics.jpg';
import brand from '../assets/Images/branding.jpg';
import { ImQuotesLeft } from "react-icons/im";
import girl from '../assets/Images/girl.jpg';
import logo from '../assets/Images/logo.png';
import { FaAmazon, FaLocationDot, FaMicrosoft, FaSpotify, FaWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaClock } from "react-icons/fa6";
import { IoIosMail } from 'react-icons/io';
import { BsApple } from 'react-icons/bs';
import robo from '../assets/Images/lap.jpg';




function Home() {

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  const ouurServicesRef = useRef(null);


  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  return (
    <>
      <div  ref={homeRef}>
        <div className='row' style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#e6e6e6',overflow:'hidden' }}>
          <div className='col-lg-6 ' >
            <h1 data-aos="fade-up" className='ms-5' style={{ marginTop: '220px', fontFamily: '"Playfair Display", serif', fontSize: '55px' }}>Experience premier digital solutions with us...</h1>
            <button onClick={() => scrollToRef(ouurServicesRef)} style={{ marginLeft: '50px' }}>Services</button>
            <button style={{ marginLeft: '30px', backgroundColor: '#4d4d4d', color: 'white' }}>Get Started</button>

          </div>
          <div  className='girl col-lg-6 ' >
            <img  data-aos="zoom-in-up" className='girl-img' src={girl} alt="" />
          </div>

          <nav className="navbar-background">

            <div className="container d-flex justify-content-center align-items-center">
              <a style={{ color: 'white' }} className="text1 navbar-brand" href="#">
              </a>
              <ul style={{ fontSize: '18px' }} className="nav-links d-flex justify-content-evenly mt-3 fw-bold ">

                <a style={{ color: 'black' }} className="nav-link active" aria-current="page" href="#" onClick={() => scrollToRef(homeRef)}>
                  Home
                </a>
                <a style={{ color: 'black' }} className="nav-link ms-4" href="#" onClick={() => scrollToRef(servicesRef)}>
                  Services
                </a>
                <a style={{ color: 'white' }} className="nav-link ms-4" href="#" onClick={() => scrollToRef(aboutUsRef)}>
                  About Us

                </a>
                <a style={{ color: 'white' }} className="nav-link ms-4" href="#" onClick={() => scrollToRef(contactRef)}>
                  Contact
                </a>
              </ul>
            </div>
            <img className='ms-3' style={{ width: '8%', marginTop: '-80px' }} src={logo} alt="" />

          </nav>
        </div>
      </div>
      <div className="whatsapp-button">
        <a href="https://wa.me/919656123466">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>
      <div ref={servicesRef} style={{ width: '100%', height: '140vh', backgroundColor: '#F5F5F5', marginTop: '-10px' }}>
        <center>
          <h1 data-aos="fade-up" className='head1'>
            WHAT WE DO
          </h1>
          <h3 data-aos="fade-up" className='head2'>
            WE OFFER DIGITAL SOLUTIONS
          </h3>
        </center>
        <div className=' d-flex justify-content-evenly' style={{ width: '100%', height: '85vh', marginTop: '80px',overflow:'hidden' }}>
          <div className='studio   ' style={{ width: '30%', height: '80%' }}>
            <img data-aos="fade-up-right" className='studio-img' src={studio} alt="" />
            <center>
              <h2 style={{ marginTop: '400px', fontFamily: '"Playfair Display", serif' }}>Studio</h2>
              <p>ELEVATE YOUR IMPACTS & CONNECT BRANDS WITH CUSTOMERS</p>
            </center>
          </div>

          <div className='graphics ' style={{ width: '30%', height: '80%' }}>
            <img className='graphics-img' src={graphics} alt="" />
            <center>
              <h2 style={{ marginTop: '400px', fontFamily: '"Playfair Display", serif' }}>Graphics</h2>
              <p>DESIGNS THAT
                INSPIRE, CONNECT,
                AND LEAVE A LASTING IMPRESSION</p>
            </center>
          </div>
          <div className='brand ' style={{ width: '30%', height: '80%' }}>
            <img data-aos="fade-up-left" className='brand-img' src={brand} alt="" />
            <center>
              <h2 style={{ marginTop: '400px', fontFamily: '"Playfair Display", serif' }}>Branding</h2>
              <p>YOUR BRAND, YOUR STORY:
                WE SHAPE IDENTITIES
                WITH IMPACT</p>
            </center>
          </div>
        </div>
        <div ref={aboutUsRef} className='row1 d-flex justify-content-evenly ' style={{ width: '100%', height: '130vh', backgroundColor: '#e6e6e6', marginTop: '65px',overflow:'hidden' }}>
          <div style={{ marginTop: '100px' }} className='col-lg-6' >
            <h1 data-aos="fade-up" style={{ fontSize: '40px' }} className='head1'>ABOUT EX-MEDIA</h1>
            <p className='para1 ms-5' style={{ fontFamily: '"Playfair Display", serif', fontSize: '22px', marginTop: '-30px' }}>Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.</p>
          </div>
          <div className='col-lg-6 '>
            <div data-aos="flip-down" style={{ width: '400px', height: '200px', marginLeft: '130px', backgroundColor: '#F5F5F5', borderRadius: '20px' }} className='border mt-5'>
              <ImQuotesLeft style={{ marginLeft: '30px', marginTop: '20px' }} />
              <p style={{ fontFamily: 'inherit' }} className='ms-5 me-3'>Innovative and professional. E-X Media blends creativity with precision, delivering designs that captivate and brands that resonate. A go-to for modern aesthetics and seamless execution.</p>
              <h2 className='ms-5' style={{ fontFamily: 'serif', fontSize: '25px' }}>Emily Johnson</h2>

            </div>
            <div data-aos="flip-down" style={{ width: '400px', height: '200px', marginLeft: '130px', backgroundColor: '#F5F5F5', borderRadius: '20px' }} className='border mt-5'>
              <ImQuotesLeft style={{ marginLeft: '30px', marginTop: '20px' }} />
              <p style={{ fontFamily: 'inherit' }} className='ms-5 me-3'>Design is not just what it looks like and feels like. Design is how it works.Our focus extends beyond aesthetics to functionality and user experience, ensuring that our designs.</p>
              <h2 className='ms-5' style={{ fontFamily: 'serif', fontSize: '25px' }}>Carlos Rodriguez</h2>
            </div>
            <div data-aos="flip-down" style={{ width: '400px', height: '200px', marginLeft: '130px', backgroundColor: '#F5F5F5', borderRadius: '20px' }} className='border mt-5'>
              <ImQuotesLeft style={{ marginLeft: '30px', marginTop: '20px' }} />
              <p style={{ fontFamily: 'inherit' }} className='ms-5 me-3'>Creativity is intelligence having fun. We believe in unleashing the power of creativity to solve complex design challenges joyfully, delivering designs that inspire and delight.</p>
              <h2 className='ms-5' style={{ fontFamily: 'serif', fontSize: '25px' }}>Megan Thompson</h2>
            </div>

          </div>
        </div>
        <div ref={ouurServicesRef} style={{ width: '100%', height: '155vh', backgroundColor: '#F5F5F5', marginTop: '0px', overflow:'hidden'}}>
          <center>
            <h1 data-aos="fade-up" className='head1'>Our Services</h1>
            <h3 data-aos="fade-up" className='head2'>
              WE CREATE BEST PRODUCTS
            </h3>
          </center>
          <div>
            <div class="ag-format-container">
              <div data-aos="zoom-out" style={{ width: '100%' }} class="ag-courses_box">
                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center className='mt-2'>
                        Product and Model photography

                      </center>
                    </div>


                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title ">
                      <center className='mt-4'>
                        Digital Marketing

                      </center>
                    </div>


                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center>
                        Business Strategy Development

                      </center>
                    </div>


                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center className='mt-4'>
                        Satelite Media

                      </center>
                    </div>


                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center className='mt-4'>
                        Market Research

                      </center>
                    </div>


                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center className='mt-2'>
                        Web and Mobile App Development

                      </center>
                    </div>
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg">
                    </div>
                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center className='mt-4'>
                        Branding Graphics

                      </center>
                    </div>
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div style={{ color: ' #262626', fontWeight: 'lighter', fontFamily: '"Merriweather", serif' }} class="ag-courses-item_title">
                      <center className='mt-2'>
                        Product and Service Graphics

                      </center>
                    </div>


                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div  ref={contactRef} style={{ width: '100%', height: '120vh', backgroundColor: '#e6e6e6', marginTop: '-5px', overflow:'hidden' }}>
          <center>
            <h1 data-aos="fade-up" className='head1'>Contact Us</h1>
          </center>

          <div style={{ width: '100%', height: '100vh' }} className="row">
            <div className="col-lg-6 ">
              <div className='d-flex'>
                <IoCall style={{ fontSize: '30px', marginLeft: '80px' }} className='mt-1' />
                <h3 className='ms-3' style={{ fontFamily: 'initial' }}>Call Us</h3>
              </div>
              <h4 style={{ fontFamily: 'initial', marginLeft: '130px' }}>1 (234) 567-891, 1 (234) 987-654</h4>
              <div className='d-flex mt-3'>
                <IoIosMail style={{ fontSize: '30px', marginLeft: '80px' }} className='mt-1' />
                <h3 className='ms-3' style={{ fontFamily: 'initial' }}>E-mail</h3>
              </div>
              <h4 style={{ fontFamily: 'initial', marginLeft: '130px' }}>exmedia@gmail.com</h4>
              <div className='d-flex mt-3'>
                <FaLocationDot style={{ fontSize: '30px', marginLeft: '80px' }} className='mt-1' />
                <h3 className='ms-3' style={{ fontFamily: 'initial' }}>Location</h3>
              </div>
              <h4 style={{ fontFamily: 'initial', marginLeft: '130px' }}>Calicut, Kerala, India</h4>
              <div className='d-flex mt-3'>
                <FaClock style={{ fontSize: '30px', marginLeft: '80px' }} className='mt-1' />
                <h3 className='ms-3' style={{ fontFamily: 'initial' }}>Hours</h3>
              </div>
              <h4 style={{ fontFamily: 'initial', marginLeft: '130px' }}>Mon – Fri (10 am – 5 pm) <br /> Sat, Sun (Holidays) </h4>
            </div>
            <div  className='col-lg-6'>
              <img data-aos="fade-up-left" style={{width:'100%', opacity:'50%', height:'120vh', marginTop:'-225px', marginLeft:'24px'}} src={robo} alt="" />
            </div>

          </div>
        </div>
        <div style={{ width: '100%', height: '70vh', backgroundColor: '#F5F5F5', marginTop: '0px', overflow:'hidden' }}>
          <center>
            <h1 data-aos="fade-up" className='head1'>Our Clients</h1>
          </center>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='d-flex justify-content-evenly'>
            <FaAmazon className="icon" style={{ fontSize: '80px' }} />
            <FaMicrosoft className="icon" style={{ fontSize: '80px' }} />
            <BsApple className="icon" style={{ fontSize: '80px' }} />
            <FaSpotify className="icon" style={{ fontSize: '80px' }} />

          </div>
        </div>
        <div style={{ width: '100%', height: '30vh', backgroundColor: '#F5F5F5', marginTop: '0px' }}>
          <div class="footer-basic">
            <footer>
              <div class="social">
                <a href="https://wa.me/919656123466"><i class="icon ion-social-whatsapp"></i></a>
                <a href="https://www.instagram.com/@exmedia.co"><i class="icon ion-social-instagram"></i></a>
                <a href="#"><i class="icon ion-social-twitter"></i></a>
                <a href="#"><i class="icon ion-social-facebook"></i></a>
              </div>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About Us</a></li>
                <li class="list-inline-item"><a href="#">Contact</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>

              </ul>
              <p class="copyright">Ex-Media © 2024</p>

            </footer>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;
