import React from "react";
import hero from '../assets/img2.jpg';
export default function Footer() {
    return(
        <footer className='site-footer'>
        <div className='footer-top'>
          <div className='footer-brand'>
            <div className='brand-name'>🔎JobFinder</div>
            <p>Nous connectons les talents aux meilleures opportunités.</p>
          </div>

          <div className='footer-links'>
            <h4>Navigation</h4>
            <ul>
              <li><a href='/'>Accueil</a></li>
              <li><a href='/#apropos'>A propos</a></li>
              <li><a href='/offres'>Offres</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>

          <div className='footer-contact'>
            <h4>Contact</h4>
            <ul>
              <li>📍 Yaoundé, Cameroun</li>
              <li>✉️ contact@jobfinder.com</li>
              <li>📞 +237 657 665 668</li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom'>
          <span>© {new Date().getFullYear()} JobFinder. Tous droits réservés.</span>
          <div className='footer-legal'>
            <a href='#'>Confidentialité</a>
            <a href='#'>Termes</a>
          </div>
        </div>
      </footer>
    )
}