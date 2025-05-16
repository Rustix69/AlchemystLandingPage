"use client";

import FeatureCard from "./FeatureCard";
import { featureCardsData } from "./featureData";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Build <span className="bg-gradient-text">Enterprise-Grade</span> Agents At Scale
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
                <div className="h-6 w-6 bg-blue-purple-gradient rounded-md flex items-center justify-center mr-2">
                  <div className="h-3 w-3 bg-white rounded-sm"></div>
                </div>
                <span className="font-bold">Retell AI</span>
              </div>
              
              <div className="bg-green-900/20 p-3 rounded-md mb-6 flex items-center border border-green-700/30">
                <div className="h-4 w-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-400">All Systems</span>
              </div>
              
              <div className="mb-2">API Uptime</div>
              <div className="h-2 bg-green-500 rounded-full mb-1"></div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span></span>
                <span>99.99%</span>
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