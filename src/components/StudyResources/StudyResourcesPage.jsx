import  { useState } from 'react';
import { studyResources } from '../../data/resourcesData';
import './StudyResources.css';
import { FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';

const StudyResourcesPage = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="resources-container">
      <div className="resources-header">
        <h1>Curated Learning Paths</h1>
        <p>Master in-demand skills with expert-led video courses from the best creators.</p>
      </div>

      <div className="accordion-container">
        {studyResources.map((resource) => {
          const isOpen = resource.id === openId;

          return (
            <div key={resource.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(resource.id)}>
                <span className="header-icon">{resource.icon}</span>
                <span className="header-title">{resource.domain}</span>
                <span className="toggle-icon">
                  <FaChevronDown />
                </span>
              </button>

              <div className="accordion-content">
                {resource.playlists.map((playlist) => (
                  <div key={playlist.id} className="resource-card">
                    {playlist.thumbnail && (
                      <div className="thumbnail-container">
                        <img src={playlist.thumbnail} alt={`${playlist.title} thumbnail`} />
                      </div>
                    )}
                    <div className="card-details">
                      <h3>{playlist.title}</h3>
                      <p className="creator">{playlist.creator}</p>
                      <p className="description">{playlist.description}</p>
                      <a href={playlist.url} target="_blank" rel="noopener noreferrer" className="youtube-btn">
                        Watch on YouTube
                        <span className="btn-icon"><FaExternalLinkAlt size={12} /></span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyResourcesPage;