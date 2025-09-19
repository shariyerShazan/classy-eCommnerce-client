import React from 'react'

const DiscountBanner = () => {
  const images = [
    "./dis-ban-1.webp",
    "./dis-ban-2.webp",
    "./dis-ban-3.webp",
    "./dis-ban-4.webp"
  ];

  return (
    <div className="bg-white py-12">
      <div className="container grid cursor-pointer grid-cols-2 sm:grid-cols-4 gap-2">
        {images.map((img, i) => (
          <div key={i} className="group overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`discount-${i}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscountBanner
