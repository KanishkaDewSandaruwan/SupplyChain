import Axios from 'axios';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Farmer from '../assets/img/farmer.jpg';
import Process from '../assets/img/process.jpg';
import Logistics from '../assets/img/logistics.jpg';
import Retaler from '../assets/img/retail.jpg';


export default function Index() {

  const [header, setHeader] = useState([]);

  useEffect(() => {

  })

  return (
    <>
      <IndexNavbar fixed />
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
  
                <div className="w-full px-4 flex-1">
                  <h1 className="title">
                    Login to your user role
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full md:w-12/12 px-4 bg-emerald-200">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center mb-5 rounded-full bg-white">
                        <img className='icons' src={Farmer}></img>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Farmer
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Owns a farm, responsible for producing, harvesting the crops and storing information regarding the process of crop growth. Responsible for creating the smart contract too
                      </p>
                      <a href='/farmer' className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Login
                      </a>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center mb-5 rounded-full bg-white">
                        <img className='icons' src={Process}></img>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Processor
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Processes the raw crops into produce purchased by the final consumer, and stores the batch information, quantity, and inspection information of the finished products
                      </p>
                      <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center mb-5 rounded-full bg-white">
                        <img className='icons' src={Logistics}></img>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Logistics</h6>
                      <p className="mb-4 text-blueGray-500">
                        Responsible for storing processed agricultural products and selling them to retailers in batches. Store the related information.
                      </p>
                      <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center mb-5 rounded-full bg-white">
                        <img className='icons' src={Retaler}></img>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Retailer
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Buys processed produce from the distributor and sells it in small quantities to consumers. Store the details regarding sold quantities
                      </p>
                      <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}
