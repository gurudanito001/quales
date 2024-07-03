"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const Partners = () =>{
  const logoContainerRef: any = useRef(null);
  const [count, setCount] = useState(0)

  useEffect(()=>{
    let interval = setInterval(()=>{
      logoContainerRef?.current?.scroll((176 * count), 0)
      setCount( (prevCount: number)=>{
        if(prevCount === 6){
          return 0
        }
        return prevCount + 1
      })
    }, 3000)

    return ()=> clearInterval(interval)
  })


  return(
    <section className="bg-white py-16 px-5 lg:px-20 overflow-x-hidden border shadow-inner mt-20">
      <h6 className="text-center text-primary text-2xl mb-5 md:mb-8">Quales is Trusted By:</h6>

      <div ref={logoContainerRef} className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <Image
            src={`/images/coursera-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item">
          <Image
            src={`/images/abinbev-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item">
          <Image
            src={`/images/mars-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item">
          <Image
            src={`/images/zone-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item">
          <Image
            src={`/images/qcore-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item">
          <Image
            src={`/images/signature-bank-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

        <div className="carousel-item">
          <Image
            src={`/images/riby-logo.png`}
            className="px-4 w-44 md:w-52"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={250}
            height={100}
          />
        </div>

      </div>

    </section>
  )
}

export default Partners