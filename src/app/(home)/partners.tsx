"use client"
import Image from "next/image";
import {motion} from 'framer-motion';

const slides = [
  { logo: <div className="min-w-40">
    <Image
      src={`/images/coursera.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Product Image"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/abinbev.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Product Image"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/mars.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Product Image"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/zone.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Product Image"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/q-core.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Product Image"
      width={250}
      height={100}
    />
  </div> },

{ logo: <div className="min-w-40">
  <Image
    src={`/images/signature-bank.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Product Image"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={`/images/riby.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Product Image"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={`/images/seamfix.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Product Image"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={`/images/fast-credit.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Product Image"
    width={250}
    height={100}
  />
</div> },
];

const Partners = () =>{

  const duplicatedSlides = [...slides, ...slides];

  


  return(
    <section className="bg-white py-16 px-5 lg:px-20 overflow-x-hidden border shadow-inner mt-20">
      <h6 className="text-center text-primary text-xl md:text-2xl mb-5 md:mb-8">Quales is Trusted By:</h6>


      <div className="relative h-full overflow-hidden py-12 bg-white mx-auto">

            {/* <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/6 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/6 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div> */}

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-340%'],
                    transition: {
                        ease: 'linear',
                        duration: 50,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-44 md:w-52 mx-8 md:mx-12" /* style={{ width: `${300 / slides.length}%` }} */>
                        <div className="flex items-center justify-center h-full">
                            <span>{slide.logo}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>




      {/* <div ref={logoContainerRef} className=" flex overflow-x-auto rounded-box">
        <div className="carousel-item777777 min-w-40">
          <Image
            src={`/images/coursera-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item777777 min-w-40">
          <Image
            src={`/images/abinbev-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item777777 min-w-40">
          <Image
            src={`/images/mars-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item777777 min-w-40">
          <Image
            src={`/images/zone-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item777777 min-w-40">
          <Image
            src={`/images/qcore-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item777777 min-w-40">
          <Image
            src={`/images/signature-bank-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="min-w-40">
          <Image
            src={`/images/riby-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

      </div> */}

    </section>
  )
}

export default Partners