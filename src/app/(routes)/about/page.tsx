import Link from "next/link";
import { Code, Users, BookOpen, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#ff6f61] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to CodeWithAli</h1>
            <p className="text-xl mb-8">Empowering the next generation of developers through personalized learning experiences</p>
            <Link href="/services" 
                  className="inline-block bg-white text-[#ff6f61] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">About CodeWithAli</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className=" leading-relaxed">
                At CodeWithAli, we believe that everyone has the potential to become a great programmer. 
                Our mission is to provide accessible, high-quality coding education that transforms beginners 
                into confident developers through personalized mentorship and hands-on practice.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Meet Your Instructor</h3>
              <p className="leading-relaxed">
                Ali is a seasoned software developer with over a decade of experience in both industry 
                and education. With expertise in full-stack development, cloud computing, and modern 
                frameworks, Ali brings real-world insights and practical knowledge to every lesson.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Code className="w-12 h-12 text-[#ff6f61] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 ">Custom Curriculum</h3>
              <p className="">Tailored learning paths designed to match your goals and pace</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-[#ff6f61] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 ">1-on-1 Mentorship</h3>
              <p className="">Personalized guidance and support throughout your learning journey</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <BookOpen className="w-12 h-12 text-[#ff6f61] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 ">Project-Based Learning</h3>
              <p className="">Build real-world projects to strengthen your portfolio</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-[#ff6f61] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Have questions? We're here to help you start your coding journey.</p>
            <div className="space-y-2">
              <p className="">Email: unfold@codewithali.com</p>
              <p className="">Schedule a free consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} CodeWithAli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}