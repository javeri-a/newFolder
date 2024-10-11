
import Image from "next/image"

import { useState } from "react";
export default function Products(){
 

  

  const generateRandomPrice = () => (Math.random() * (100 - 10) + 10).toFixed(2);
  
  
    
    const images = [
      { id: 1, src: "/image1.png", description: "Beautiful Chair" },
      { id: 2, src: "/image2.png", description: "Elegant Sofa" },
      { id: 3, src: "/image3.png", description: "Modern Table" },
      { id: 4, src: "/image4.png", description: "Stylish Lamp" },
      { id: 5, src: "/image5.png", description: "Cozy Bed" },
      { id: 6, src: "/image6.png", description: "Artistic Mirror" },
      { id: 7, src: "/image7.png", description: "Wooden Shelf" },
      { id: 8, src: "/image8.png", description: "Designer Chair" },
    ];
  
    return (
      <div>
      <h1 className="text-3xl font-serif text-center font-bold text-black">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {images.map((image) => (
          <div key={image.id} className="relative group">
        
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.description}
                width={400}
                height={400}
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-4 text-white text-center">
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                    Add to Cart
                  </button>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-white text-black rounded-full p-2">
                      ❤️
                    </button>
                    <button className="bg-white text-black rounded-full p-2">
                      🔄
                    </button>
                    <button className="bg-white text-black rounded-full p-2">
                      📤
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-lg font-bold">${generateRandomPrice()}</p>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
  }