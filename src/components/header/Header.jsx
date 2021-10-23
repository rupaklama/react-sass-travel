import { useState } from 'react';

const Header = ({ children, heading, paragraph }) => {
  const [state] = useState({
    video: './assets/videos/header.mp4',
    poster: './assets/images/screen.png',
    logo: './assets/images/logo.png',
  });

  const { video, poster, logo } = state;

  return (
    <div className='header'>
      <div className='logo-container'>
        <div className='header-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>

      <div className='header-video'>
        <video src={video} autoPlay loop muted poster={poster}></video>
      </div>
      <div className='header-contents'>
        <div className='container'>
          <div className='header-contents-text'>
            <div className='header-contents-text-child'>
              <h1 className='header-contents-text-child-h1'>{heading}</h1>
              <p className='header-contents-text-child-p'>{paragraph}</p>
              <div className='header-contents-text-child-link'>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
