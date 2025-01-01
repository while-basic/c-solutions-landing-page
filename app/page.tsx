'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChartBarIcon,
  CpuChipIcon,
  UserGroupIcon,
  ArrowRightIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "AI Automation",
    description: "Streamline repetitive tasks and save time with intelligent automation solutions tailored for your business workflow.",
    icon: CpuChipIcon,
  },
  {
    title: "Custom AI Solutions",
    description: "Tailored applications designed specifically for your unique business needs and challenges.",
    icon: ChartBarIcon,
  },
  {
    title: "AI Consultation",
    description: "Expert guidance to help you understand AI's potential and how it can benefit your specific business case.",
    icon: UserGroupIcon,
  },
];

const portfolio = [
  {
    title: "Content Generation AI",
    description: "An AI tool that helps businesses create engaging social media content 40% faster.",
    image: "/images/ai-content.jpg",
    tags: ["AI", "Content", "Automation"]
  },
  {
    title: "Marketing Analytics",
    description: "AI-powered analytics dashboard for data-driven marketing decisions.",
    image: "/images/ai-analytics.jpg",
    tags: ["Analytics", "Dashboard", "AI"]
  },
  {
    title: "Process Automation",
    description: "Automated workflow system that reduced manual tasks by 75%.",
    image: "/images/ai-automation.jpg",
    tags: ["Automation", "Workflow", "AI"]
  },
  {
    title: "Customer Service AI",
    description: "24/7 AI customer service bot with 95% satisfaction rate.",
    image: "/images/ai-customer-service.jpg",
    tags: ["AI", "Support", "Chat"]
  }
];

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-black antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="AI Technology Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight">
              AI Solutions for 
              <br />
              <span className="text-white">
                Small Businesses
              </span>
            </h1>
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 font-light tracking-wide max-w-2xl">
                Simplifying processes and enhancing efficiency through intelligent automation
              </p>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Helping businesses automate tasks and grow through tailored AI-driven applications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center h-14 px-8 font-medium text-black bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule a Free Consultation
              </Link>
              <button 
                type="button"
                className="inline-flex items-center justify-center h-14 px-8 gap-2 text-white border border-white/20 hover:bg-white/5 transition-colors duration-300"
              >
                <PlayCircleIcon className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/profile.jpg"
                alt="Christopher Celaya"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-3xl font-medium text-white tracking-tight">About Me</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                I&apos;m Christopher Celaya, a passionate developer building AI solutions for small businesses. As a one-person team, I specialize in custom AI applications tailored to your needs—whether it&apos;s automating workflows or improving marketing strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-24">
            <h2 className="text-3xl font-medium text-white mb-8 tracking-tight">Services</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Leverage our expertise in artificial intelligence to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                  <Image
                    src={`/images/service-${index + 1}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <service.icon className="h-8 w-8 text-white mb-8" />
                <h3 className="text-lg font-medium text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-24">
            <h2 className="text-3xl font-medium text-white mb-8 tracking-tight">Portfolio</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Check out some of our recent AI projects and solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-medium text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs text-white/70 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors group-hover:translate-x-1 duration-300">
                    <span className="mr-2">View Project</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-black border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <h2 className="text-3xl font-medium text-white tracking-tight">Let&apos;s Discuss Your Business Needs</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                Ready to transform your business? Let&apos;s discuss how our solutions can drive your success.
              </p>
              <div className="space-y-6 pt-4">
                <p className="flex items-center gap-4 text-lg text-gray-300">
                  <span className="text-2xl" aria-label="Location">📍</span> El Paso, TX
                </p>
                <p className="flex items-center gap-4 text-lg text-gray-300">
                  <span className="text-2xl" aria-label="Phone">📞</span> (915) 270-0237
                </p>
                <p className="flex items-center gap-4 text-lg text-gray-300">
                  <span className="text-2xl" aria-label="Email">✉️</span> chris@chriscelaya.com
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/[0.03] backdrop-blur-sm p-8"
            >
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full h-14 px-4 bg-transparent border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full h-14 px-4 bg-transparent border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full p-4 bg-transparent border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition duration-300"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full h-14 bg-white hover:bg-gray-100 text-black font-medium transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <h3 className="text-lg font-medium text-white mb-6">
                C-Solutions
              </h3>
              <p className="text-gray-400 leading-relaxed">Transforming businesses through intelligent innovation</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-6">Connect</h4>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-24 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 C-Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
