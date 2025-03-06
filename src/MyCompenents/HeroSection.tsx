"use client"
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight, Code, Smartphone, Layers, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="pt-10 pb-20 md:pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bringing Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                Digital Vision to Life
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-200/80 mb-8 max-w-xl">
              We design and develop stunning websites and powerful applications 
              that elevate your brand and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                  text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8"
                onClick={() => router.push('/contact')}
              >
                Start Your Project
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-red-800/30 text-red-400 bg-red-950/20 hover:bg-red-950/30 hover:text-white px-8"
                onClick={() => router.push('/portfolio')}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right Side Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative bg-black/60 border border-red-950/30 rounded-xl overflow-hidden shadow-2xl shadow-red-950/20 p-2">
              <div className="grid grid-cols-2 gap-2">
                {/* Mock designs */}
                <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                    <Layers className="h-12 w-12 text-red-500/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                    <Code className="h-12 w-12 text-red-500/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                    <Smartphone className="h-12 w-12 text-red-500/60" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-red-500/20 rounded-md flex items-center justify-center">
                    <Rocket className="h-12 w-12 text-red-500/60" />
                  </div>
                </div>
              </div>
              
              <div className="mt-2 p-4 bg-gradient-to-br from-red-950/40 to-red-900/10 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-32 h-3 bg-red-800/30 rounded-full"></div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                    <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                    <div className="w-3 h-3 rounded-full bg-red-800/50"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-red-800/30 rounded-full w-full"></div>
                  <div className="h-2 bg-red-800/30 rounded-full w-5/6"></div>
                  <div className="h-2 bg-red-800/30 rounded-full w-4/6"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-800/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;