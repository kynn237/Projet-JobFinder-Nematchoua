import React from 'react'
import { Link } from 'react-router-dom'

export default function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="card-media">
        <img src={job.img} alt={job.metier} />
      </div>

      <div className="card-body">
        <h3 className="job-title">{job.metier}</h3>
        <div className="job-sub">
          <span className="company">{job.entreprise}</span>
          <span className="city">{job.ville}</span>
        </div>

        <div className="job-meta">
          <div className="salary">{job.salaire.toLocaleString()} FCFA</div>
          <Link className="details" to={`/offres/${job.id}`}>détails →</Link>
        </div>
      </div>
    </article>
  )
}