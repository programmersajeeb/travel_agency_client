import React from 'react';
import BestOffers from '../BestOffers/BestOffers';
import BlogPosts from '../BlogPosts/BlogPosts';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SingleImage from '../SingleImage/SingleImage';
import TravelQuote from '../TravelQuote/TravelQuote';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Carousel />
      <BestOffers />
      <BlogPosts />
      <SingleImage />
      <TravelQuote />
      <Footer />
    </div>
  );
};

export default Home;