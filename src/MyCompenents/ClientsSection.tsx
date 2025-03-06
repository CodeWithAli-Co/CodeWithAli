"use client"
import React from "react";
import { motion } from "framer-motion";
import { industries } from "@/data/constants";

const ClientsSection = () => {
  return (
    <section className="py-12 bg-black/80 border-y border-red-950/20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-8">
          <p className="text-red-300/60 text-sm uppercase tracking-wider">Trusted by businesses across industries</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-red-950/20 rounded-lg flex items-center justify-center mb-3">
                <industry.icon className="h-6 w-6 text-red-500/70" />
              </div>
              <span className="text-red-200/60 text-sm">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;