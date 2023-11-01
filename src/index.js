import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css"
import hamberger from './images/hamberger.svg'
import times from './images/times.svg'
import logo from './images/logo.svg'
import man from './images/man.png'
import man2 from './images/man.png'
import websiteSvg from './images/website.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import pintrest from './images/pintrest.svg'
import brush from './images/brush.svg'
import code from './images/code.svg'
import bag from './images/bag.svg'
import desktop from './images/desktop.svg'
import media from './images/media.svg'
import phone from './images/phone.svg'
import lady from './images/lady.png'
import ph1 from './images/ph-1.png'
import aph1 from './images/article-ph-1.png'
import ph2 from './images/ph-2.png'
import map from './images/map.svg'
import msg from './images/msg.svg'
import insta from './images/instagram.svg'

const App = () => {
  return (
    <>

      <div className="site-main-wrapper">
        <button className="hamberger">
          <img src={hamberger} alt="" />
        </button>

        <div className="mobile-nav">
          <button className="times"><img src={times} alt="" /></button>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <header>
          <div className="container">
            <nav id="main-nav" className="flex items-center justify-between">
              <div className="left flex items-center">
                <div className="branding">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <a href="#">Home</a>
                  <a href="#about">About</a>
                  <a href="#services">Services</a>
                  <a href="#work">Work</a>
                  <a href="#blog">Blog</a>
                </div>
              </div>
              <div className="right">
                <button className="btn btn-primary">Contact</button>
              </div>
            </nav>
            <div className="hero flex items-center justify-between">
              <div className="left flex-1 flex justify-center">
                <img src={man} alt="" />
              </div>
              <div className="right flex-1">
                <h6>Johnathan Vics</h6>
                <h1>I’m a Creative <span>Designer</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
                  laboris
                  nisi ut aliquip ex ea commodo consequat</p>
                <div>
                  <button className="btn btn-secondary">DOWNLOAD CV</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="about">
          <div className="container flex items-center about-inner-wrap">
            <div className="flex-1">
              <img className="about-me-img" src={man2} alt="" />
            </div>
            <div className="flex-1 right">
              <h1>About <span>Me</span></h1>
              <h3>Hello! i’m Johnathan Vics.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.

                Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat</p>
              <div className="social">
                <a href="#"><img src={websiteSvg} alt="" /></a>
                <a href="https://www.facebook.com/codersgyan"><img src={facebook} alt="" /></a>
                <a href="https://twitter.com/CoderGyan"> <img src={twitter} alt="" /></a>
                <a href="#"> <img src={pintrest} alt="" /></a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <h1 className="section-heading"><span>Our </span>Services</h1>
            <p>We provide high standar clean website for your business solutions</p>
            <div className="card-wrapper">
              <div className="card">
                <img src={brush} alt="" />
                <h2>Graphic Design</h2>
                <p>There are many variations of passages of but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className="card">
                <img src={code} alt="" />
                <h2>Graphic Design</h2>
                <p>There are many variations of passages of but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className="card">
                <img src={bag} alt="" />
                <h2>Graphic Design</h2>
                <p>There are many variations of passages of but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className="card">
                <img src={desktop} alt="" />
                <h2>Graphic Design</h2>
                <p>There are many variations of passages of but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className="card">
                <img src={media} alt="" />
                <h2>Graphic Design</h2>
                <p>There are many variations of passages of but the majority have suffered alteration in some
                  form.
                </p>
              </div>
              <div className="card">
                <img src={phone} alt="" />
                <h2>Graphic Design</h2>
                <p>There are many variations of passages of but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="freelancer">
          <h1>I Am Available For Freelancer.</h1>
          <p>We provide high standar clean website for your business solutions</p>
          <button className="btn btn-primary">Download CV</button>
        </section>
        <section className="reviews">
          <div className="container">
            <h1 className="section-heading"><span>Our</span> Client</h1>
            <p>We provide high standar clean website for your business solutions</p>
            <div className="slider">
              <div className="slide">
                <img src={lady} alt="" />
                <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum"</p>
                <span>- John Doel, Company ABC</span>
              </div>
              <div className="slide">
                <img src={lady} alt="" />
                <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum"</p>
                <span>- John Doel, Company ABC</span>
              </div>
              <div className="slide">
                <img src={lady} alt="" />
                <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum"</p>
                <span>- John Doel, Company ABC</span>
              </div>
              <div className="slide">
                <img src={lady} alt="" />

                <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum"</p>
                <span>- John Doel, Company ABC</span>
              </div>
            </div>
            <div className="slider-dots"></div>
          </div>
        </section>

        <section id="work" className="work">
          <div className="container">
            <h1 className="section-heading"><span>Our</span> Works</h1>
            <p>We provide high standar clean website for your business solutions</p>

            <div className="card-wrapper">
              <div className="card">
                <div className="overlay">
                  <span>Category</span>
                  <a href="#">Web development</a>
                </div>
                <img src={ph1} alt="" />
              </div>
              <div className="card">
                <div className="overlay">
                  <span>Category</span>
                  <a href="#">Web development</a>
                </div>
                <img src={ph1} alt="" />
              </div>
              <div className="card">
                <div className="overlay">
                  <span>Category</span>
                  <a href="#">Web development</a>
                </div>
                <img src={ph1} alt="" />
              </div>
              <div className="card">
                <div className="overlay">
                  <span>Category</span>
                  <a href="#">Web development</a>
                </div>
                <img src={ph1} alt="" />
              </div>
              <div className="card">
                <div className="overlay">
                  <span>Category</span>
                  <a href="#">Web development</a>
                </div>
                <img src={ph1} alt="" />
              </div>
              <div className="card">
                <div className="overlay">
                  <span>Category</span>
                  <a href="#">Web development</a>
                </div>
                <img src={ph1} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="blog" className="blog">
          <div className="container">
            <h1 className="section-heading"><span>Our</span> Blog</h1>
            <p>We provide high standar clean website for your business solutions</p>

            <div className="card-wrapper">
              <div className="card">
                <div className="img-wrapper">
                  <img src={aph1} alt="" />
                </div>
                <div className="card-content">
                  <a href="#">
                    <h1>Occusamus et iusto odio</h1>
                  </a>
                  <span>May 12, 2017</span>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt
                    mollit anim id est laborum.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="card">
                <div className="img-wrapper">
                  <img src={aph1} alt="" />
                </div>
                <div className="card-content">
                  <a href="#">
                    <h1>Occusamus et iusto odio</h1>
                  </a>
                  <span>May 12, 2017</span>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt
                    mollit anim id est laborum.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="card">
                <div className="img-wrapper">
                  <img src={aph1} alt="" />
                </div>
                <div className="card-content">
                  <a href="#">
                    <h1>Occusamus et iusto odio</h1>
                  </a>
                  <span>May 12, 2017</span>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt
                    mollit anim id est laborum.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <h1 className="section-heading">Contact <span>Us</span></h1>
            <p>We provide high standar clean website for your business solutions</p>
            <div className="card-wrapper">
              <div className="card">
                <img src={ph2} alt="" />
                <h1>Call Us On</h1>
                <h6>+985 123 7856</h6>
              </div>
              <div className="card">
                <img src={msg} alt="" />
                <h1>Email Us At</h1>
                <h6>support@companyname.com</h6>
              </div>
              <div className="card">
                <img src={map} alt="" />
                <h1>Visit Office</h1>
                <h6>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</h6>
              </div>

            </div>

            <form action="">
              <div className="input-wrap">
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder="Your Email *" />
              </div>
              <div className="input-wrap-2">
                <input type="text" placeholder="Your Subject..." />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message..."></textarea>
              </div>
              <div className="btn-wrapper">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </section>
        <footer>
          <img className="footer-logo" src="./images/logo-2.svg" alt="" />
          <div className="footer-socials">
            <a href="#"><img src={websiteSvg} alt="" /></a>
            <a href="https://www.facebook.com/codersgyan"><img src={facebook} alt="" /></a>
            <a href="https://twitter.com/CoderGyan"> <img src={twitter} alt="" /></a>
            <a href="#"> <img src={pintrest} alt="" /></a>
            <a href="https://www.instagram.com/codersgyan/"> <img src={insta} alt="" /></a>
          </div>
          <div className="copyright">
            Copyright 2020 © See
          </div>
        </footer>
      </div></>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

