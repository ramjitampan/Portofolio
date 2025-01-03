import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hellowak.css';
import './animations.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div className="App">
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <img src="./tokiisaki_kurumi.jpg" alt="sidebar" style={{ width: '100%' }} />
        <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black" data-aos="fade-right">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black" data-aos="fade-right">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </a>
        <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black" data-aos="fade-right">
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>PHOTOS</p>
        </a>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black" data-aos="fade-right">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </a>
      </nav>

      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href="#" className="w3-bar-item w3-button" style={{ width: '25%' }} data-aos="fade-down">HOME</a>
          <a href="#about" className="w3-bar-item w3-button" style={{ width: '25%' }} data-aos="fade-down">ABOUT</a>
          <a href="#photos" className="w3-bar-item w3-button" style={{ width: '25%' }} data-aos="fade-down">PHOTOS</a>
          <a href="#contact" className="w3-bar-item w3-button" style={{ width: '25%' }} data-aos="fade-down">CONTACT</a>
        </div>
      </div>

      <div className="w3-padding-large" id="main" style={{ backgroundColor: '#000', color: '#fff' }}>
        <header className="w3-container w3-padding-32 w3-center w3-black" id="home" data-aos="fade-up">
          <h1 className="w3-jumbo"><span className="w3-hide-small">Namaku</span> Ramzy Junfaris</h1>
          <p>Desain grafis and Web Designer.</p>
          <img src="/Ramzyganteng.png" alt="boy" className="w3-image" style={{ width: '100%', height: 'auto' }} />
        </header>

        <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about" data-aos="fade-up">
          <h2 className="w3-text-light-grey">Tentang Saya</h2>
          <hr style={{ width: '200px' }} className="w3-opacity" />
          <p>Ramzi Junfaris adalah seorang mahasiswa yang dikenal karena minat dan keahliannya dalam bidang coding,
            desain grafis, dan fotografi. Sejak awal, Ramzi menunjukkan ketertarikan yang besar terhadap teknologi dan seni,
            yang mendorongnya untuk mengeksplorasi dan mengembangkan keterampilannya dalam berbagai aspek digital.</p>
          <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
          <p className="w3-wide">Photography</p>
          <div className="w3-white">
            <div className="w3-dark-grey" style={{ height: '28px', width: '40%' }}></div>
          </div>
          <p className="w3-wide">Web Design</p>
          <div className="w3-white">
            <div className="w3-dark-grey" style={{ height: '28px', width: '65%' }}></div>
          </div>
          <p className="w3-wide">Photoshop</p>
          <div className="w3-white">
            <div className="w3-dark-grey" style={{ height: '28px', width: '80%' }}></div>
          </div>
          <br />
          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <i className="fa fa-download"></i> LEBIH LENGKAPNYA
          </button>
        </div>

        <div className="gallery-container" data-aos="fade-up">
          <div className="gallery">
            <img src="/SKILL ISU.png" alt="Design 1" className="gallery-item" data-aos="zoom-in" />
            <img src="/revamp fami x ramzy.png" alt="Design 2" className="gallery-item" data-aos="zoom-in" />
            <img src="/Brian Makmur.PNG" alt="Design 3" className="gallery-item" data-aos="zoom-in" />
            <img src="/SUNSET.png" alt="Design 4" className="gallery-item" data-aos="zoom-in" />
            <img src="/SUNSET_UNP.png" alt="Design Square 1" className="gallery-item" data-aos="zoom-in" />
            <img src="/fahmix andri.png" alt="Design Square 2" className="gallery-item" data-aos="zoom-in" />
          </div>
        </div>

        <h3 className="w3-padding-24 w3-text-light-grey" data-aos="fade-left">CEES AWAAK</h3>
        <div className="profiles" data-aos="fade-right">
          <div className="profile" data-aos="zoom-in">
            <img src="/Brian.png" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">Brian Makmur.</span> THE KING OF MAGE</p>
            <p>HERO MASTERY XAVIER</p>
          </div>
          <div className="profile" data-aos="zoom-in">
            <img src="/apip.png" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">APIP</span> THE HIGH MACRO MICRO.</p>
            <p>HERO MASTERY ALUCARD & SUN.</p>
          </div>
          <div className="profile" data-aos="zoom-in">
            <img src="/RESTU2.png" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">RESTUTU</span> MANY YOU HAVE THE GREAT JUNGLER EXPE?</p>
            <p>HERO MASTERY BANE</p>
          </div>
          <div className="profile" data-aos="zoom-in">
            <img src="/agil.jpg" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">ZUPERGILZ</span> THE KING OF THE KING.</p>
            <p>HERO MASTERY LING</p>
          </div>
          <div className="profile" data-aos="zoom-in">
            <img src="/FAHMI.png" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">FAHMI</span> THE GREAT MATILDA.</p>
            <p>HERO MASTERY MATHILDA</p>
          </div>
          <div className="profile" data-aos="zoom-in">
            <img src="/ilham.png" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">ILHAM</span> THE GOAT OF FHANY.</p>
            <p>HERO MASTERY FHANY</p>
          </div>
          <div className="profile" data-aos="zoom-in">
            <img src="/andri.jpg" alt="Avatar" className="w3-left w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">Andri</span> THE KING OF MARKSMAN.</p>
            <p>HERO MASTERY BEATRIX</p>
          </div>
        </div>
      </div>

      <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge" id="foot" style={{ backgroundColor: '#000', color: '#fff' }}>
        <a href="#"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
        <a href="https://www.instagram.com/hamonangan.rz"><i className="fa fa-instagram w3-hover-opacity"></i></a>
        <a href="https://id.pinterest.com/junfarisramji/"><i className="fa fa-pinterest-p w3-hover-opacity"></i></a>
        <a href="https://x.com/junfafariz"><i className="fa fa-twitter w3-hover-opacity"></i></a>
        <p className="w3-medium">Copyright © <a href="https://github.com/ramjitampan" target="_blank" className="w3-hover-text-green">Ramzyganteng</a></p>
      </footer>
    </div>
  );
}

export default App;
