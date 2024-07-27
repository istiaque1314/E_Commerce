import React from 'react';

const Gallery = () => {
  return (
    <div>
      <main className='h-max'>

        <div className='py-16'>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 py-16">
              <div className="md:5/12 lg:w-5/12">
                <img src="https://www.amoret.co.za/images/Medicalequipment/pic47.JPG" alt="image" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Some Moments That we Captured
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8 px-6 md:px-12 xl:px-6">
          
          <div className="w-full">
            <img src="https://via.placeholder.com/400" alt="image" />
          </div>
          <div className="w-full">
            <img src="https://via.placeholder.com/400" alt="image" />
          </div>
          <div className="w-full">
            <img src="https://via.placeholder.com/400" alt="image" />
          </div>
          <div className="w-full">
            <img src="https://via.placeholder.com/400" alt="image" />
          </div>
          <div className="w-full">
            <img src="https://via.placeholder.com/400" alt="image" />
          </div>
          <div className="w-full">
            <img src="https://via.placeholder.com/400" alt="image" />
          </div>
          
        </div>

      </main>
    </div>
  );
};

export default Gallery;
