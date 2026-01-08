// import React from 'react'
// import JobCard from '../components/JobCard'
// import './offres.css'

// const jobs = new Array(24).fill(0).map((_, i) => ({
//   id: i + 1,
//   metier: ['Développeur','Designer','Chef de projet','Data Analyst'][i % 4] + ` ${i+1}`,
//   ville: ['Douala','Yaoundé','Bafoussam','Dschang'][i % 4],
//   entreprise: ['PhDL','TechCam','DevCo','DataLab'][i % 4],
//   salaire: ((i % 5) + 1) * 50000,
//   img: `https://picsum.photos/seed/job${i+1}/600/360`
// }))

// export default function Offres() {
//   const scrollToFilters = (e) => {
//     e.preventDefault()
//     const el = document.getElementById('filters')
//     if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//   }

//   return (
//     <div className="content-container">
//       <main className="offers-page">
//         <section className="filters" id="filters">
//           <div className="filter-group">
//             <label>Salaire minimal</label>
//             <select defaultValue="">
//               <option value="">Tous</option>
//               <option>50 000 FCFA</option>
//               <option>100 000 FCFA</option>
//               <option>150 000 FCFA</option>
//             </select>
//           </div>

//           <div className="filter-group">
//             <label>Ville</label>
//             <select defaultValue="">
//               <option value="">Toutes</option>
//               <option>Douala</option>
//               <option>Yaoundé</option>
//               <option>Bafoussam</option>
//             </select>
//           </div>

//           <div className="filter-group">
//             <label>Métier</label>
//             <select defaultValue="">
//               <option value="">Tous</option>
//               <option>Développeur</option>
//               <option>Designer</option>
//               <option>Data Analyst</option>
//             </select>
//           </div>

//           <div className="filter-action">
//             <button className="btn-primary">Filtrer</button>
//           </div>
//         </section>

//         <section className="cards-grid" data-aos="fade-up" data-aos-duration="1000">
//           {jobs.map(j => (
//             <JobCard key={j.id} job={j} />
//           ))}
//         </section>

//         <a href="#filters" className="floating-search" onClick={scrollToFilters} aria-label="ouvrir recherche">
//           🔎
//         </a>
//       </main>
//     </div>
//   )
// }
import React, { useState } from 'react'
import JobCard from '../components/JobCard'
import './offres.css'

const jobs = new Array(24).fill(0).map((_, i) => ({
  id: i + 1,
  metier: ['Développeur','Designer','Chef de projet','Data Analyst'][i % 4] + ` ${i+1}`,
  ville: ['Douala','Yaoundé','Bafoussam','Dschang'][i % 4],
  entreprise: ['PhDL','TechCam','DevCo','DataLab'][i % 4],
  salaire: ((i % 5) + 1) * 50000,
  img: `https://picsum.photos/seed/job${i+1}/600/360`
}))

export default function Offres() {
  // États des filtres
  const [salary, setSalary] = useState('')
  const [city, setCity] = useState('')
  const [metier, setMetier] = useState('')

  const scrollToFilters = (e) => {
    e.preventDefault()
    const el = document.getElementById('filters')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Logique de filtrage
  const filteredJobs = jobs.filter(job => {
    const matchSalary = salary ? job.salaire >= Number(salary) : true
    const matchCity = city ? job.ville === city : true
    const matchMetier = metier ? job.metier.includes(metier) : true

    return matchSalary && matchCity && matchMetier
  })

  return (
    <div className="content-container">
      <main className="offers-page">

        {/* FILTRES */}
        <section className="filters" id="filters">
          <div className="filter-group">
            <label>Salaire minimal</label>
            <select value={salary} onChange={e => setSalary(e.target.value)}>
              <option value="">Tous</option>
              <option value="50000">50 000 FCFA</option>
              <option value="100000">100 000 FCFA</option>
              <option value="150000">150 000 FCFA</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Ville</label>
            <select value={city} onChange={e => setCity(e.target.value)}>
              <option value="">Toutes</option>
              <option>Douala</option>
              <option>Yaoundé</option>
              <option>Bafoussam</option>
              <option>Dschang</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Métier</label>
            <select value={metier} onChange={e => setMetier(e.target.value)}>
              <option value="">Tous</option>
              <option>Développeur</option>
              <option>Designer</option>
              <option>Chef de projet</option>
              <option>Data Analyst</option>
            </select>
          </div>

          <div className="filter-action">
            <button
              className="btn-primary"
              onClick={() => {
                setSalary('')
                setCity('')
                setMetier('')
              }}
            >
              Réinitialiser
            </button>
          </div>
        </section>

        {/* CARTES */}
        <section className="cards-grid" data-aos="fade-up" data-aos-duration="1000">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>
              Aucune offre trouvée
            </p>
          )}
        </section>

        {/* BOUTON FLOTTANT */}
        <a
          href="#filters"
          className="floating-search"
          onClick={scrollToFilters}
          aria-label="ouvrir recherche"
        >
          🔎
        </a>

      </main>
    </div>
  )
}
