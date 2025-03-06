"use client"
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeIn } from "@/data/constants";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/50 text-red-300 border-transparent mb-4 px-3 py-1">CONTACT US</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-red-200 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours with a free consultation.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-black border-2 border-red-800/40 rounded-xl p-8 md:p-10 shadow-xl shadow-red-950/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-red-200 font-medium mb-2">Your Name</label>
                  <Input 
                    id="name"
                    className="bg-red-950/20 border-red-800/40 text-white focus:border-red-600 h-12 text-base w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-red-200 font-medium mb-2">Email Address</label>
                    <Input 
                      id="email"
                      type="email"
                      className="bg-red-950/20 border-red-800/40 text-white focus:border-red-600 h-12 text-base w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-red-200 font-medium mb-2">Service Needed</label>
                    <select 
                      id="service"
                      className="w-full bg-red-950/20 border border-red-800/40 text-white focus:border-red-600 rounded-md h-12 text-base px-3"
                    >
                      <option value="" className="bg-black">Select a service</option>
                      <option value="website" className="bg-black">Website Development</option>
                      <option value="app" className="bg-black">Mobile App Development</option>
                      <option value="design" className="bg-black">UI/UX Design</option>
                      <option value="ecommerce" className="bg-black">E-commerce Solutions</option>
                      <option value="seo" className="bg-black">SEO Optimization</option>
                      <option value="hosting" className="bg-black">Web Hosting & Maintenance</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-red-200 font-medium mb-2">Project Details</label>
                  <Textarea 
                    id="message"
                    className="bg-red-950/20 border-red-800/40 text-white focus:border-red-600 h-40 text-base w-full"
                    placeholder="Tell us about your project requirements and goals..."
                  />
                </div>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 
                  text-white border border-red-700/40 shadow-lg shadow-red-950/20 px-10 py-6 text-lg font-medium"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;