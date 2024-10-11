import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full bg-center bg-cover flex items-center justify-start">
      {/* Text Content */}
      <div className="bg-pink-800 bg-opacity-90 border-black rounded-2xl p-6 sm:p-10 md:p-14 m-4 sm:m-10 md:m-16 lg:m-24 sm:w-3/4 md:w-2/3 lg:w-1/3 transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white">
          New Arrival
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-4 text-black font-serif">
          Discover our new collection
        </h2>
        <p className="mb-6 text-white text-sm sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur.
        </p>
        <button className="text-center bg-black hover:bg-gray-800 p-3 md:p-4 rounded text-white font-semibold">
          BUY NOW
        </button>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] w-full h-full">
        <Image
          src="/hero.png"
          alt="furniture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
