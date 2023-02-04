import React from 'react'

const NomadHotels = () => {
    return (
        <div>
          <div class="flex items-center">
            <h1 class="flex py-8 lg:px-5 md:px-2 px-1 font-bold text-4xl text-gray-800 text-center justify-between w-4/5">
              Nomad Recommended Hotels
            </h1>
            <h2 className="flex py-12 max-w-fit text-sm">Add your favorite hotel</h2>
          </div>
          <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div class="flex flex-nowrap ">
                <div class="inline-block px-3">
                  <div class=" w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/nomadHotels/hotel1.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/nomadHotels/hotel2.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/nomadHotels/hotel3.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/nomadHotels/hotel4.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/nomadHotels/hotel5.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    };
    

export default NomadHotels