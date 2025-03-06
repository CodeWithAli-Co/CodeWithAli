"use client";

// import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormDataStore } from "../../components/serviceform";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, FileCode, HeartHandshake, Send } from "lucide-react";

const services = [
  {
    id: 'teaching',
    name: 'Coding Education',
    description: 'Learn to code with personalized tutoring sessions',
    longDescription: 'Transform your coding journey with our expert-led tutoring sessions. Whether you\'re a beginner or looking to advance your skills, our personalized approach ensures you learn at your own pace while mastering industry-standard practices.',
    route: 'education',
    image: '/bug.jpg',
    icon: Code,
    color: "from-red-600 to-red-800"
  },
  {
    id: 'debugging',
    name: 'Bug Fixing',
    description: 'Get help with technical issues and bugs',
    longDescription: 'Facing frustrating bugs or technical challenges? Our experienced developers will help identify and resolve issues efficiently, ensuring your project stays on track. We provide detailed explanations of solutions to prevent future occurrences.',
    route: 'bugfix',
    image: '/bug.jpg',
    icon: Terminal,
    color: "from-red-700 to-red-900"
  },
  {
    id: 'consulting',
    name: 'Technical Consulting',
    description: 'Expert advice on your tech projects',
    longDescription: 'Leverage our expertise to make informed decisions about your technology stack, architecture, and development processes. We provide strategic guidance to help you build scalable, maintainable solutions.',
    route: 'techconsult',
    image: '/consulting.png',
    icon: HeartHandshake,
    color: "from-red-800 to-red-950"
  },
  {
    id: 'development',
    name: 'Custom Development',
    description: 'Full application development services',
    longDescription: 'From concept to deployment, we build custom applications tailored to your specific needs. Our full-stack development team ensures high-quality, scalable solutions using modern technologies and best practices.',
    route: 'webdev',
    image: '/consulting.png',
    icon: FileCode,
    color: "from-red-600 to-red-800"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Services() {
  const router = useRouter();
  const { service, setService } = useFormDataStore();

  const goToService = (servid: string, route: string) => {
    setService(servid);
    router.push(`/services/${route}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">OUR SERVICES</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Solutions for Your 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                Digital Challenges
              </span>
            </h1>
            <p className="text-lg text-red-200/80 max-w-2xl mx-auto">
              From code education to custom development, we offer comprehensive services
              to help you succeed in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((serv) => {
              const ServiceIcon = serv.icon;
              
              return (
                <motion.div
                  key={serv.id}
                  variants={fadeIn}
                  className="h-full"
                  onClick={() => goToService(serv.id, serv.route)}
                >
                  <Card className="bg-black/60 border-red-950/30 backdrop-blur-sm h-full overflow-hidden group transition-all duration-300 hover:border-red-800/50 hover:shadow-lg hover:shadow-red-950/20 cursor-pointer">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-64 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
                        ></div>
                        <img 
                          src={serv.image} 
                          alt={serv.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br ${serv.color} p-3 z-20`}>
                          <ServiceIcon className="w-full h-full text-white" />
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-xl font-bold text-white mb-3">{serv.name}</h2>
                        <p className="text-red-200/80 mb-4">{serv.description}</p>
                        <p className="text-red-200/60 text-sm mb-6 flex-grow">
                          {serv.longDescription}
                        </p>
                        <div className="mt-auto">
                          <Button
                            variant="ghost"
                            className="p-0 text-red-400 hover:text-red-300 hover:bg-transparent group"
                          >
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/10 to-black mt-auto">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto bg-black/60 border border-red-950/30 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-red-200/70 mb-8 max-w-2xl mx-auto">
              Reach out to discuss your project needs or schedule a consultation with our experts.
            </p>
            <Link href="/#contact">
              <Button 
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                  text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8 py-6 text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Contact Us Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}