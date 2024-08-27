"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import Link from "next/link";




const OurCommunity = ()=>{

  const images = [
    {name: "Adaeze", url: `bg-[url('/images/adaeze.png')]`},
    {name: "Ibukunoluwa Adaghe", url: `bg-[url('/images/ibukunoluwa.png')]`},
    {name: "Kosisochukwu", url: `bg-[url('/images/kosisochukwu.png')]`},
    {name: "Patrick Asuquo", url: `bg-[url('/images/patrick.png')]`}
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  const listImages = ()=>{
    return images.map( (item: {name: string, url: string}, index) =>{
      return (
        <div key={item?.name} className="w-full flex">
          <div className={`carousel-item ${images[index].url} bg-cover bg-center bg-no-repeat h-420 max-w-96 mx-auto flex`}>
            <span className="bg-overlay text-white px-5 py-3 mt-auto w-full block text-center">{images[index].name}</span>
          </div>
        </div>
      )
    })
  }

  return(
    <section className="bg-neutral px-5 lg:px-28 py-28 flex flex-col md:flex-row items-center">
      <article className="text-base-content md:w-1/2 flex flex-col mb-10">
        <header className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0"> Leverage our Community </h2>
          <h2 className="text-2xl md:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0">
            of Top Technology Mavericks</h2>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-xl font-light text-center md:text-left">
          Unlock the potential of your projects with our elite network of tech experts. Our community of top-tier QA engineers and Scrum Masters is ready to drive innovation and deliver exceptional results. Partner with us to elevate your technology initiatives to the next level.
        </p>
        <Link href="/learning" className="btn hidden md:inline-flex items-center bg-primary text-white text-sm md:text-lg font-normal rounded-full px-9 mx-auto md:ml-0 md:mr-auto mt-8 ">
          Quales Academy
        </Link>
      </article>
      
      <figure className="w-full md:w-1/2 mb-10 md:mb-0">
        <Slider {...settings}>
          {listImages()} 
        </Slider>
      </figure>

      <Link href="/qualesacademy" className="btn inline-flex items-center md:hidden bg-primary text-white text-sm md:text-lg font-normal md:font-medium rounded-full px-9 mx-auto md:ml-0 md:mr-auto mt-8">
        Quales Academy
      </Link>
    </section>
  )
}

export default OurCommunity