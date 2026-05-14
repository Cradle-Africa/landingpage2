"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, FileText, Lightbulb, Calendar, Shield } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

/**
 * TalkToExpert component - Consultation page for BigCradle
 * Contains the consultation form and benefits sections
 */
export function TalkToExpert() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    fullName: "",
    workEmail: "",
    position: "",
    services: [] as string[],
    dataTypes: [] as string[],
    datasetVolume: "",
    timeline: "",
    challenges: "",
    description: "",
  });

  const serviceOptions = [
    "Data Annotation Operations",
    "Model Evaluation",
    "Data Validation",
    "Autonomous Systems Support",
    "Multiple Services",
  ];

  const dataTypeOptions = [
    "Image",
    "Text",
    "Audio",
    "Video",
    "Sensor Data",
    "Multimodal Data",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Our team will contact you soon!");
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleDataTypeChange = (dataType: string) => {
    setFormData((prev) => ({
      ...prev,
      dataTypes: prev.dataTypes.includes(dataType)
        ? prev.dataTypes.filter((d) => d !== dataType)
        : [...prev.dataTypes, dataType],
    }));
  };

  return (
    <div className="bg-[#FCFCFC] relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <FormSection
        formData={formData}
        setFormData={setFormData}
        serviceOptions={serviceOptions}
        dataTypeOptions={dataTypeOptions}
        handleServiceChange={handleServiceChange}
        handleDataTypeChange={handleDataTypeChange}
        handleSubmit={handleSubmit}
      />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Talk to a <span className="text-[#0D8AFF]">BigCradle specialist</span>.
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your datasets, intelligent systems, operational challenges, or evaluation requirements. Our team will help design a workflow tailored to your goals, timelines, and quality expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Workflow Assessment",
      description: "Review your current operational challenges, datasets, and system requirements.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Solution Design",
      description: "Receive recommendations for annotation, validation, and evaluation workflows tailored to your systems.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Operational Planning",
      description: "Understand estimated workflows, scaling considerations, and operational structure.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Strategy",
      description: "Learn how BigCradle maintains consistency and reliability across large-scale operations.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="h-12 w-12 rounded-lg bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="font-poppins text-sm text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Form Section
function FormSection({
  formData,
  setFormData,
  serviceOptions,
  dataTypeOptions,
  handleServiceChange,
  handleDataTypeChange,
  handleSubmit,
}: {
  formData: any;
  setFormData: (data: any) => void;
  serviceOptions: string[];
  dataTypeOptions: string[];
  handleServiceChange: (service: string) => void;
  handleDataTypeChange: (dataType: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8">
                Scope Your Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Organization Information */}
                <div>
                  <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    Organization Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        required
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                      >
                        <option value="">Select industry</option>
                        <option value="ai-ml">AI / Machine Learning</option>
                        <option value="autonomous">Autonomous Systems</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="research">Research</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Position / Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.position}
                        onChange={(e) =>
                          setFormData({ ...formData, position: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                        placeholder="Your position"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    Project Information
                  </h3>

                  {/* Services Needed */}
                  <div className="mb-6">
                    <label className="block font-poppins text-sm font-medium text-gray-700 mb-3">
                      Services Needed *
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-[#0D8AFF] transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="h-5 w-5 text-[#0D8AFF] rounded border-gray-300 focus:ring-[#0D8AFF]"
                          />
                          <span className="font-poppins text-sm text-gray-700">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Data Types */}
                  <div className="mb-6">
                    <label className="block font-poppins text-sm font-medium text-gray-700 mb-3">
                      Data Types
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {dataTypeOptions.map((dataType) => (
                        <label
                          key={dataType}
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-[#0D8AFF] transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.dataTypes.includes(dataType)}
                            onChange={() => handleDataTypeChange(dataType)}
                            className="h-5 w-5 text-[#0D8AFF] rounded border-gray-300 focus:ring-[#0D8AFF]"
                          />
                          <span className="font-poppins text-sm text-gray-700">
                            {dataType}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Fields */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Estimated Dataset Volume
                      </label>
                      <select
                        value={formData.datasetVolume}
                        onChange={(e) =>
                          setFormData({ ...formData, datasetVolume: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                      >
                        <option value="">Select volume</option>
                        <option value="small">Less than 1,000 items</option>
                        <option value="medium">1,000 - 10,000 items</option>
                        <option value="large">10,000 - 100,000 items</option>
                        <option value="xlarge">100,000 - 1,000,000 items</option>
                        <option value="massive">More than 1,000,000 items</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (Less than 1 month)</option>
                        <option value="short">1-3 months</option>
                        <option value="medium">3-6 months</option>
                        <option value="long">6-12 months</option>
                        <option value="ongoing">Ongoing</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                      Current Challenges
                    </label>
                    <textarea
                      value={formData.challenges}
                      onChange={(e) =>
                        setFormData({ ...formData, challenges: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                      placeholder="Describe your current operational challenges..."
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                      Project Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-poppins text-base focus:ring-2 focus:ring-[#0D8AFF] focus:border-transparent"
                      placeholder="Tell us more about your project requirements..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#0D8AFF] text-white font-poppins text-base font-semibold rounded-lg transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
                >
                  Submit Project Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-gradient-to-br from-[#0D8AFF] to-[#3C6FE3] rounded-2xl p-8 text-white">
                <h3 className="font-poppins text-2xl font-bold mb-6">
                  Why BigCradle
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm">
                      Human-in-the-loop operational expertise
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm">
                      Scalable workflow infrastructure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm">
                      Structured QA systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm">
                      Flexible engagement models
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="font-poppins text-sm">
                      Built for AI and autonomous systems
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Intelligent Data Operations Journey
          </h2>
          <p className="font-poppins text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your data operations? Our team is here to help you build reliable, scalable intelligent systems.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0D8AFF] text-white font-poppins text-base font-semibold rounded-lg transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
          >
            Submit Project Inquiry
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}