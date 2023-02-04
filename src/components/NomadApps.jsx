import React from "react";

const NomadApps = () => {
  return (
    <div>
      <div class="flex items-center">
        <h1 class="flex py-8 lg:px-5 md:px-2 px-1 font-bold text-4xl text-gray-800 text-center justify-between w-4/5">
          Nomad Recommended Apps
        </h1>
        <h2 className="flex py-12 max-w-fit text-sm">Add your favorite app</h2>
      </div>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap ">
          <div class="inline-block px-3">
            <div class="w-24 h-24 py-0.5 overflow-hidden rounded-3xl shadow-md bg-transparent  hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/swiggy.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Swiggy
            </h2>
            <div className="flex items-center">
            <img className="flex justify-between" src="/images/nomadApps/food.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Food Delivery
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/zomato.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Zomato
            </h2>
            <div className="flex items-center">
            <img className="flex justify-between" src="/images/nomadApps/food.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Food Delivery
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-transparent hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/flipkart.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Flipkart
            </h2>
            <div className="flex items-center pl-3">
            <img className="flex justify-between" src="/images/nomadApps/ShoppingBagOpen.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Shopping
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/amazon.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Amazon
            </h2>
            <div className="flex items-center pl-3">
            <img className="flex justify-between" src="/images/nomadApps/ShoppingBagOpen.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Shopping
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/bb.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Big Basket
            </h2>
            <div className="flex items-center pl-3">
            <img className="flex justify-between" src="/images/nomadApps/shoppingCart.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Groceries
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-3xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/grofers.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Grofers
            </h2>
            <div className="flex items-center pl-3">
            <img className="flex justify-between" src="/images/nomadApps/shoppingCart.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
            Groceries
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/redbus.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              Redbus
            </h2>
            <div className="flex items-center pl-5">
            <img className="flex justify-between" src="/images/nomadApps/travel.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Travel
            </h3>
            </div>
          </div>
          <div class="inline-block px-3">
            <div class="w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="object-scale-down"
                src="/images/nomadApps/m-indicator.png"
                alt="..."
              />
            </div>
            <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1 text-center">
              mIndicator
            </h2>
            <div className="flex items-center pl-5">
            <img className="flex justify-between" src="/images/nomadApps/travel.svg" />
            <h3 className=" flex text-gray-800 text-xs font-semisemibold line-clamp-1 text-center">
              Travel
            </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomadApps;
