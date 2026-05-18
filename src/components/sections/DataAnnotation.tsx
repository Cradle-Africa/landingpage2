"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Brain, Target, Shield, Users, Zap, BarChart, Layers, Eye, MessageSquare, Activity, Cpu, Building2, Heart, Bot, LineChart } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/**
 * DataAnnotation component - BigCradle Intelligent Data Operations page
 * Contains all sections for the Data Annotation Services page
 */
export function DataAnnotation() {
  return (
    <div className="bg-[#FCFCFC] relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BrandStrip />
      <IntroSection />
      <ChallengesSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <WhyBigCradleSection />
      <FutureSection />
      <CTASection />
      <Footer />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Powering Intelligent Systems with{" "}
            <span className="text-[#0D8AFF]">Human Feedback, Structured Datasets,</span> and{" "}
            <span className="text-[#0D8AFF]">Operational Data Infrastructure</span>
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            BigCradle helps organisations improve the integrity and contextual quality of their data through scalable data operations, human-in-the-loop validation, and structured data workflows.
          </p>
          <p className="font-poppins text-base text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            We work with existing data systems—ensuring data is accurate, consistent, and contextually reliable for use in AI, analytics, and autonomous technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0D8AFF] text-white font-poppins text-base font-semibold rounded-lg transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0D8AFF] text-[#0D8AFF] font-poppins text-base font-semibold rounded-lg transition-all hover:bg-[#0D8AFF] hover:text-white"
            >
              Scope Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Brand Positioning Strip
function BrandStrip() {
  const items = [
    "Human-in-the-loop operations",
    "Data infrastructure for intelligent systems",
    "Scalable annotation and validation workflows",
    "Built for AI and autonomous technologies",
    "High-integrity operational pipelines",
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-[#0D8AFF] to-[#3C6FE3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-white font-poppins text-sm font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Intro Section
function IntroSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Building the Infrastructure Behind Intelligent Systems
          </h2>
          <div className="space-y-4">
            <p className="font-poppins text-lg text-gray-600 leading-relaxed">
              Modern AI and autonomous systems depend on large volumes of reliable, structured, and continuously validated data. But many organisations struggle with fragmented workflows, inconsistent labelling quality, poor validation processes, and limited operational capacity.
            </p>
            <p className="font-poppins text-lg text-gray-600 leading-relaxed">
              BigCradle provides the <span className="font-semibold text-gray-900">high-integrity, high-quality contextual data</span> that supports the development, improvement, and maintenance of intelligent systems. We combine scalable operational workflows with structured quality assurance to help organizations move from raw data collection to production-ready intelligence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Challenges Section
function ChallengesSection() {
  const challenges = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Data Quality Drift",
      description: "Inconsistent labelling and weak review systems reduce model reliability and create downstream performance issues.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Scaling Operational Workflows",
      description: "As systems grow, maintaining speed, consistency, and accuracy across large datasets becomes increasingly difficult.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Autonomous System Reliability",
      description: "Autonomous technologies require highly accurate, continuously validated datasets to operate safely and effectively.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "High Internal Operational Costs",
      description: "Managing large annotation and validation operations internally can slow teams down and divert engineering resources.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Challenges We Help Solve
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] mb-4">
                {challenge.icon}
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                {challenge.title}
              </h3>
              <p className="font-poppins text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      id: "annotation",
      icon: <Eye className="h-8 w-8" />,
      title: "Data Annotation Operations",
      description: "We design and manage structured annotation workflows that convert raw datasets into high-quality training data for intelligent systems. Our teams support multimodal annotation workflows across image, text, audio, video, sensor, and spatial datasets.",
      capabilities: [
        "Computer vision annotation",
        "Semantic segmentation",
        "Bounding boxes and object tracking",
        "Text and language labeling",
        "Audio and speech annotation",
        "Multimodal dataset preparation",
        "Sensor and spatial data workflows",
      ],
    },
    {
      id: "evaluation",
      icon: <Brain className="h-8 w-8" />,
      title: "Model Evaluation & Human Feedback",
      description: "BigCradle supports model improvement through structured human evaluation workflows that measure output quality, consistency, reasoning accuracy, and real-world system performance. We help organizations continuously refine AI systems using human-centered feedback loops and operational evaluation pipelines.",
      capabilities: [
        "Human feedback systems",
        "Output ranking and scoring",
        "Hallucination and error detection",
        "Response comparison workflows",
        "Behavioral evaluation",
        "Performance benchmarking",
        "Autonomous decision validation",
      ],
    },
    {
      id: "validation",
      icon: <Shield className="h-8 w-8" />,
      title: "Data Validation & Quality Assurance",
      description: "We validate datasets and operational outputs through layered QA systems, human review processes, and integrity checks that improve trust, consistency, and deployment readiness.",
      capabilities: [
        "Dataset auditing",
        "Label consistency review",
        "Error analysis",
        "Data integrity validation",
        "Quality benchmarking",
        "Bias and imbalance detection",
        "Operational QA pipelines",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Intelligent Data Operations Services
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            BigCradle delivers operational services that support the full lifecycle of AI and autonomous system development — from structured data preparation to continuous evaluation and validation.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-[#0D8AFF] to-[#3C6FE3] flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-poppins text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Capabilities
                </h4>
                <ul className="space-y-2">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0D8AFF] shrink-0 mt-0.5" />
                      <span className="font-poppins text-sm text-gray-600">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries Section
function IndustriesSection() {
  const industries = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Artificial Intelligence Systems",
      description: "Training and improving machine learning models with structured data workflows.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Autonomous Systems",
      description: "Supporting autonomous technologies with validated operational datasets and human review systems.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Smart Mobility",
      description: "Data workflows for intelligent transportation and mobility technologies.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare & Research",
      description: "Structured datasets and validation workflows for research and intelligent healthcare systems.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conversational AI",
      description: "Evaluation and improvement workflows for language models and virtual assistants.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Enterprise Intelligence",
      description: "Operational data systems for analytics, automation, and decision-support technologies.",
    },
  ];

  return (
    <section id="industries" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Systems and Industries We Support
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] mb-4">
                {industry.icon}
              </div>
              <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="font-poppins text-sm text-gray-600">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Meet your dedicated team",
      description: "We align with your operational goals, system requirements, data complexity, and quality expectations.",
    },
    {
      step: 2,
      title: "Expert consultation",
      description: "BigCradle designs scalable workflows tailored to your datasets, operational structure, and performance objectives.",
    },
    {
      step: 3,
      title: "Annotation and Quality Review",
      description: "We validate workflows through pilot operations, benchmark quality standards, and refine review systems before scaling.",
    },
    {
      step: 4,
      title: "Delivery and Support",
      description: "Dedicated operational teams execute annotation, validation, and evaluation workflows with continuous quality monitoring.",
    },
  ];

  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            BigCradle Annotation Flow
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0D8AFF] to-[#3C6FE3] flex items-center justify-center text-white font-poppins text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-gray-600">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why BigCradle Section
function WhyBigCradleSection() {
  const reasons = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Operational Intelligence Focus",
      description: "We think beyond annotation — focusing on the operational systems that power intelligent technologies.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Human-Centered Quality Systems",
      description: "Every workflow includes layered review and quality assurance processes.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Scalable Infrastructure",
      description: "Our operational workflows adapt to growing datasets and evolving system needs.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Flexible Collaboration Models",
      description: "We integrate with internal AI, research, and engineering teams as an operational partner.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Built for Emerging Technologies",
      description: "Designed to support AI systems, autonomous technologies, and next-generation intelligent platforms.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Reliable Delivery Workflows",
      description: "Structured operational processes ensure consistency, speed, and accountability.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Organizations Choose BigCradle
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] mb-4">
                {reason.icon}
              </div>
              <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="font-poppins text-sm text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Future Section
function FutureSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0D8AFF] to-[#3C6FE3] rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Supporting the Next Generation of Intelligent Technologies
          </h2>
          <p className="font-poppins text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            As AI and autonomous systems continue to evolve, the demand for reliable, high-integrity, and highly contextual data will only increase. BigCradle is building the infrastructure and operational workflows needed to support this future — enabling organizations to scale intelligent technologies with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Reliable Intelligent Systems Together
          </h2>
          <p className="font-poppins text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're developing AI models, autonomous systems, or large-scale intelligent platforms, BigCradle provides high-integrity, highly contextual data and operational intelligence to support reliable, scalable system performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0D8AFF] text-white font-poppins text-base font-semibold rounded-lg transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0D8AFF] text-[#0D8AFF] font-poppins text-base font-semibold rounded-lg transition-all hover:bg-[#0D8AFF] hover:text-white"
            >
              Start a Project Discussion
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}