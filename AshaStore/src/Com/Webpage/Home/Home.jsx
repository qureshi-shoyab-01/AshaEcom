import React from 'react'
import './Home.css'
import FilterComponent from '../FilterComponent/FilterComponent'
import Slider from  '../Slider/Slider'
import Secure from '../Secure/Secure';
import Reviews from '../Reviews/Reviews'
import InstagramFeed from '../InstagramFeed/InstagramFeed'
import Footer from '../Footer/Footer'
import Cookin from '../All Collection/COOKIN/Cookin';

const Home = () => {

  
  return (
    <div>
         
   <Slider/>
   <FilterComponent />
   <Secure/>
   <Cookin />
   <Reviews/>
   <InstagramFeed/>
<Footer/>
   
 
    </div>
  )
}

export default Home
