import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css/animate.css';
library.add(fab);

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDonations, setShowDonations] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDonations = () => {
    setShowDonations(!showDonations);
  }

  const toggleContacts = () => {
    setShowContact(!showContact);
  }
  

  return (
    <header className="bg-slate-900 px-4 py-4 md:px-8 md:py-4 w-full">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white text-xl font-bold pointer-events-none">
          <span className='text-cyan-300'>Che</span>Talk
        </h1>

        {/* Mobile Menu*/}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="text-xl svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-4 gap-12">
          <li className="group block list-none w-auto px-6 hover:text-cyan-200" onMouseEnter={() => setShowContact(true)} onMouseLeave={() => setShowContact(false)}>
            <a href="#" className="text-white text-xl md:text-base py-2 flex justify-between items-center ">Contacto  <span class="arrow-down"></span></a>
            {showContact && (
            <div className="absolute drop-shadow-xl rounded-md mr-12 z-40  bg-slate-900 p-8 flex flex-row align-middle justify-items-center items-center gap-6">
                <ul className="flex gap-8">
                  <li>
                    <a href="https://www.instagram.com/juanmurguiaa/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                      <FontAwesomeIcon icon={['fab', 'instagram']} /> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/juan-cruz-murguia/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                  </li>
                </ul>
            </div>
            )}
          </li>
          

         
          <li className="group block list-none w-auto px-6"  onMouseEnter={() => setShowDonations(true)} onMouseLeave={() => setShowDonations(false)}> 
           <a href="#" className="text-white text-xl md:text-base py-2 flex justify-between items-center">Apoya este proyecto <span class="arrow-down"></span></a>
           {showDonations && (
        <div className="absolute drop-shadow-xl rounded-md mr-12 z-40  bg-slate-900 p-8 flex flex-col align-middle justify-items-center items-center gap-6">
          <div id="paypal">
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="9R5SJCP3YGH8W" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img alt="Donate with PayPal button" border="0" src="https://www.paypal.com/en_AR/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>

          <div id="cafecito">
            <a href='https://cafecito.app/juanmurguia' rel='noopener' target='_blank'>
              <img
                srcSet='https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x'
                src='https://cdn.cafecito.app/imgs/buttons/button_6.png'
                alt='Invitame un café en cafecito.app'
              />
            </a>
          </div>
        </div>
      )}
          </li>
          
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-slate-900 pt-5 p-2 transition-transform`}>
        <a href="#" onClick={toggleContacts} className="block text-white text-xl py-2 flex justify-between items-center bg-slate-900 ">Contacto  <span class="arrow-down"></span></a>
        <div className={`lg:hidden ${showContact ? 'block' : 'hidden'} py-4 flex flex-col align-middle justify-items-center items-center gap-6`}>
        <ul className="flex gap-24">
                  <li>
                    <a href="https://www.instagram.com/juanmurguiaa/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                      <FontAwesomeIcon icon={['fab', 'instagram']} /> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/juan-cruz-murguia/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-cyan-500">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                  </li>
                </ul>
        </div>
        <hr className="border-slate-600" />
        <a href="#" onClick={toggleDonations} className="block text-white text-xl py-2 flex justify-between items-center">Apoya este proyecto <span class="arrow-down"></span></a>

      
        <div className={`lg:hidden ${showDonations ? 'block' : 'hidden'} bg-slate-900 py-4 flex flex-col align-middle justify-items-center items-center gap-6`}>

            <div id="paypal">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="9R5SJCP3YGH8W" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="Donate with PayPal button" border="0" src="https://www.paypal.com/en_AR/i/scr/pixel.gif" width="1" height="1" />
             </form>
            </div>

            <div id="cafecito">
            <a href='https://cafecito.app/juanmurguia' rel='noopener' target='_blank'><img srcSet='https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_6.png' alt='Invitame un café en cafecito.app' /></a>
            </div>
           
        </div>
      </div>
    </header>
  );
};

export default Header;
