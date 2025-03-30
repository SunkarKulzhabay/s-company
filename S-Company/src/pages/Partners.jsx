import React from 'react';
import './partners.css'; // Предполагается, что вы создадите стили

// Пример данных о партнерах (можно заменить на ваши данные)
const partnersData = [
  { name: 'Partner 1', logo: 'path/to/partner1-logo.png' },
  { name: 'Partner 2', logo: 'path/to/partner2-logo.png' },
  { name: 'Partner 3', logo: 'path/to/partner3-logo.png' },
];

const Partners = () => {
  return (
    <div className="partners-container">
      <h2>Наши партнеры</h2>
      <div className="partners-list">
        {partnersData.map((partner, index) => (
          <div key={index} className="partner-item">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
            />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;