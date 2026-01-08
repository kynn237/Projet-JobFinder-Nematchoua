                         
  import { useState, useEffect } from 'react'
  import heroBg from '../assets/Hero.jpg'
  import hero from '../assets/img2.jpg'
  import oip from '../assets/OIP.jpg'       
  export default function Home() {

  
   // const [count, setCount] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')//
    const [location, setLocation] = useState('')//
    //etats temoignages
  const [currentTestimonial, setCurrentTestimonial]=useState(0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      const testimonials =[
          {
          text: "j'ai utilise jobFinder pour ma recherche d'emploi a Douala et j'ai ete ravi par la facilite de navigation. Les offres etaient pertinentes et m'ont aide a trouver le poste ideal",
          author:"KAMGA PAUL"
          },
          {
          text: "j'ai trouve jobFinder extremement utile  pour trouver un emploi. Les avis des utilisateurs sont tres precis et m'ont permis de faire un choix eclaire",
          author:"KAMENI AMELI"
          },
          {                                                                                                                                                                                             
          text: "Plateforme exceptionelle! J'ai decroche un poste en moins d'une semaine grace aux offres ciblees",
          author:"MARTIN DUBOIS"
          },
          {
          text: "En tant que designer, j'ai trouve des opportunites que je n'aurais jamais decouvertes ailleurs. jobFinder m'a connecte avec des entreprises innovantes.",
          author:"SARAH LEROY"
          },
          {
          text: "Le service client est reactif et les offres sont toujours a jour. J'ai ete contacte par trois recruteurs dans la premiere semaine. Excellent outil",
          author:"THOMAS DURAND"
          }
      ]
  
      useEffect(() => {
        const id = setInterval(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(id)
      }, [testimonials.length])
  
      const handleSearch = (e) =>{
        e.preventDefault()
        console.log('Recherche:', searchTerm, 'a', location)                                    
        //nous ajouterons la recherche reelle ici plutard
      }
  
      const nextTestimonial = ()=>{
        setCurrentTestimonial((prev)=>(prev+1) % testimonials.length);                
      };
      const prevTestimonial = () =>{
        setCurrentTestimonial((prev) => (prev-1 +testimonials.length) % testimonials.length);
      };   
      return(
        <>
      <div className='hero-container'>
        <div className='hero'>
          <img src={heroBg} alt="Background" className='hero-bg'/>
        </div>
        <div className='hero-content'>
          <h1>🔎Bienvenue sur <span>JobFinder</span></h1>
          <p>Faciliter votre recherche d'emploi c'est notre mission✨</p>
          <form action="" onSubmit={handleSearch} className='search-form'>
            
              <select name="" id="" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}>
                <option value="" disabled hidden>choisir un metier</option>
                <option value="developpeur">developpeur</option>
                <option value="designer">designer</option>
                <option value="cybersecurite">Cybersecurite</option>
              </select>
              <select name="" id="" value={location} onChange={(e)=>setLocation(e.target.value)}>
                <option value="" disabled hidden>choisir une ville</option>
                <option value="paris">Paris</option>
                <option value="toronto">Toronto</option>
                <option value="yaounde">Yaounde</option>
              </select>
              <button type='submit' className='search-button'>Rechercher</button>
            
          </form>
        </div>
        
      </div>
      
      <div className='content-container'>
        <section className='about-section' id='apropos' data-aos="fade-up" data-aos-duration="1000">
          <h2>A propos</h2>
          <div className='about-content'>
            <div className='about-text'>
              <h3>Votre succes professionnel commence ici</h3>
              <p>📍 Chez JobFinder, nous croyons que chaque talent merite de trouver sa place.
                Notre plateforme connecte les chercheurs d'emplois aux meilleurs opportunites
                avec simplicite et efficacite
              </p>
              <ul>
                <li>✅Offres actualisees quotidiennement</li>
                <li>✅Accompagnement personalise</li>
                <li>✅Des centaines d'entreprises partenaires</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              </ul>
              <div className='about-buttons'>
                <a className='primary'>En savoir plus</a>
                <a className='secondary'>Nous contacter</a>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              </div>
            </div>
            <div className='about-images'>
              <img src={heroBg} alt="" className='overlay'/> 
              <img src={hero} alt="" className='main'/>

            </div>          
          </div>
      </section> 
     <section className='testimonials-wrapper' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <h2>Temoignages</h2>
    <div className='testimonials-section'>
      <button className='nav-btn left-btn' onClick={prevTestimonial}>&lt;</button>

      <div className='testimonial-list'>
        {[0, 1].map((offset) => {
          const index = (currentTestimonial + offset) % testimonials.length;
          const t = testimonials[index];
          return (
            <div className='testimonial-card' key={index}>
              <p className='testimonial-text'>"{t.text}"</p>
              <hr />
              <div className='testimonial-author'>
                <img src={oip} alt={`Photo de ${t.author}`} className='author-avatar' />
                <span>— {t.author}</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className='nav-btn right-btn' onClick={nextTestimonial}>&gt;</button>
    </div>
  </section>
  </div>
</>
)
}