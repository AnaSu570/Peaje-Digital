"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl times new roman mb-3">Bienvenidos</span>
            <span className="block text-5xl times new roman font ">Peaje Digital</span>
          </h1>

          <p className="text-center text-lg">
          Estimado usuario, le damos la bienvenida a nuestro Peaje Digital.{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              
            </code>
          </p>

          <p className="text-center text-lg">
          Agradecemos su elección y nos complace ofrecerle una experiencia de pago rápida y eficiente para su viaje.{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              
            </code>
          </p>

        </div>
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
              </svg>
              <p>
                RECARGAR{" "}
              </p>
            </div>
            
             <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
              </svg>
              <p>
               WETHDRAD{" "}
              </p>
            </div>

             <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
              </svg>
              <p>
               TRANSACCION{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
