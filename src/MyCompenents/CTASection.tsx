"use client"
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/data/constants";

const CTASection = () => {
  const router = useRouter();
  
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-red-950/10 to-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div 
          className="max-w-4xl mx-auto bg-black/60 border border-red-950/30 rounded-xl p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
            Whether you need a website, mobile app, or complete digital strategy, 
            we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              onClick={() => router.push('/about')}
            >
              Learn About Us
            </Button>
          </div>
          
          <div className="flex items-center justify-center mt-8 text-red-200/60">
            <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
            <span className="text-sm">Free Consultation</span>
            <span className="mx-4">•</span>
            <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
            <span className="text-sm">Expert Team</span>
            <span className="mx-4">•</span>
            <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
            <span className="text-sm">Ongoing Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;