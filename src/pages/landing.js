import React from "react";
import Link from "next/link";

import Head from "next/head";
import useSWR from "swr";

import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";
import { useState } from "react";

const landing = () => {
  return (
    <Layout>
      <Head>
        <title>RoamCafe</title>
        <meta
          name="description"
          content="A website for Digital Nomads"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <h1 className="text-6xl text-center">Work Flexibly.</h1>
        <h1 className="text-6xl text-center">Embrace Adventure.</h1>
        <p className="text-xl text-center pt-4">
        Discover the Freedom and Flexibility of Working Anywhere in the World{" "}
        </p>
      </div>
      <div>
        <img className="pt-8" src="/images/landingPage/image1.png" alt="..." />
      </div>
      <div className="flex items-center justify-center ">
        <body class="p-10">
          <div class="relative">
            <img className=" rounded-3xl" src="/images/landingPage/image2.png" alt="..." />          
            <h3 class="absolute ml-8 text-white bottom-52 left-30 text-6xl w-2/5 pl-10 leading-tight">
              Expolre your next Destination
            </h3>
            <Link href={"/auth/login"} legacyBehavior className="z-50">
            <button className=" absolute ml-8 bg-white hover:bg-gray-200 text-black font-semisemibold py-4 px-6 rounded-full text-2xl top-3/4 left-8 shadow-md">Get Started</button>
          </Link>
          </div>
        </body>
      </div>
      <div className="grid grid-cols-3 w-11/12 ml-20 my-32">
        <div className=" w-8/12">
          <h1 className=" text-4xl  font-bold pb-4">Work Anywhere with Digital Nomadism</h1>
          <p className=" text-lg">Enjoy the Freedom and Flexibility of Remote Work
          </p>
        </div>
        <div className="w-8/12">
          <h1 className=" text-4xl font-bold pb-4">Discover the World as a Digital Nomad</h1>
          <p className=" text-lg">
          Expand Your Horizons and Immerse Yourself in New Cultures
          </p>
        </div>
        <div className="w-8/12">
          <h1 className=" text-4xl font-bold pb-4">A Better Work-Life Balance with Digital Nomadism</h1>
          <p className=" text-lg">
          Take Control of Your Time and Prioritize Personal Pursuits
          </p>
        </div>
      </div>
      <div className=" bg-black grid grid-cols-2 rounded-3xl">
        <div className="flex w-full items-center justify-center">
          <img className=" py-12 " src="/images/landingPage/htflogo.png" />
        </div>
        <div className=" flex text-white ml-44 text-3xl leading-relaxed items-center justify-center">
          <div>
            <h1 className="font-bold">Tofu.js</h1>
            <p>Chinmay Mhatre</p>
            <p>Rohan More</p>
            <p>Sahil Pednekar</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default landing;
