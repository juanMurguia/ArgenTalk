import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Helmet from 'react-helmet'

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Syne:wght@500;600;700;800&display=swap';
link.rel = 'stylesheet';

document.head.appendChild(link);
document.head.querySelector('link[rel="icon"]').href = 'favicon.ico';
document.title = 'CheTalk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Helmet>
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "l1vm0bxsv5");
          `}
        </script>
      </Helmet>

      <App />
   
  </React.StrictMode>
);

reportWebVitals();
