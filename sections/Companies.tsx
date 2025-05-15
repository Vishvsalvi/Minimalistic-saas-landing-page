import React from 'react'
import { BRAND_IMAGES } from '@/constants/constant'
import { Image } from '@heroui/react'
const Companies = () => {
  return (
    <section className="w-full mt-[10rem]">
    <h2 className="uppercase text-center text-sm font-medium mb-2 text-default-500">Trusted by top music teams</h2>
    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-6 max-w-5xl mx-auto">
      {BRAND_IMAGES.map((image) => (
        <div 
          key={image.id} 
          className="flex items-center justify-center"
        >
          <Image 
            src={image.src} 
            alt={image.alt}
            width={150}
            height={150}
            className="grayscale transition-all duration-300 object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
</section>
  )
}

export default Companies