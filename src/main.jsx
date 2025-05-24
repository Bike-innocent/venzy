import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Your global styles (Tailwind base)
import './index.css';

// Template styles (from src/assets/css/)
import './assets/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/LineIcons.3.0.css';
import './assets/css/tiny-slider.css';
import './assets/css/glightbox.min.css';
// import './assets/css/main.css';
import './assets/css/main2.css';
//  import './assets/js/bootstrap.min.js';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
