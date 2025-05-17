"use client";

import FeatureCard from "./FeatureCard";
import { featureCardsData } from "./featureData";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Build <span className="bg-gradient-text">Enterprise-Grade</span> AI Agents At Scale
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title={featureCardsData[0].title}
            description={featureCardsData[0].description}
            className={featureCardsData[0].className}
          >
            <div className="mt-8 flex gap-4">
              <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="font-bold">AI</span>
              </div>
              <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="font-bold">ML</span>
              </div>
              <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="font-bold">NLP</span>
              </div>
            </div>
          </FeatureCard>
          
          <FeatureCard
            title={featureCardsData[1].title}
            description={featureCardsData[1].description}
            className={featureCardsData[1].className}
          />
          
          <FeatureCard
            title={featureCardsData[2].title}
            description={featureCardsData[2].description}
            className={`${featureCardsData[2].className} ${featureCardsData[2].rowSpan ? 'row-span-2' : ''}`}
          >
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <Image 
                  src="/Group 81.png" 
                  alt="Alchemyst Systems Logo" 
                  width={30} 
                  height={30} 
                  className="mr-2"
                />
                <span className="font-bold">Alchemyst Systems</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Context Processor</span>
                    <span className="text-green-500 text-sm">99.993% uptime</span>
                  </div>
                  <div className="flex gap-[2px] h-4 w-full">
                    {Array(90).fill(null).map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 h-full ${
                          i < 89 ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>AI Backend</span>
                    <span className="text-green-500 text-sm">100.000% uptime</span>
                  </div>
                  <div className="flex gap-[2px] h-4 w-full">
                    {Array(90).fill(null).map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 h-full bg-green-500"
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Platform Frontend</span>
                    <span className="text-green-500 text-sm">100.000% uptime</span>
                  </div>
                  <div className="flex gap-[2px] h-4 w-full">
                    {Array(90).fill(null).map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 h-full bg-green-500"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>
          
          <FeatureCard
            title={featureCardsData[3].title}
            description={featureCardsData[3].description}
            className={featureCardsData[3].className}
          >
            <div className="mt-6 flex gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">📈</div>
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">🎯</div>
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">🔍</div>
            </div>
          </FeatureCard>
          
          <FeatureCard
            title={featureCardsData[4].title}
            description={featureCardsData[4].description}
            className={featureCardsData[4].className}
          >
            <div className="mt-6 flex gap-2">
              <div className="px-3 py-1 bg-gray-800 rounded-full text-sm">OpenAI</div>
              <div className="px-3 py-1 bg-gray-800 rounded-full text-sm">Claude</div>
              <div className="px-3 py-1 bg-gray-800 rounded-full text-sm">Gemini</div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
} 