import React from 'react'
import './Home.css'
import FilterComponent from '../FilterComponent/FilterComponent'
import Slider from  '../Slider/Slider'
import Secure from '../Secure/Secure';
import Reviews from '../Reviews/Reviews'
import InstagramFeed from '../InstagramFeed/InstagramFeed'
import Footer from '../Footer/Footer'
import Cookin from '../All Collection/COOKIN/Cookin';
import Dining from '../All Collection/DINING/Dining';
import Kitchen from '../All Collection/KITCHEN/Kitchen';
import Pooja from '../All Collection/POOJA/Pooja';

const Home = () => {

  
  return (
    <div>
         
   <Slider/>
   <FilterComponent />
   <Secure/>
   <Cookin />
   <Dining />
   <Reviews/>
   <Kitchen />
   <Pooja />
   <InstagramFeed/>
<Footer/>
   
 
    </div>
  )
}

export default Home
