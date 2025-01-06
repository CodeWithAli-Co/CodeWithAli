"use client";

import Link from "next/link";
// The useRouter hook should be imported from next/navigation
// and not next/router when using the App Router
import { useRouter } from "next/navigation";
import { useFormDataStore } from "../../components/contact";

const services = [
  {id: 'teaching', name: 'Coding Education', description: 'Learn to code with personalized tutoring sessions'},
  {id: 'debugging', name: 'Bug Fixing', description: 'Get help with technical issues and bugs'},
  {id: 'consulting', name: 'Technical Consulting', description: 'Expert advice on your tech projects'},
  {id: 'development', name: 'Custom Development', description: 'Full application development services'}
];


export default function Services() {
  const router = useRouter();
  const { service, setService } = useFormDataStore();

  return (
    <>
      <section className="courses" id="services">
        <h2>Our Services</h2>
        <div className="course-grid">
          {/* <div className="course-card" onClick={() => router.push('/services/python')}>
            <h3>Introduction to Python</h3>
            <p>
              Learn the basics of Python programming in this comprehensive
              course.
            </p>
          </div>
          <div className="course-card" onClick={() => router.push('/services/webdev')}>
            <h3>Web Development Bootcamp</h3>
            <p>
              Master the fundamentals of web development with HTML, CSS, and
              JavaScript.
            </p>
          </div>
          <div className="course-card" onClick={() => router.push('/services/datascience')}>
            <h3>Data Science with Python</h3>
            <p>
              Get started with data science and learn how to analyze data using
              Python.
            </p>
          </div>
          <div className="course-card" onClick={() => router.push('/services/java-begin')}>
            <h3>Learning Java for Beginners</h3>
            <p>
              Once you feel like you have advanced in Python, it's time to take
              it up to the next level and learn the more advanced language,
              Java.
            </p>
          </div> */}
          <div className="container">
          <div>
        <label className="block text-sm font-medium mb-2">
          Service Needed:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((serv) => (
            <div
              key={serv.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                service === serv.id
                  ? 'border-blue-500 bg-blue-50 text-black'
                  : 'hover:border-gray-400'
              }`}
              onClick={() => setService(serv.id)}
            >
              <h3 className="font-medium">{serv.name}</h3>
              <p className="text-sm text-gray-600">{serv.description}</p>
            </div>
          ))}
        </div>
      </div>

          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <Link className="btn-submit" href="/#contact">
          Click Here
        </Link>
      </section>
      <footer>&copy; 2025 CodeWithAli. All rights reserved.</footer>
    </>
  );
}
