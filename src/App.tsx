import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
          <div>
      <link href="./index.css" rel="stylesheet" />

      <div className="desktop-login-container">
        <div className="desktop-login-desktop-login">
          <div className="desktop-login-frame1"></div>
          <img
            src="../public/rectangle.png"
            alt="Rectangle116"
            className="desktop-login-rectangle1"
          />
          <div className="desktop-login-left">
            <span className="desktop-login-text"><span>Email Address</span></span>
            <div className="desktop-login-login-btn">
              <span className="desktop-login-text02"><span>Buyer</span></span>
            </div>
            <div className="desktop-login-login-btn1">
              <span className="desktop-login-text04"><span>Seller</span></span>
            </div>
            <span className="desktop-login-text06">
              <span>Don’t have an account ?</span>
            </span>
            <span className="desktop-login-text08">
              <span>Terms &amp; Policy</span>
            </span>
            <span className="desktop-login-text10"><span>Register Now</span></span>
            <div className="desktop-login-frame5"></div>
            <span className="desktop-login-text12"><span>&gt;&gt;</span></span>
            <span className="desktop-login-text14">
              <span className="desktop-login-text15">B</span>
              <span className="desktop-login-text16">it</span>
              <span>Verse</span>
            </span>
            <div className="desktop-login-frame3"></div>
            <span className="desktop-login-text18"><span>Password</span></span>
            <div className="desktop-login-frame4"></div>
            <div className="desktop-login-frame6">
              <span className="desktop-login-text20"><span>Sign In</span></span>
            </div>
          </div>
          <div className="desktop-login-right">
            <img
              src="public/external/image1913-7zzt-800h.png"
              alt="image1913"
              className="desktop-login-image1"
            />
            <div className="desktop-login-frame2"></div>
            <span className="desktop-login-text22"><span>&gt;&gt;</span></span>
            <span className="desktop-login-text24"><span>BitVerse</span></span>
            <span className="desktop-login-text26">
              <span>
                <span>"Unlock a World of Choices: Your Gateway</span>
                <br />
                <span>to Endless Shopping Delights!"</span>
              </span>
            </span>
            <span className="desktop-login-text31">
              <span>Online Ordering Platform</span>
            </span>
          </div>
          {/* <img
            src="../public/"
            alt="Vector1252"
            className="desktop-login-vector1"
          /> */}
          <svg width='82' height='622' viewBox='0 0 82 622' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_d_25_2)'>
            <path d='M1 12L59 314.5L1 610V312V12Z' fill='white'/>
            </g>
            <defs>
            <filter id='filter0_d_25_2' x='0' y='0' width='82' height='622' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
            <feFlood flood-opacity='0' result='BackgroundImageFix'/>
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
            <feOffset dx='11'/>
            <feGaussianBlur stdDeviation='6'/>
            <feComposite in2='hardAlpha' operator='out'/>
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_25_2'/>
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_25_2' result='shape'/>
            </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
