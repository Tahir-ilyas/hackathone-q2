import Image from "next/image";
import Hero from "./component/Hero";
import Range from "./component/Range";
import Product from "./component/Product";
import Inspiration from "./component/Inspiration";
import Furniture from "./component/Furniture";
import Cart from "./cart/page";




export default function Home() {
  return (
    <>
    <Hero />
    <Range />
    <Product />
    <Inspiration />
    <Furniture />
    </>
  );
}
