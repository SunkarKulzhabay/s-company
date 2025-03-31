// src/pages/Partners.jsx
import React from 'react';
import "../CSS/Partners.css"; // Или абсолютный путь
 // Убедитесь, что стили находятся в src/CSS/

const partnersData = [
  {
    name: 'Thurson',
    logo: '/Partners/Турсон.svg',
    description:
      'Thurson — бренд, основанный в 2010 году, известен своими инновационными решениями в сфере напитков. Их миссия — вдохновлять людей на новые вкусовые открытия.',
  },
  {
    name: 'Localute',
    logo: '/Partners/Localute.jpg',
    description:
      'Localute — местная компания, начавшая с небольшого производства в 2015 году. Они специализируются на экологичных продуктах и поддержке местных фермеров.',
  },
  {
    name: 'Lemonadoff',
    logo: '/Partners/lemonadoff.png',
    description:
      'Lemonadoff появился в 2018 году как стартап, производящий натуральные лимонады. Сегодня это популярный бренд с акцентом на здоровье и свежесть.',
  },
  {
    name: 'MacCoffee',
    logo: '/Partners/logo MacCoffee.svg',
    description:
      'MacCoffee — мировой лидер в производстве растворимого кофе с 1990-х годов. Их продукция известна своим качеством и доступностью по всему миру.',
  },
];

const Partners = () => {
  return (
    <div className="partners-fullscreen">
      <h1 className="partners-title">Наши партнеры</h1>
      <div className="partners-grid">
        {partnersData.map((partner, index) => (
          <div key={index} className="partner-card">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
            />
            <h3>{partner.name}</h3>
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;