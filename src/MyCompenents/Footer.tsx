"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const router = useRouter();
  
  return (
    <footer className="py-12 border-t border-red-950/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                CodeWithAli
              </span>
            </div>
            <p className="text-sm text-red-200/60 mb-4">
              We design and develop digital experiences that help businesses and individuals succeed online.
            </p>
            <div className="flex space-x-4">
              {/* Social icons */}
              {[1, 2, 3, 4].map((i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-red-950/30 flex items-center justify-center hover:bg-red-900/50 transition-colors"
                >
                  <span className="text-xs text-red-400">{i}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Website Development", "Mobile App Development", "UI/UX Design", "E-commerce", "SEO", "Web Hosting"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-red-200/60 hover:text-red-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Portfolio", "Process", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-red-200/60 hover:text-red-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-red-200/60">123 Web Street, Digital City</li>
              <li>
                <a href="mailto:info@codewithali.com" className="text-red-200/60 hover:text-red-300 transition-colors">
                  info@codewithali.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-red-200/60 hover:text-red-300 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 border-red-800/30 text-red-400 hover:bg-red-950/20"
                  onClick={() => router.push('/contact')}
                >
                  Get a Quote
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-950/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-red-200/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} CodeWithAli. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-red-200/60 hover:text-red-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-red-200/60 hover:text-red-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-red-200/60 hover:text-red-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;