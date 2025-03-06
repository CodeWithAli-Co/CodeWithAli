"use client"
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services, fadeIn } from "@/data/constants";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">OUR SERVICES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Solutions for Your Digital Needs
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              From websites to mobile apps, we create custom digital solutions 
              tailored to your business goals and user needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/60 border-red-950/30 backdrop-blur-sm h-full overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-5">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 transform group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-red-200/60">{service.description}</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <Button
                      variant="ghost"
                      className="p-0 text-red-400 hover:text-red-300 hover:bg-transparent group"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;