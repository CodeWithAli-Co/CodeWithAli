"use client"
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeIn, processSteps } from "@/data/constants";

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute -top-40 left-40 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">OUR PROCESS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures clear communication and outstanding results for every project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-black/60 border border-red-950/30 rounded-xl p-6 h-full">
                <div className="absolute -top-5 -left-2">
                  <span className="text-5xl font-bold text-red-950/70">{step.number}</span>
                </div>
                <div className="pt-6">
                  <div className="mb-4 flex items-center">
                    <step.icon className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-red-200/60">{step.description}</p>
                </div>
              </div>
              
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform translate-x-full">
                  <ArrowRight className="w-6 h-6 text-red-700/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;