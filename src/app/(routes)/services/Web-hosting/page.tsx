"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  Server,
  Shield,
  BarChart,
  Clock,
  Zap,
  Database,
  Lock,
  CheckCircle,
  RefreshCw,
  Layers,
  Cloud,
  Download,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hosting features data
const hostingFeatures = [
  {
    title: "Managed Hosting",
    description:
      "Fully managed hosting environment with expert monitoring and optimization for optimal performance.",
    icon: Server,
    features: [
      "24/7 Server Monitoring",
      "Performance Optimization",
      "Resource Management",
      "Scalable Infrastructure",
    ],
  },
  {
    title: "Security Services",
    description:
      "Comprehensive security measures to protect your website from threats and vulnerabilities.",
    icon: Shield,
    features: [
      "Malware Scanning",
      "DDoS Protection",
      "SSL Certificates",
      "Firewall Configuration",
    ],
  },
  {
    title: "Performance Monitoring",
    description:
      "Continuous monitoring and optimization to ensure your website maintains peak performance.",
    icon: BarChart,
    features: [
      "Uptime Monitoring",
      "Page Speed Analysis",
      "Load Testing",
      "Performance Reports",
    ],
  },
  {
    title: "Regular Backups",
    description:
      "Automated backup systems ensuring your data is always safe and recoverable in case of emergencies.",
    icon: Clock,
    features: [
      "Daily Automated Backups",
      "Secure Offsite Storage",
      "Quick Restoration",
      "Data Retention Policies",
    ],
  },
];

// Technology stack
const techStack = [
  {
    category: "Hosting Infrastructure",
    technologies: ["AWS", "Google Cloud", "DigitalOcean", "Linode"],
  },
  {
    category: "Content Delivery",
    technologies: ["Cloudflare", "AWS CloudFront", "Fastly", "Akamai"],
  },
  {
    category: "Database Solutions",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "CMS Platforms",
    technologies: ["WordPress", "Drupal", "Shopify", "Custom Solutions"],
  },
];

