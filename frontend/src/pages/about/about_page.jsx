import React from 'react';
import 'frontend/src/pages/about/about_page.css';

const Header = () => (
  <header>
    <div className="profileLogo"> 
      <img src="frontend/src/pages/about/assets/Images/Logo_2.png" alt="Company logo" width="200 px" height="200 px"/>
    </div>
    {/* other elements */}
  </header>
);

const MainContent = () => (
  <section className="mainContent">
    {/* Section content goes here */}
  </section>
);

const Footer = () => (
  <footer>
    {/* Footer content */}
  </footer>
);

const AboutUsPage = () => (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default AboutUsPage;
