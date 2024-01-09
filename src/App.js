
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('black');
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.body.style.backgroundColor = link === 'black' ? '#000' : '#bae3e8';

    // Memilih semua elemen dengan kelas .btn-nav dan mengatur warna teksnya
    const navLinks = document.querySelectorAll(".btn-nav");
    navLinks.forEach((navLink) => {
      navLink.style.color = link === 'black' ? '#bae3e8' : '#000';
    });

    // Memilih elemen .App-header dan mengatur latar belakangnya
    const appHeader = document.querySelector(".App-header");

    if (appHeader) {
      appHeader.style.backgroundColor = link === 'black' ? '#000' : '#fff';
      appHeader.style.transition = 'background-color 0.5s ease'; // Sesuaikan durasi dan jenis efek sesuai kebutuhan
      appHeader.style.backgroundColor = link === 'black' ? '#000' : '#hhh';
    }
    
  };

  // useEffect untuk memeriksa URL saat komponen dimuat
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'black' : 'white');
    document.body.style.backgroundColor = path === '/' ? '#000' : '#hhh';

    const navLinks = document.querySelectorAll(".btn-nav");
    navLinks.forEach((navLink) => {
      navLink.style.color = path === '/' ? '#fff' : '#000';
    });

    const appHeader = document.querySelector(".App-header");
    if (appHeader) {
      appHeader.style.backgroundColor = path === '/' ? '#000' : '#hhh';
    }
  }, [location.pathname]);

  return (
    <nav>
      <Link
        className={`btn-nav ${activeLink === 'black' ? 'active' : ''}`}
        to="/"
        onClick={() => handleLinkClick('black')}
      >
        About
      </Link>
      <Link
        className={`btn-nav ${activeLink === 'white' ? 'active' : ''}`}
        to="/white"
        onClick={() => handleLinkClick('white')}
      >
        Hobies
        
      </Link>
    </nav>
  );
};

const BlackPage = () => {
  return (
    <div className="container">
      <div className="black-page">
      <img src='https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/682/2023/10/28/FotoJet3-4035167890.jpg' className="App-logo" alt="logo" />
        <h2>Hi, Anjal di sini</h2>
        <p>Halo, nama saya Anjal Ahmad Maulana, saya seorang siswa ari SMK Negeri 6 Jember dengan jurusan Rekayasa Perangkat Lunak (RPL).
  Di sela-sela kegiatan akademis, saya memiliki minat khusus dalam seni bela diri, khususnya pencak silat. Saya percaya bahwa melalui pendidikan dan pencak silat, saya dapat terus mengembangkan potensi dan kontribusi positif bagi lingkungan sekitar."</p>
    </div>
    </div>
  );
};


const WhitePage = () => {
  return (
    <div className="container">
      <div className="white-page">
        <h2>Hobby Saya Memancing</h2>
        <img src='https://assets.kompasiana.com/items/album/2022/06/05/photo-by-jerseymancing-co-id-629c094ad2634521e12caaf3.png?t=o&v=300' className="App-logo" alt="logo" />
        <i className="fas fa-image"></i>
        <p>Saya seorang pecinta memancing. Dalam kesibukan sehari-hari, momen di tepi danau atau sungai adalah waktu berharga bagi saya. Memancing bukan hanya hobi, tapi juga kesempatan untuk bersatu dengan alam dan menikmati ketenangan. Setiap kali merasakan getaran di ujung tali pancing, saya merasa terhubung dengan keindahan alam, membuat hobi ini sangat berarti bagi saya.</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<BlackPage />} />
            <Route path="/white" element={<WhitePage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
