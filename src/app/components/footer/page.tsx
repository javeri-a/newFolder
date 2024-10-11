export default function Footer() {
    return (
      <div className="bg-pink-200 border-t-2 mt-16">
        <div className="flex flex-col md:flex-row justify-between p-8 md:py-12 font-semibold">
          
          {/* Company Info */}
          <div className="mb-8 md:mb-0 md:ml-8">
            <h1 className="text-gray-900 text-3xl mb-2">Furniro</h1>
            <p className="text-lg">
              400 University Drive Suite 200 <br /> Coral Gables, <br /> FL 33134, USA
            </p>
          </div>
          
          {/* Links Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-gray-900 text-xl mb-2">LINKS</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-pink-800 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/" className="hover:text-pink-800 transition-colors duration-200">Shop</a>
              </li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div className="mr-8">
            <h3 className="text-gray-900 text-xl mb-2">HELP</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-pink-800 transition-colors duration-200">Payment Options</a>
              </li>
              <li>
                <a href="/" className="hover:text-pink-800 transition-colors duration-200">Returns</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  