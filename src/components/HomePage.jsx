import { useState, useEffect } from "react";

const HomePage = () => {
  // Ensure background is set immediately upon component mount
  useEffect(() => {
    document.body.style.backgroundColor = "#1f2937";
    document.documentElement.style.backgroundColor = "#1f2937";
    
    return () => {
      // No need to reset as App component maintains this
    };
  }, []);

  return (
    <div className="bg-[#1f2937] min-h-screen">
      {/* Video Hero Section */}
      <div className="w-full bg-black relative overflow-hidden">
        {/* Video Overlay - Red gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-black/40 z-10 pointer-events-none"></div>
        
        {/* Custom video player container */}
        <div className="relative w-full">
          <iframe 
            className="w-full h-[60vh] md:h-[80vh] object-cover"
            src="https://www.youtube.com/embed/Nt7V2xFx3FE?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&playlist=Nt7V2xFx3FE&loop=1"
            title="Snapdragon Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-16 z-20 bg-gradient-to-t from-[#120303] via-[#120303]/70 to-transparent">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            Experience the Power of <span className="text-red-500">Snapdragon</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Elevating mobile experiences with industry-leading performance and connectivity
          </p>
          <a 
            href="#products" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-red-600/20"
          >
            <span>Explore Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* Subtle animated scroll indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-xs text-white/70 mt-1">Scroll</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div id="products" className="flex flex-col md:flex-row items-center bg-[#120303] py-16 px-4 md:px-12">
        <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Making your phone a small miracle that matters.
          </h1>
          
          {/* Lazada Section */}
          <div className="bg-[#1f2937] rounded-lg p-6 mb-8 border border-red-500 shadow-lg shadow-red-500/20">
            <img 
              src="/Lazada.png" 
              alt="Lazada" 
              className="h-12 mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x50?text=LAZADA";
              }}
            />
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Choose a Snapdragon smartphone from hundreds of options
            </h2>
            <a 
              href="https://www.lazada.co.id/snapdragon/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium rounded hover:from-red-700 hover:to-orange-600 transition-all duration-300"
            >
              Shop now on Lazada
            </a>
          </div>
          
          <p className="text-lg leading-relaxed">
            Qualcomm® Snapdragon™ Mobile Platform and its LTE modem support amazing speeds, stunning graphics, ultra-fast connectivity, and longer battery life on mobile devices, allowing you to do more of what you love.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center translate-x-16">
          <a href="https://www.qualcomm.com/products/snapdragon" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
            <img 
              src="/snapdragon_cpu.png" 
              alt="Snapdragon Chip Layers" 
              className="w-4/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
            />
          </a>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-16 px-4 md:px-12 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <a href="https://www.mi.co.id/id/product/redmi-note-10/" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img 
                  src="/Redmi-Note-10.webp" 
                  alt="Xiaomi Redmi Note 10" 
                  className="mx-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x500?text=Xiaomi+Redmi+Note+10";
                  }}
                />
              </a>
            </div>
            <div className="w-full md:w-3/5 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-100 mb-4">Xiaomi Redmi Note 10</h2>
              <p className="text-xl font-medium text-gray-300 mb-6">Premium Photography with Quad Camera</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Xiaomi Redmi Note 10 is powered by the Qualcomm Snapdragon 678 Mobile Platform 
                for lag-free performance. With cutting-edge manufacturing technology, Super AMOLED 
                display, and best-in-class camera capabilities, this device offers a premium experience 
                while maintaining the efficiency of its 5000mAh battery that lasts all day.
              </p>
              <a 
                href="https://www.mi.co.id/id/product/redmi-note-10/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div id="partners" className="py-16 px-4 md:px-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Berkenalan dengan mitra kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/Asus.jpg",
                title: "Asus",
                description: "Bergerak lebih cepat dengan Asus",
                link: "https://www.asus.com/id/"
              },
              {
                img: "/honor_phone_snapdragon.jpg", 
                title: "HONOR",
                description: "Smartphone premium dengan triple camera ultrawide",
                link: "https://www.honor.com/id/"
              },
              {
                img: "/manchester_united.jpg",
                title: "Manchester United",
                description: "Kenali lebih dekat dengan sponsor kami, club terbesar di dunia",
                link: "https://www.manutd.com/"
              }
            ].map((product, index) => (
              <div key={index} className="bg-[#2a2a2a] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer group">
                <a href={product.link} className="block">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x200?text=${product.title.replace(/\s/g, '+')}`;
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <span 
                      className="inline-block text-red-500 font-medium group-hover:text-red-400 group-hover:underline transition-colors"
                    >
                      Pelajari lebih lanjut →
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;