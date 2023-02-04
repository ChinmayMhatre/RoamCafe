import Head from "next/head";
import useSWR from "swr";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";
import data from "./locs.json"
import Cities from "@components/Cities"

import styles from "@styles/Home.module.scss";



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
                {data?.destinations.map(({id, location, city, region}) => {
                  return (
                    <Marker key={id} position={[location.lat, location.lng]} onClick={()=> alert("Hello")}>
                      <Popup>
                        <button onClick={
                          () =>
                            ""
                        }
                        >
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
          <div className="grid-container">
              <div className="grid-item">
                <h2 className={styles.title}>India</h2>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                </p>
                <p>
                  <span>Currency: </span> INR (Indian National Rupee)
                </p>
                <p>
                  <span>Most Spoken Language: </span> Hindi
                </p>
                <p>
                  <span>Nomad Insurance: </span> Available
                </p>
              </div>
              <div className="grid-item">
                <div className="">v</div>
                <div className="">x</div>
                <div className="">x</div>
              </div>
          </div>
          <Cities />
        </Container>
      </Section>
    </Layout>
  );
}
