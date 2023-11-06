"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";

import StockWiseAllWarehouses from "@/public/images/StockWiseWarehouseMainPage.png";
import { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
// import { authOptions } from "./api/auth/authOptions";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"),
// { ssr: false,
//   loading: () => <p>Loading...</p>});

export default  function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}

      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Landing page showing all warehouses registered in the database"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description"
//   }
// }
