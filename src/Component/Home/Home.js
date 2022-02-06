import React from 'react'
import Product from '../Product/Product';
import './Home.css';


function Home() {
  return (
    <div className='home'>
      <div className="home-container">
          <img className='home-image' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/24297907/original/2b9cac9860fd3197428c04c1c3ec45a56dcd37d1/design-banner-and-edit-products-for-amazon-and-ebay.jpg" alt="" />
      </div>
      <div className="home-row">
        {/* product */}
        <Product 
        id="1231223434"
         title="The lean startup" 
         price={29.99} 
         image="https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg"
         rating={5}
         />
        <Product 
          id="1231223433"
         title=" the 1500s, when an unknown printer took a galley" 
         price={33.55} 
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugiDskg-FB6YdvDviUKqrf4Oc6Op-1oHztAf_YHiqcpr5ifHcyz4uKyE3QHHhko1ou1g&usqp=CAU"
         rating={7}
        />
        {/* product */}
        
      </div>
      <div className="home-row">
        {/* product */}
        <Product 
           id="1231223436"
           title=" cted by the readable content of a page when looking at " 
           price={55.77} 
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4v3l1WwwonZEO2u2MHDOIFPKH0rurV-VZpPTxzxiqWCZljOJ6I9HHZsUV1eCoPic2PA&usqp=CAU"
           rating={4}
        />
        <Product 
          id="1231224454"
          title="t here, content here', making it look like readable English" 
          price={56.77} 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWgRkeQxuaxJJXhONf2sT0-mAKxYimWgbc_TYDcWQnrPJ8pqCCtkCCK4qSby5FjDISjc&usqp=CAU"
          rating={4}
        />
        <Product 
           id="123122375"
           title="ke a type specimen book. It has survived not only five" 
           price={56.77} 
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDQnigiVI5kU-UYO_Ourb8H5uaXUP-FYYZ7SFSqMSPTb3ZcCxg2rBwRqcINTKAp7uVNQ&usqp=CAU"
           rating={3}
        />

        {/* product */}
        {/* product */}
      </div>
      <div className="home-row">
        {/* product */}
        <Product 
           id="123124975"
           title=" content here', making it look like readable English" 
           price={44.34} 
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaazkJXb4lvzbCxKV6A5Vz6xBl-raDRkiKpXPPRaPYzO9Qqk-ySg-gIdGpWluu1P5_-h0&usqp=CAU"
           rating={2}
        />

      </div>
    </div>
  )
}

export default Home
