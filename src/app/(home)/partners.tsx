"use client"
import Image from "next/image";
import {motion} from 'framer-motion';

const slides = [
  { logo: <div className="min-w-40">
    <Image
      src={`/images/coursera.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Coursera Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/abinbev.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Abinbev Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/mars.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Mars Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/zone.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Zone Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={`/images/q-core.svg`}
      style={{ height: "auto", objectFit: "contain" }}
      alt="Qore Logo"
      width={250}
      height={100}
    />
  </div> },

{ logo: <div className="min-w-40">
  <Image
    src={`/images/signature-bank.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Signature Bank Logo"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={`/images/riby.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Riby Logo"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={`/images/seamfix.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Seamfix Logo"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={`/images/fast-credit.svg`}
    style={{ height: "auto", objectFit: "contain" }}
    alt="Fast Credit Logo"
    width={250}
    height={100}
  />
</div> },
];

const Partners = () =>{

  const duplicatedSlides = [...slides, ...slides];

  


  return(
    <section className="bg-white py-5 xl:py-16 px-5 lg:px-20 overflow-x-hidden border shadow-inner xl:mt-20">
      <h2 className="text-center text-primary text-xl md:text-2xl mb-5 md:mb-8 font-550">Quales is Trusted By:</h2>


      <div className="relative h-full overflow-hidden bg-white mx-auto">
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
                    <div key={index} className="flex-shrink-0 w-44 md:w-52 mx-8 md:mx-12" >
                        <div className="flex items-center justify-center h-full">
                            <span>{slide.logo}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

    </section>
  )
}

export default Partners