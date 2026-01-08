import React from 'react';
import { useParams } from 'react-router-dom';

// Simuler les jobs (même logique que dans Offres.jsx)
const jobs = new Array(24).fill(0).map((_, i) => ({
  id: i + 1,
  metier: ['Développeur','Designer','Chef de projet','Data Analyst'][i % 4] + ` ${i+1}`,
  ville: ['Douala','Yaoundé','Bafoussam','Dschang'][i % 4],
  entreprise: ['PhDL','TechCam','DevCo','DataLab'][i % 4],
  salaire: ((i % 5) + 1) * 50000,
  img: `https://picsum.photos/seed/job${i+1}/600/360`,
  description: `Description détaillée pour ${['Développeur','Designer','Chef de projet','Data Analyst'][i % 4]} ${i+1}. Missions incluant développement, design, gestion de projet, etc.`
}));

export default function JobDetail() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const job = jobs.find(j => j.id === parseInt(id)); // Trouve le job par ID

  const handleApply = () => {
    alert(`Candidature envoyée pour ${job.metier} chez ${job.entreprise} !`);
    // Ici, vous pourriez envoyer les données à une API ou ouvrir un formulaire
  };

  if (!job) {
    return <div className="content-container">Offre non trouvée.</div>;
  }

  return (
    <div className="content-container">
      <div className="job-detail">
        <img src={job.img} alt={job.metier} className="job-detail-img" />
        <h1>{job.metier}</h1>
        <p><strong>Entreprise :</strong> {job.entreprise}</p>
        <p><strong>Ville :</strong> {job.ville}</p>
        <p><strong>Salaire :</strong> {job.salaire} FCFA</p>
        <p><strong>Description :</strong> {job.description}</p>
        <button className="btn-primary" onClick={handleApply}>Postuler</button>
      </div>
    </div>
  );
}