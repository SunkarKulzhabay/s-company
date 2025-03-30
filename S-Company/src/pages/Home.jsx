import React from "react";
import MyCarousel from "../components/Carousel";
import "../CSS/Home.css"; // Подключаем стили

const Home = () => {
  return (
    <div className="home-container">
      <MyCarousel />
      <section className="merchandising-info">
        <h2>Почему важен мерчандайзинг?</h2>
        <p>
          Мерчандайзинг — это не просто расстановка товаров на полках, а целая
          наука, помогающая увеличивать продажи и привлекать покупателей. 
          Грамотная выкладка, контроль запасов и анализ спроса обеспечивают 
          эффективную работу магазинов и высокую лояльность клиентов.
        </p>
      </section>
    </div>
  );
};

export default Home;
