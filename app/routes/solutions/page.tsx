'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChartBarIcon,
  CpuChipIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: "Enterprise AI Strategy",
    description: "Develop a comprehensive AI roadmap aligned with your business goals. Our strategic planning ensures successful AI adoption across your organization.",
    icon: CpuChipIcon,
    features: [
      "AI Readiness Assessment",
      "Technology Stack Planning",
      "ROI Analysis",
      "Implementation Roadmap"
    ]
  },
  {
    title: "Process Automation",
    description: "Transform manual workflows into efficient automated processes. Our intelligent automation solutions reduce costs and eliminate human error.",
    icon: ChartBarIcon,
    features: [
      "Workflow Analysis",
      "RPA Implementation",
      "Process Optimization",
      "Performance Monitoring"
    ]
  },
  {
    title: "Data Analytics & Insights",
    description: "Turn your data into actionable insights. Our advanced analytics platforms help you make data-driven decisions with confidence.",
    icon: UserGroupIcon,
    features: [
      "Predictive Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Real-time Reporting"
    ]
  },
  {
    title: "Cloud AI Integration",
    description: "Seamlessly integrate AI capabilities with your cloud infrastructure. Scale your AI solutions efficiently and securely.",
    icon: CloudArrowUpIcon,
    features: [
      "Cloud Architecture Design",
      "API Integration",
      "Scalability Planning",
      "Performance Optimization"
    ]
  },
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models designed for your specific needs. From prediction to optimization, we build solutions that deliver results.",
    icon: CodeBracketIcon,
    features: [
      "Custom Model Development",
      "Model Training & Validation",
      "Deployment Strategy",
      "Continuous Learning"
    ]
  },
  {
    title: "Natural Language AI",
    description: "Harness the power of language processing. Our NLP solutions enable intelligent communication and text analysis.",
    icon: ChatBubbleBottomCenterTextIcon,
    features: [
      "Sentiment Analysis",
      "Text Classification",
      "Chatbot Development",
      "Document Processing"
    ]
  },
  {
    title: "Computer Vision Systems",
    description: "Advanced image and video analysis solutions. Automate visual inspection and enhance decision-making processes.",
    icon: ChartBarIcon,
    features: [
      "Object Detection",
      "Image Classification",
      "Video Analytics",
      "Quality Control"
    ]
  },
  {
    title: "AI Security & Compliance",
    description: "Ensure your AI implementations are secure and compliant. We prioritize data protection and regulatory compliance.",
    icon: ShieldCheckIcon,
    features: [
      "Security Assessment",
      "Compliance Monitoring",
      "Risk Management",
      "Data Protection"
    ]
  }
];

export default function Solutions() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-black antialiased">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-black text-white">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl font-medium tracking-tight mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
                Our Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-white/10 hover:border-sky-200/20 transition-all duration-300"
              >
                <solution.icon className="h-8 w-8 text-sky-200 mb-8" />
                <h2 className="text-lg font-medium text-white mb-4">{solution.title}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">{solution.description}</p>
                <div className="space-y-4">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <ArrowRightIcon className="h-4 w-4 text-sky-200" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-medium tracking-tight mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Let&apos;s discuss how our AI solutions can help you achieve your business goals
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center h-14 px-8 font-medium text-black bg-gradient-to-r from-white via-gray-100 to-gray-200 hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 