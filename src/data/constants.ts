import {
    Code,
    Smartphone,
    Layers,
    Server,
    Search,
    BriefcaseBusiness,
    ShoppingBag,
    School,
    MessageSquare,
    Coffee,
    Palette,
    Rocket
  } from "lucide-react";
  
  // Animation variants
  export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Services data
  export const services = [
    {
      title: "Website Development",
      description: "Custom-designed responsive websites optimized for performance and conversions",
      icon: Code,
      color: "from-red-600 to-red-800"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      color: "from-red-700 to-red-900"
    },
    {
      title: "UI/UX Design",
      description: "User-focused designs that enhance engagement and simplify interactions",
      icon: Palette,
      color: "from-red-800 to-red-950"
    },
    {
      title: "E-commerce Solutions",
      description: "Fully-featured online stores with secure payment processing and inventory management",
      icon: ShoppingBag,
      color: "from-red-600 to-red-800"
    },
    {
      title: "SEO Optimization",
      description: "Data-driven strategies to improve visibility and ranking in search engines",
      icon: Search,
      color: "from-red-700 to-red-900"
    },
    {
      title: "Web Hosting & Maintenance",
      description: "Reliable hosting services with regular updates, backups, and security monitoring",
      icon: Server,
      color: "from-red-800 to-red-950"
    }
  ];
  
  // Client industries
  export const industries = [
    { name: "Business", icon: BriefcaseBusiness },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "Education", icon: School },
    { name: "Healthcare", icon: MessageSquare },
    { name: "Real Estate", icon: Coffee },
    { name: "Technology", icon: Server }
  ];
  
  // Portfolio projects
  export const portfolioProjects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/portfolio-1.jpg" 
    },
    {
      title: "Fitness Mobile App",
      category: "Mobile Development",
      image: "/portfolio-2.jpg"
    },
    {
      title: "Corporate Website",
      category: "UI/UX Design",
      image: "/portfolio-3.jpg"
    }
  ];
  
  // Testimonials
  export const testimonials = [
    {
      name: "Alex Thompson",
      position: "CEO, TechStart Inc.",
      content: "They delivered our company website ahead of schedule and beyond our expectations. Their attention to detail and responsive design expertise made all the difference."
    },
    {
      name: "Sarah Chen",
      position: "Marketing Director, StyleShop",
      content: "Our e-commerce site has seen a 45% increase in conversions since the redesign. Their team understood our brand and implemented exactly what we needed."
    },
    {
      name: "Marcus Johnson",
      position: "Founder, HealthApp",
      content: "From concept to launch, they guided us through the entire app development process with expertise and professionalism. The final product exceeded our vision."
    }
  ];
  
  // Process steps
  export const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and requirements through in-depth consultations.",
      icon: Search
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create wireframes and visual mockups that align with your brand identity.",
      icon: Palette
    },
    {
      number: "03",
      title: "Development",
      description: "Our developers build your solution with clean code and cutting-edge technologies.",
      icon: Code
    },
    {
      number: "04",
      title: "Deployment",
      description: "We launch your project, provide training, and offer ongoing support as needed.",
      icon: Rocket
    }
  ];