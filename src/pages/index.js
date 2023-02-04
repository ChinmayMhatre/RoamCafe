import Head from "next/head";
import useSWR from "swr";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";
import data from "./locs.json";
import Cities from "@components/Cities";

import styles from "@styles/Home.module.scss";
import Forum from "@components/forum";

const DEFAULT_CENTER = [38.907132, -77.036546];

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  // const { data, error, isLoading } = useSWR(
  // "./test.json",
  //   fetcher
  // );

  console.log(data);

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
      <Section>
        <Container>
          <h1 className={styles.title}>Next.js Leaflet Starter</h1>
          <Map
            className={styles.homeMap}
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
                      onClick={() => alert("Hello")}
                    >
                      <Popup>
                        <button onClick={() => ""}>
                          {city}, {region}
                        </button>
                      </Popup>
                    </Marker>
                  );
                })}

                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid grid-cols-3">
            <div className="w-4/5 col-span-2">
              <h2 className="text-5xl pb-4">India</h2>
              <p className="pb-3 leading-tight">
                India has a thriving digital nomad community, and there are
                several cities that are popular among digital nomads for their
                vibrant startup culture, excellent infrastructure, and
                cost-effective living. Here are some of the top cities in India
                for digital nomads:
              </p>
              <p>
                <span className="font-bold text-base">Currency: </span> INR
                (Indian National Rupee)
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
              <div className="font-bold text-base mb-5 box-content p-4 border-2 rounded-lg box-decoration-slice bg-white shadow-lg">
                Time HH:MM{" "}
                <span className="text-xs text-gray-400">(IST), UTC +5:30</span>
              </div>
              <div className="font-bold text-base mt-5 mb-5 box-content p-4 border-2 rounded-lg box-decoration-slice shadow-lg">
                No. of Nomads: <span className="font-semibold">1.2k</span>
              </div>
              <div className="font-bold text-base mt-5 mb-5 box-content p-4 border-2 rounded-lg box-decoration-slice shadow-lg">
                Cost of Living: <span className="font-semibold">$6/day</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col bg-white m-auto p-auto">
            <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
              Example
            </h1>
            <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
                <div class="inline-block px-3">
                  <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
          <Cities />
          <Forum/>
        </Container>
      </Section>
    </Layout>
  );
}
