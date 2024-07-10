"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";




const OurCommunity = ()=>{

  const images = [
    `bg-[url('/images/adaeze.jpg')]`,
    `bg-[url('/images/ibukunoluwa.jpg')]`,
    `bg-[url('/images/kosisochukwu.jpg')]`,
    `bg-[url('/images/moses.jpg')]`,
    `bg-[url('/images/patrick.jpg')]`
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const listImages = ()=>{
    return images.map( (item: string, index) =>{
      return (
        <div key={item} className="w-full flex">
          <div className={`carousel-item ${images[index]} bg-cover bg-center bg-no-repeat h-420 max-w-96 mx-auto`}>
          </div>
        </div>
      )
    })
  }

  return(
    <section className="bg-neutral px-5 lg:px-28 py-28 flex flex-col-reverse md:flex-row items-center">
      <article className="text-base-content md:w-1/2">
        <header >
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text"> Leverage our Community </h3> <br/>
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text">
            of Top Technology Mavericks</h3>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-xl font-light">
          Unlock the potential of your projects with our elite network of tech experts. Our community of top-tier QA engineers and Scrum Masters is ready to drive innovation and deliver exceptional results. Partner with us to elevate your technology initiatives to the next level.
        </p>
        <button className="btn bg-primary text-white text-sm md:text-lg md:font-semibold font-normal rounded-full px-9 md:ml-auto mt-8">Quales Academy</button>
      </article>
      
      <figure className="w-full md:w-1/2 mb-10 md:mb-0">

        <Slider {...settings}>
          {listImages()} 
        </Slider>

      </figure>
    </section>
  )
}

export default OurCommunity