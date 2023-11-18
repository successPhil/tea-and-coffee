import React from 'react';
import '../css/DetailedView.css';

export default function DetailedView({ selectedTea }) {
  return (
    <div className="detailed-view-page">
        <div className='detailed-view'>
            <div className='detail-view-main-image'>
                <img src={selectedTea.image} alt={selectedTea.name} />
                <h2>{selectedTea.name}</h2>
                <p><strong>Origin:</strong> {selectedTea.origin}</p>
                <p><strong>Caffeine Level:</strong> {selectedTea.caffeineLevel}</p>
                <p><strong>Caffeine:</strong> {selectedTea.caffeine}</p>
            </div>
            <div className='detail-view-info'>
                <h1>{selectedTea.name}</h1>
                <p><strong>Description:</strong> {selectedTea.description}</p>
                <p><strong>Color Description:</strong> {selectedTea.colorDescription}</p>
                <p><strong>Taste Description:</strong> {selectedTea.tasteDescription}</p>
            </div>
        </div>
      
      <h1 className='detail-view-types'>Types of {selectedTea.name}</h1>
      {selectedTea.types && (
        <div>
          {Object.values(selectedTea.types).map((tea, index) => (
            <div className='detailed-view' key={index}>
                <div className='detail-view-main-image'>
                <img src={tea.image} alt={tea.name} />
                <h2>{tea.name}</h2>
                <p><strong>Origin:</strong> {tea.origin}</p>
                <p><strong>Caffeine Level:</strong> {tea.caffeineLevel}</p>
                <p><strong>Caffeine:</strong> {tea.caffeine}</p>
            </div>
            <div className='detail-view-info'>
                <h1>{tea.name}</h1>
                <p><strong>Description:</strong> {tea.description}</p>
                <p><strong>Color Description:</strong> {tea.colorDescription}</p>
                <p><strong>Taste Description:</strong> {tea.tasteDescription}</p>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
