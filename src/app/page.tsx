"use client"
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Code,
  BookOpen,
  Star,
  Send,
  ArrowRight,
  User,
  Database,
  Globe,
  Coffee,
  MessageSquare,
  ExternalLink,
  CheckCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

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
      staggerChildren: 0.1
    }
  }
};

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-red-200">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-black to-red-950/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-fixed opacity-10"></div>
        
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.span 
              className="inline-block bg-red-900/30 text-red-400 px-4 py-1 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to Our Platform
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent mb-6"
              variants={fadeIn}
            >
              Streamline Your Workflow with Our All-in-One Solution
            </motion.h1>
            <motion.p 
              className="text-xl text-red-200/70 mb-8"
              variants={fadeIn}
            >
              Experience enhanced productivity with our integrated tools for team collaboration, task management, and data analytics.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn}
            >
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-red-950 to-red-900 
                hover:from-red-900 hover:to-red-800 text-white border border-red-800/30 
                shadow-lg shadow-red-950/20 transition-all duration-300 
                hover:scale-[1.02] active:scale-[0.98] px-8 py-6 text-lg"
                onClick={() => router.push('/dashboard')}
              >
                <span className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-red-800/30 text-red-200 hover:bg-red-950/20 px-8 py-6 text-lg"
                onClick={() => router.push('/about')}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-96 bg-red-900/10 rounded-2xl overflow-hidden border border-red-900/20 shadow-2xl shadow-red-950/30">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/60 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
              </div>
              
              {/* Dashboard Preview */}
              <div className="p-10 pt-16">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/40 border border-red-900/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium">Total Users</h3>
                      <Users className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                  <div className="bg-black/40 border border-red-900/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium">Active Projects</h3>
                      <Code className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="text-2xl font-bold">26</p>
                  </div>
                </div>
                
                <div className="bg-black/40 border border-red-900/30 rounded-lg p-4 mb-6">
                  <h3 className="text-sm font-medium mb-2">Recent Tasks</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-red-900/10 rounded-md">
                      <span className="text-xs">API Integration</span>
                      <Badge variant="outline" className="bg-amber-500/20 text-amber-400">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-red-900/10 rounded-md">
                      <span className="text-xs">Dashboard Redesign</span>
                      <Badge variant="outline" className="bg-emerald-500/20 text-emerald-400">Completed</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 border border-red-900/30 rounded-lg h-24 flex items-center justify-center">
                  <div className="w-3/4 h-4 bg-red-900/30 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-gradient-to-r from-red-900 to-red-700"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-5 -right-5 bg-black/60 border border-red-900/30 rounded-lg p-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database className="h-6 w-6 text-red-500" />
            </motion.div>
            <motion.div 
              className="absolute bottom-10 -left-5 bg-black/60 border border-red-900/30 rounded-lg p-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Globe className="h-6 w-6 text-red-500" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-red-200/50 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-red-200/30 rounded-full flex justify-center">
              <motion.div 
                className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-red-500 font-medium">OUR FEATURES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Powerful Tools for Your Business
            </h2>
            <Separator className="w-20 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-6" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="h-full bg-black/40 border-red-900/30 hover:bg-red-950/10 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Team Collaboration</h3>
                  <p className="text-red-200/70 mb-4">
                    Work seamlessly with your team members in real-time, assign tasks, and track progress efficiently.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-red-400 hover:text-red-300 hover:bg-red-950/30 pl-0 gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="h-full bg-black/40 border-red-900/30 hover:bg-red-950/10 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
                  <p className="text-red-200/70 mb-4">
                    Gain valuable insights with comprehensive analytics and visualization tools to make informed decisions.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-red-400 hover:text-red-300 hover:bg-red-950/30 pl-0 gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card className="h-full bg-black/40 border-red-900/30 hover:bg-red-950/10 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">API Integration</h3>
                  <p className="text-red-200/70 mb-4">
                    Connect seamlessly with popular third-party services and extend your platform's capabilities.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-red-400 hover:text-red-300 hover:bg-red-950/30 pl-0 gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-red-500 font-medium">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Comprehensive Solutions
            </h2>
            <Separator className="w-20 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-6" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="bg-black/40 border border-red-900/30 rounded-xl p-6 hover:bg-red-950/10 hover:border-red-900/50 transition-all duration-200">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Development Tools</h3>
                <p className="text-red-200/70">
                  Powerful development environments and tools for your team to build robust applications.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-black/40 border border-red-900/30 rounded-xl p-6 hover:bg-red-950/10 hover:border-red-900/50 transition-all duration-200">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
                <p className="text-red-200/70">
                  Comprehensive and well-structured documentation to help your team get up to speed quickly.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-black/40 border border-red-900/30 rounded-xl p-6 hover:bg-red-950/10 hover:border-red-900/50 transition-all duration-200">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
                <p className="text-red-200/70">
                  Dedicated support team available to assist you with any questions or issues you may encounter.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-black/40 border border-red-900/30 rounded-xl p-6 hover:bg-red-950/10 hover:border-red-900/50 transition-all duration-200">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Customization</h3>
                <p className="text-red-200/70">
                  Tailor our solutions to fit your specific business needs with customization options.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-red-500 font-medium">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              What Our Clients Say
            </h2>
            <Separator className="w-20 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-6" />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="bg-black/60 border border-red-900/30 rounded-xl p-6 relative">
                <div className="absolute -top-5 -left-5">
                  <div className="p-2 bg-red-900 rounded-full text-black">
                    <Star className="h-5 w-5 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-red-200/80 italic mb-6">
                    "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features have significantly improved our productivity."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-900/30 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-red-300 font-bold">JD</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">John Doe</h4>
                      <p className="text-red-200/60 text-sm">CTO, Tech Innovations</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-black/60 border border-red-900/30 rounded-xl p-6 relative">
                <div className="absolute -top-5 -left-5">
                  <div className="p-2 bg-red-900 rounded-full text-black">
                    <Star className="h-5 w-5 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-red-200/80 italic mb-6">
                    "The analytics tools provided deep insights into our operations that we never had before. It's made our decision-making process far more effective."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-900/30 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-red-300 font-bold">SS</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Sarah Smith</h4>
                      <p className="text-red-200/60 text-sm">Data Analyst, DataCorp</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="bg-black/60 border border-red-900/30 rounded-xl p-6 relative">
                <div className="absolute -top-5 -left-5">
                  <div className="p-2 bg-red-900 rounded-full text-black">
                    <Star className="h-5 w-5 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-red-200/80 italic mb-6">
                    "Customer support has been exceptional. Any issues we've encountered were resolved quickly, and the team has been responsive and helpful throughout."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-900/30 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-red-300 font-bold">MJ</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Michael Johnson</h4>
                      <p className="text-red-200/60 text-sm">Project Manager, BuildFast</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-red-500 font-medium">CONTACT US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Get in Touch
              </h2>
              <Separator className="w-20 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-6" />
              <p className="text-red-200/70 mt-6 max-w-2xl mx-auto">
                Have questions or ready to get started? Reach out to our team and we'll be happy to assist you.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 border border-red-900/30 rounded-xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-red-200 block">Name</label>
                    <Input 
                      className="bg-black/40 border-red-950/30 text-red-200 focus:border-red-700 focus:ring-red-900/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-red-200 block">Email</label>
                    <Input 
                      className="bg-black/40 border-red-950/30 text-red-200 focus:border-red-700 focus:ring-red-900/50"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-red-200 block">Subject</label>
                    <Input 
                      className="bg-black/40 border-red-950/30 text-red-200 focus:border-red-700 focus:ring-red-900/50"
                      placeholder="Enter subject"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-red-200 block">Message</label>
                    <Textarea 
                      className="bg-black/40 border-red-950/30 text-red-200 focus:border-red-700 focus:ring-red-900/50 h-32"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button 
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-red-950 to-red-900 
                    hover:from-red-900 hover:to-red-800 text-white border border-red-800/30 
                    shadow-lg shadow-red-950/20 transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center">
                <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Chat With Us</h3>
                <p className="text-red-200/70">
                  Our support team is available 24/7 to assist you.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="text-center">
                <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-red-200/70">
                  support@company.com
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="text-center">
                <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-red-200/70">
                  123 Business Ave, Tech City
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block bg-red-900/30 text-red-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-red-200/70 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have improved their productivity with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-red-950 to-red-900 
                hover:from-red-900 hover:to-red-800 text-white border border-red-800/30 
                shadow-lg shadow-red-950/20 transition-all duration-300 
                hover:scale-[1.02] active:scale-[0.98] px-8 py-6 text-lg"
                onClick={() => router.push('/signup')}
              >
                <span className="absolute inset-0 bg-red-700/10 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-red-800/30 text-red-200 hover:bg-red-950/20 px-8 py-6 text-lg"
                onClick={() => router.push('/demo')}
              >
                Request Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-red-200/60">
              <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">No credit card required</span>
              <span className="mx-4">•</span>
              <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">14-day free trial</span>
              <span className="mx-4">•</span>
              <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-red-950/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent mb-6">Company Name</h3>
              <p className="text-red-200/60 mb-6">
                Empowering teams with powerful tools and seamless collaboration.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-red-900/20 hover:bg-red-900/40 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-red-900/20 hover:bg-red-900/40 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-red-900/20 hover:bg-red-900/40 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">About</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Careers</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Blog</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Community</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-red-200/60 hover:text-red-200 transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-red-950/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-red-200/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-red-200/60 hover:text-red-200 text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-red-200/60 hover:text-red-200 text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-red-200/60 hover:text-red-200 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;