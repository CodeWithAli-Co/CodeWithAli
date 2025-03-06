"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { testimonials, fadeIn } from "@/data/constants";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-24 relative overflow-hidden bg-red-950/10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">TESTIMONIALS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Don't just take our word for it – hear from the businesses we've helped succeed.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[240px]">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-black/60 border border-red-950/30 rounded-xl p-8 md:p-10"
          >
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3 6.2H6.8C5.8 6.2 5 7 5 8V12.5C5 13.5 5.8 14.3 6.8 14.3H9.5V16.1C9.5 17 10.6 17.5 11.3 16.8L13.9 14.2V8C13.9 7 13.1 6.2 12.1 6.2H11.3Z" fill="rgba(220, 38, 38, 0.7)"/>
                  <path d="M18 6.2H16V11.4L14.7 12.7V14.9L17.2 12.4C17.7 11.9 18 11.2 18 10.5V8C18 7 17.2 6.2 16.2 6.2H16" fill="rgba(220, 38, 38, 0.7)"/>
                </svg>
              </div>
              <p className="text-lg md:text-xl text-center mb-8">
                &ldquo;{testimonials[activeTestimonial].content}&rdquo;
              </p>
              <div className="text-center">
                <div className="font-bold text-white">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-red-400/70 text-sm">
                  {testimonials[activeTestimonial].position}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial
                    ? "bg-red-600"
                    : "bg-red-900/30 hover:bg-red-800/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;