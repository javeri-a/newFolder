import Image from "next/image";

export default function ImageGallery() {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
    "/image7.png",
    "/image8.png",
  ];

  return (
    <div className="bg-pink-100 py-12">
      {/* Text Section */}
      <div className="text-center mb-8">
        <h1 className="font-semibold text-xl text-gray-700">Share Your Setup with</h1>
        <h2 className="font-bold text-4xl text-gray-900">
          #<span className="text-pink-800">FURNIRO</span> Furniture
        </h2>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {images.map((img, index) => (
          <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={img}
              alt={`Furniture Image ${index + 1}`}
              fill // Replacing layout="fill"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
