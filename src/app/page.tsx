"use client"
import ClientsSection from "@/MyCompenents/ClientsSection";
import ContactSection from "@/MyCompenents/ContactSection";
import CTASection from "@/MyCompenents/CTASection";
import Footer from "@/MyCompenents/Footer";
import HeroSection from "@/MyCompenents/HeroSection";
import ProcessSection from "@/MyCompenents/ProcessSection";
import ServicesSection from "@/MyCompenents/ServiceSection";
import TestimonialsSection from "@/MyCompenents/TestimonialSection";
import WorkSection from "@/MyCompenents/WorkSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;