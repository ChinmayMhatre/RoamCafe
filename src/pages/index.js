import Head from "next/head";
import useSWR from "swr";


import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";
import data from "./locs.json";
import Cities from "@components/Cities";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  orderBy, 
  query,
  onSnapshot
} from "firebase/firestore";
import { auth, db } from "../utils/firebase";

import styles from "@styles/Home.module.scss";
import Forum from "@components/forum";
import { useEffect, useState } from "react";

const DEFAULT_CENTER = [38.907132, -77.036546];

// const fetcher = (...args) => fetch(...args).then((res) => res.json());


export default function Home() {
  
  const [currentCountry, setCurrentCountry] = useState("")
  const [currentCity, setCurrentCity] = useState("")
  const [cityData,setCityData] = useState({})
  const [countryImages,setCountryImages] = useState({})
  const updateData = async (city,region)=>{
    setCurrentCity( city )
    setCurrentCountry( region )


  }

  useEffect(() => {
    citydatafetch(currentCity)
  }, [currentCity])
  

  const citydatafetch = ()=>{
    data?.destinations.map(({  city,...rest })=>{
      if(city === currentCity){
        setCityData(rest)
    }})
  }

  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta
          name="description"
          content="Create mapping apps with Next.js Leaflet Starter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section className="m-0 p-0">
        <Container className=" relative m-0 p-0">
          <h1 className="text-5xl font-medium">Project Title</h1>
          <p className=" text-md pt-4 pb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem accusantium modi sequi aliquam harum magni totam est nostrum nisi autem aperiam molestiae aut vero quam, quidem sint? Sapiente, nemo.</p>
            <div className="absolute right-4 top-36 bg-white rounded-lg z-[10000] p-4 max-w-xs">
              <h2 className="font-bold">Directions to use</h2>
              <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque!</p>
            </div>
          <div className=" border-white border-4 drop-shadow-xl">
          <Map
            className={styles.homeMap}
            styles= {
              {
                borderRadius:2
              }
            }
            width="800"
            height="400"
            center={[0, 0]}
            zoom={1}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {data?.destinations.map(({ id, location, city, region }) => {
                  return (
                    <Marker
                      key={id}
                      position={[location.lat, location.lng]}
                    >
                      <Popup>
                        <div>

                          {city}, {region}
                        </div>
                        <button onClick={() => updateData(city,region) }>
                          click to know more
                        </button>
                      </Popup>
                    </Marker>
                  );
                })}
              </>
            )}
          </Map>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={` ${currentCountry.length == 0 ? "hidden" : ""} pt-12 grid grid-cols-3`}>
            <div className="w-4/5 col-span-2">
              <h2 className="text-5xl pb-4">{currentCity}({currentCountry})</h2>
              <p className="pb-3 leading-tight">
                India has a thriving digital nomad community, and there are
                several cities that are popular among digital nomads for their
                vibrant startup culture, excellent infrastructure, and
                cost-effective living. Here are some of the top cities in India
                for digital nomads:
              </p>
              <p>
                <span className="font-bold text-base">Currency: </span> {cityData.currency}
              </p>
              <p>
                <span className="font-bold text-base">
                  Most Spoken Language:{" "}
                </span>{" "}
                Hindi
              </p>
              <p>
                <span className="font-bold text-base">Nomad Insurance: </span>{" "}
                Available
              </p>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-9 items-center font-bold text-base mb-5 box-content p-4 border-2 rounded-lg box-decoration-slice bg-white shadow-lg">
                <img className=" flex h-4 pl-2" src="/images/clock.svg"></img>
                <p className=" col-span-8">
                  Time HH:MM{" "}
                  <span className="text-xs text-gray-400 mt-1">
                    {" "}
                    (IST), UTC +5:30
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-9 items-center font-bold text-base mt-5 mb-5 box-content p-4 border-2 rounded-lg box-decoration-slice shadow-lg">
              <img className=" flex h-4 pl-2" src="/images/usersThree.svg"></img>
                <p className=" col-span-8">
                  No. of Nomads: <span className="font-semibold">
                    {cityData.nomads}
                  </span>
                </p>
              </div>
              <div className=" grid grid-cols-9 items-center font-bold text-base mt-5 mb-5 box-content p-4 border-2 rounded-lg box-decoration-slice shadow-lg">
              <img className=" flex h-4 pl-2" src="/images/money.svg"></img>
                <p className=" col-span-8">
                  Cost of Living <span className="font-semibold">
                   $ {cityData.cos} /  day
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class={`${currentCountry.length == 0 ? "hidden" : ""} flex flex-col bg-white m-auto p-auto`}>
          <h1 class="flex py-5 lg:px-20 md:px-10 px-5 font-bold text-4xl text-gray-800">
              Example
            </h1>
            <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div class="flex flex-nowrap ">
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/india/india1.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/india/india2.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/india/india3.png"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      className="object-none min-h-full"
                      src="/images/india/india4.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${currentCountry.length == 0 ? "hidden" : "block"}`}>
            <Cities />
            <Forum currentCity= {currentCity} currentCountry = {currentCountry}/>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