// Hosting packages
const hostingPackages = [
  {
    title: "Standard",
    price: "$49",
    period: "per month",
    description:
      "Perfect for small business websites and blogs with moderate traffic.",
    features: [
      "Shared Hosting Environment",
      "5GB Storage",
      "50GB Monthly Bandwidth",
      "Weekly Backups",
      "SSL Certificate",
      "Basic Security Protection",
      "Email Support",
    ],
  },
  {
    title: "Professional",
    price: "$129",
    period: "per month",
    description:
      "Ideal for growing businesses, e-commerce sites, and high-traffic content sites.",
    features: [
      "VPS Hosting",
      "20GB SSD Storage",
      "Unlimited Bandwidth",
      "Daily Backups",
      "Premium SSL Certificate",
      "Advanced Security Protection",
      "CDN Integration",
      "Priority Support",
      "Monthly Performance Reports",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "$299",
    period: "per month",
    description:
      "Comprehensive solution for large businesses with complex requirements and high traffic volumes.",
    features: [
      "Dedicated Hosting",
      "100GB SSD Storage",
      "Unlimited Bandwidth",
      "Real-time Backups",
      "Extended Validation SSL",
      "Enterprise-grade Security",
      "Global CDN",
      "Load Balancing",
      "24/7 Dedicated Support",
      "Custom Infrastructure",
    ],
  },
];

const WebHostingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              WEB HOSTING & MAINTENANCE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable Hosting
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 block">
                & Expert Maintenance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-200/80 mb-8">
              Keep your website secure, fast, and always online with our
              professional hosting and maintenance services backed by 24/7
              monitoring and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white"
                size="lg"
                onClick={() => router.push("/contact")}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-700 text-red-400 bg-red-900/60 hover:bg-red-950/20 hover:text-red-900"
                onClick={() => router.push("#packages")}
              >
                View Hosting Plans
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-20">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Hosting Solutions
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Beyond just server space, we provide a full suite of services to
              keep your website performing at its best.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {hostingFeatures.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-black/60 border-red-900 backdrop-blur-sm h-full group hover:border-red-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 p-3 mb-4 transform group-hover:scale-110 transition-transform">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-red-200/60 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-red-200/80 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-red-950/5 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              BENEFITS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Hosting
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Experience the peace of mind that comes with professional, managed
              hosting solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Superior Performance",
                description:
                  "Optimized server configurations and premium hardware deliver lightning-fast loading times for your visitors.",
              },
              {
                icon: Lock,
                title: "Enhanced Security",
                description:
                  "Advanced security protocols and continuous monitoring protect your site from threats and vulnerabilities.",
              },
              {
                icon: Clock,
                title: "Exceptional Uptime",
                description:
                  "Our robust infrastructure and proactive monitoring ensures your website stays online 99.9% of the time.",
              },
              {
                icon: RefreshCw,
                title: "Regular Updates",
                description:
                  "Automatic updates for your CMS, plugins, and server software keep your site secure and functioning smoothly.",
              },
              {
                icon: Database,
                title: "Seamless Scalability",
                description:
                  "Easily scale your resources as your business grows, without service interruptions or technical headaches.",
              },
              {
                icon: Shield,
                title: "Data Protection",
                description:
                  "Automated backup systems ensure your valuable data is always protected and quickly recoverable.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-black/60 border border-red-900 rounded-xl p-6 h-full backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-900 p-3 mb-4">
                    <benefit.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-red-200/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              TECHNOLOGY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Technology Stack
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              We leverage industry-leading technologies to deliver reliable,
              secure, and high-performance hosting solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/60 border-red-900 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">
                      {tech.category}
                    </h3>
                    <ul className="space-y-2">
                      {tech.technologies.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          <span className="text-red-200/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-red-950/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              OUR PROCESS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Maintain Your Website
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures your website remains secure,
              updated, and performing optimally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {[
              {
                icon: Cloud,
                step: "01",
                title: "Server Monitoring",
                description:
                  "We continuously monitor your server for uptime, resource usage, and potential issues to ensure optimal performance.",
              },
              {
                icon: RefreshCw,
                step: "02",
                title: "Regular Updates",
                description:
                  "We perform regular updates to your CMS, plugins, themes, and server software to maintain security and functionality.",
              },
              {
                icon: Shield,
                step: "03",
                title: "Security Scans",
                description:
                  "We conduct regular security scans to identify and remediate vulnerabilities before they can be exploited.",
              },
              {
                icon: BarChart,
                step: "04",
                title: "Performance Testing",
                description:
                  "We regularly test your site's performance and make necessary optimizations to improve speed and user experience.",
              },
              {
                icon: Download,
                step: "05",
                title: "Backup Management",
                description:
                  "We maintain regular backups of your site and database, ensuring your data is always protected and recoverable.",
              },
              {
                icon: Globe,
                step: "06",
                title: "Proactive Support",
                description:
                  "We address potential issues before they impact your site, and provide fast resolution when problems arise.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line for desktop */}
                {index < 5 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+10px)] w-full h-0.5 bg-gradient-to-r from-red-800/50 to-red-900/10"></div>
                )}

                <div className="bg-black/60 border border-red-900 rounded-xl p-6 backdrop-blur-sm relative z-10">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-red-950/30 rounded px-2 py-0.5 text-xs font-bold text-red-400 mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white text-center">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-red-200/70 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="packages" className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Badge className="bg-red-900/30 text-red-400 border-transparent mb-4 px-3 py-1">
              PRICING
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hosting & Maintenance Plans
            </h2>
            <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
              Choose the hosting solution that best fits your business needs and
              budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className={`bg-black/60 backdrop-blur-sm h-full flex flex-col ${
                    pkg.highlighted
                      ? "border-red-600 shadow-lg shadow-red-950/30"
                      : "border-red-900"
                  }`}
                >
                  <CardContent className="p-6 flex-grow flex flex-col">
                    {pkg.highlighted && (
                      <Badge className="bg-red-700 text-white border-transparent self-start mb-4">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.title}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-red-400">
                        {pkg.price}
                      </span>
                      <span className="text-red-200/60 ml-1">{pkg.period}</span>
                    </div>
                    <p className="text-red-200/70 mb-6">{pkg.description}</p>

                    <div className="mt-auto">
                      <div className="border-t border-red-900 pt-6 mb-6">
                        <h4 className="font-bold text-white mb-4">
                          What's Included:
                        </h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                              <span className="text-red-200/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={`w-full ${
                          pkg.highlighted
                            ? "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white"
                            : "bg-black border border-red-800/30 text-red-400 hover:bg-red-950/20"
                        }`}
                        onClick={() => router.push("/contact")}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto bg-black/60 border border-red-900 rounded-xl p-8 md:p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Reliable Hosting?
            </h2>
            <p className="text-lg text-red-200/70 mb-8 max-w-2xl mx-auto">
              Get in touch today to discuss your hosting needs and learn how our
              solutions can help your business maintain a secure, fast, and
              reliable online presence.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 
                text-white border border-red-800/30 shadow-lg shadow-red-950/20 px-8"
              onClick={() => router.push("/contact")}
            >
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebHostingPage;
