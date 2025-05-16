"use client";

import Image from "next/image";

interface StepProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const Step = ({ number, title, description, image }: StepProps) => {

  return (
    <div className={`p-6 border border-border rounded-lg animate-fade-in`}>
      <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-text">{number}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Image 
        src={image} 
        alt={title} 
        width={1350}
        height={400}
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Build",
      description: "Utilize the voice AI API and our intuitive agent builder to create custom voice AI agents effortlessly.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      number: "02",
      title: "Test",
      description: "Perform comprehensive agent testing with built-in test LLM features to ensure seamless handling of edge cases.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      number: "03",
      title: "Deploy",
      description: "Easily deploy your agents to phone calls, web calls, SMS, and more.",
      image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      number: "04",
      title: "Monitor",
      description: "Track success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Value</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 