"use client"
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioProjects, fadeIn } from "@/data/constants";

const WorkSection = () => {
  const router = useRouter();
  
  return (
    <section id="work" className="py-20 md:py-24 bg-red-950/10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/50 text-red-300 border-transparent mb-4 px-3 py-1">OUR WORK</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recent Projects
            </h2>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              Explore some of our latest work for clients across different industries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl shadow-red-950/20">
                {/* Project Image */}
                <div className="w-full h-full bg-black/80 border-2 border-red-800/30 flex items-center justify-center">
                  <p className="text-red-200/70">Project Image Placeholder</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-800/80 to-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-red-100 text-lg mb-6">{project.category}</p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-red/60 text-white bg-red-700/50 px-6 py-5 hover:bg-black hover:text-white text-base font-medium"
                    >
                      View Project
                      <MoveUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-5">
                <Badge className="bg-red-800/30 text-red-300 border-transparent text-base py-1 px-3">{project.category}</Badge>
                <h3 className="text-xl font-bold text-white mt-3">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
              text-white border-2 border-red-800/40 shadow-lg shadow-red-950/20 px-8 py-6 text-lg font-medium"
            onClick={() => router.push('/portfolio')}
          >
            View All Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;