import Banner from "@/components/ShopInsta/ShopInsta";
import Hero from "@/components/Hero/Hero";
import Stories from "@/components/MoreStories/Stories";
import Navbar from "@/components/Navbar/Navbar";
import ShopNew from "@/components/shopNew/ShopNew";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import VitrineLove from "@/components/vitrineLove/VitrineLove";
import MoreNeed from "@/components/MoreNeed/MoreNeed";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopNew />
      <Stories />
      <Banner />
      <VitrineLove />
      <MoreNeed />
    </>
  );
}
