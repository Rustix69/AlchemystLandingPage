"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import TrustedBySection from "./TrustedBySection";
export default function HeroSection() {
  return (
    <section className="pt-20 pb-32 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/landingpagevideo60_2.mp4" type="video/mp4" />
        </video> */}
        
        {/* Gradient & Blur Overlays */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-background"></div>
      </div>
      
      <div className="max-w-6xl mt-20 mx-auto text-center relative z-10">
        {/* New badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/70 rounded-full text-white text-sm font-medium mb-8 animate-fade-in">
          <span>✨ #1 in Gen AI category AI SDRs</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          The Memory Layer<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-lg">for your AI agents</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          Discover the new way to build, test, deploy, and monitor 
          production-ready AI voice agents at scale.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white hover:bg-white/90 text-black text-lg py-6 px-8 font-bold">
            TRY FOR FREE
          </Button>
          <Button variant="outline" className="border-2 border-white text-white text-lg py-6 px-8 bg-black/30 font-medium">
            CONTACT SALES
          </Button>
        </div>
        
        {/* Backed By Section */}
        <div className="mt-32 animate-fade-in-up">
          <p className="text-lg text-gray-300 uppercase tracking-wider mb-8 font-medium">Backed by</p>
          <div className="flex flex-wrap gap-16 -mt-10 items-center justify-center">
            <div className="relative h-32 w-32">
              <Image 
                src="/yc.png" 
                alt="YC" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity" 
              />
            </div>
            <div className="relative h-24 w-32">
              <Image 
                src="/100x.png" 
                alt="100x" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity" 
              />
            </div>
            <div className="relative h-32 w-32">
              <Image 
                src="/yc.png" 
                alt="YC" 
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-32 animate-fade-in-up">
          <TrustedBySection />
        </div>
      </div>
    </section>
  );
} 