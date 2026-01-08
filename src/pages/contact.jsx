// export default function Contact(){
//     return <div className="content-container"><div>Bienvenue sur la page de contact</div></div>
// }
import React, { useState } from 'react';
import imgContact from '../assets/img2.jpg'; // Votre image de bureau unique

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', telephone: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='content-container'>
      <section className='jf-contact-section' data-aos="fade-up">
        
        <div className='jf-contact-header'>
          <div className='jf-badge-blue'>Contact Us</div>
          <p>
            Une question sur une offre ? Besoin d'aide pour votre compte ?<br />
            <span className='jf-text-blue'>JobFinder - Votre futur commence ici</span>
          </p>
        </div>

        <div className='jf-contact-grid'>
          {/* Formulaire à Gauche */}
          <div className='jf-contact-form-container'>
            <form className='jf-form'>
              <div className='jf-form-row'>
                <div className='jf-input-group'>
                  <label>NOM</label>
                  <input type="text" name="nom" onChange={handleChange} />
                </div>
                <div className='jf-input-group'>
                  <label>PRENOM</label>
                  <input type="text" name="prenom" onChange={handleChange} />
                </div>
              </div>

              <div className='jf-form-row'>
                <div className='jf-input-group'>
                  <label>EMAIL</label>
                  <input type="email" name="email" onChange={handleChange} />
                </div>
                <div className='jf-input-group'>
                  <label>TELEPHONE</label>
                  <input type="tel" name="telephone" onChange={handleChange} />
                </div>
              </div>

              <div className='jf-input-group full-width'>
                <label>DONNEZ UN AVIS</label>
                <textarea name="message" rows="6" onChange={handleChange}></textarea>
              </div>

              <button type="submit" className='jf-btn-submit'>Envoyer</button>
            </form>
          </div>

          {/* UNE SEULE IMAGE à Droite */}
          <div className='jf-contact-image-container'>
              <div className='jf-single-image-wrapper'>
                <img src={imgContact} alt="JobFinder Office" className='jf-contact-img' />
                <div className="jf-star">⭐</div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;