"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import Link from "next/link";




const HeroSection = () => {

  const images = [
    `bg-[url('/images/adaeze.png')]`,
    `bg-[url('/images/ibukunoluwa.png')]`,
    `bg-[url('/images/kosisochukwu.png')]`,
    `bg-[url('/images/patrick.png')]`
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  {/* <div key={item} className="h-full w-full flex bg-overlay border">
          <div className={`carousel-item ${images[index]} bg-cover bg-center bg-no-repeat w-full h-screen max-h-850`}>
          </div>
        </div> */}
  const listImages = ()=>{
    return images.map( (item: string, index) =>{
      return (
        <section key={item} className={`carousel-item ${images[index]} bg-cover bg-center bg-no-repeat h-screen max-h-600 lg:max-h-850`}>
        <div className="h-full bg-overlay flex items-center content-center">
          
        </div>
        </section> 
      )
    })
  }




  return (
    <section className=" relative flex flex-col">
        <article className=" absolute top-1/3 z-10 w-full text-white mx-auto opacity-100 px-3 md:px-5">
          <h1 className=" text-xl md:text-4xl mb-5 lg:mb-10 text-white max-w-800 mx-auto text-center">Engage the best talents around the globe</h1>
          <p className="font-light text-sm mb-5 lg:mb-8 lg:text-lg max-w-1000 mx-auto text-center">Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.</p>
          <div className="flex gap-2 md:gap-5">
            <Link href="/explore-talents" className="btn text-sm md:font-medium md:text-lg glass rounded-full px-9 font-light text-white ml-auto" >Explore Talents</Link>
            <Link href="/hire-talents" className="btn text-sm md:font-medium md:text-lg bg-white text-primary font-light rounded-full px-9 mr-auto">Hire Talents</Link>
          </div>
        </article>

        <Slider {...settings}>
          {listImages()} 
        </Slider>
    </section>
      
  )
}

export default HeroSection;
