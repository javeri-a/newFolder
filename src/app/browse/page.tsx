import Link from "next/link";
import Image from "next/image";

export default function Browse() {
  return (
    <div className="py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Browse the Range</h1>
        <p className="text-gray-600">Discover our exquisite collection of furniture.</p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
    
        <Link href="/product/1">
          <div className="cursor-pointer group">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/p1.png"
                alt="Product 1"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-semibold">Stylish Chair</h2>
          </div>
        </Link>

        
        <Link href="/product/2">
          <div className="cursor-pointer group">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/pic5.png"
                alt="Product 2"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-semibold">Modern Sofa</h2>
          </div>
        </Link>

        
        <Link href="/product/3">
          <div className="cursor-pointer group">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105">
              <Image
                src="/p4.png"
                alt="Product 3"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-center mt-4 text-xl font-semibold">Elegant Table</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
