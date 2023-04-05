import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import BannerCard from './BannerCard';
import surfBoards from '../../assets/img/homeBannerOne.jpg';
import shoes from '../../assets/img/homeBannerTwo.jpg';
import shirts from '../../assets/img/homeBannerThree.jpg';

function Home () {
  return(
    <div>
      {/* // Render the Hero component */}
      <Hero />
      {/* // Render the Banner component */}
      <Banner />
      {/* // Render the BannerCard component with surfboard image and title/description */}
      <BannerCard 
        image={surfBoards}
        title="Marvel POPs"
        descr="Collect Them All"
      />
      {/* // Render the BannerCard component with shoes image and title/description */}
      <BannerCard 
        image={shoes}
        title="Popular POPs"
        descr="Fortnite"
      />
      {/* // Render the BannerCard component with shirts image and title/description */}
      <BannerCard 
        image={shirts}
        title="Variety Of POPs"
        descr="Lots of Different POPs"
      />
    </div>
  );
}

export default Home;
