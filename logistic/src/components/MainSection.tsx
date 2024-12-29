import React from 'react';

const MainSection = () => {
  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Loraic Transportation Introducing the most Modern Methods of Transportation
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <span className="text-2xl font-bold">5</span>
              </div>
              <div>
                <p className="text-lg font-semibold">5-star</p>
                <p>Trusted Company</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-teal-500 p-3 rounded-full">
                <span className="text-2xl font-bold">150+</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Projects</p>
                <p>Successful Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;