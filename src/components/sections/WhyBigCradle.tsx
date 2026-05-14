"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  Zap, 
  Globe, 
  BookOpen, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Layers,
  Clock
} from 'lucide-react';

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7 }
  }
};

// Icon mapping for different card types
const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  trending: <TrendingUp className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  book: <BookOpen className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  check: <CheckCircle className="w-5 h-5" />,
  star: <Star className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  clock: <Clock className="w-5 h-5" />,
};

export function WhyBigCradle() {
  return (
    <div className="bg-[#FCFCFC] min-h-screen font-sans relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#0546D2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#94B2FF]/10 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[1000px] relative z-10"
        >
          <h1 className="text-[56px] md:text-[72px] font-bold text-[#0546D2] mb-8 leading-tight tracking-tight">
            Why BigCradle?
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#374151] mb-10 leading-relaxed font-medium max-w-[800px] mx-auto">
            BigCradle Helps Students And Professionals Build Real-World AI And Data Skills Through Structured Learning, Accountability, Practical Projects, And Community-Driven Growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(5,70,210,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#0546D2] text-white rounded-2xl font-semibold text-[18px] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            Talk To An Expert
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Section 1 — Transformation */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-gray-900 mb-8 leading-tight text-center tracking-tight"
          >
            From Unstructured Learning To Real Progress
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Many Learners Struggle Because They Learn Without Structure, Consistency, Or Accountability.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-[24px] font-semibold text-gray-900 mb-12 leading-relaxed text-center"
          >
            BigCradle Changes That.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(220,38,38,0.15)" }}
              className="relative bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] rounded-3xl p-10 border-2 border-[#FECACA] shadow-lg overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-[80px] font-bold opacity-[0.06] text-[#DC2626]">01</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#DC2626]/20 flex items-center justify-center">
                  {iconMap.target}
                </div>
                <h3 className="text-[24px] font-bold text-[#DC2626]">Before BigCradle</h3>
              </div>
              <ul className="space-y-4 text-[18px] text-[#374151]">
                {[
                  "Learn Alone",
                  "Lack Direction",
                  "Struggle To Stay Consistent",
                  "Have No Practical Proof Of Their Skills"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#DC2626] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#DC2626] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(22,163,74,0.15)" }}
              className="relative bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-3xl p-10 border-2 border-[#BBF7D0] shadow-lg overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-[80px] font-bold opacity-[0.06] text-[#16A34A]">02</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A]">
                  {iconMap.trending}
                </div>
                <h3 className="text-[24px] font-bold text-[#16A34A]">Inside BigCradle</h3>
              </div>
              <ul className="space-y-4 text-[18px] text-[#374151]">
                {[
                  "Real Project Experience",
                  "Measurable Weekly Progress",
                  "Portfolio-Ready Work",
                  "Professional Discipline",
                  "Confidence Through Practice"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#16A34A] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#16A34A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-gray-900 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            The Difference Is Not Just What You Learn. It Is What You Can Prove You Can Do.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 2 — Built for African Talent */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-[#0C0C0C] mb-8 leading-tight text-center tracking-tight"
          >
            Africa Has The Talent. BigCradle Develops It.
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            We Believe Africa Already Has Extraordinary Talent.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            What Has Been Missing Is:
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Structured Guidance", icon: "layers" },
              { text: "Practical Experience", icon: "briefcase" },
              { text: "Accountability Systems", icon: "target" },
              { text: "Industry-Focused Training", icon: "trending" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="absolute top-3 right-3 text-[48px] font-bold opacity-[0.04] text-[#0546D2]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0546D2]/10 flex items-center justify-center text-[#0546D2] mb-4 group-hover:bg-[#0546D2] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[16px] font-semibold text-[#0C0C0C]">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            BigCradle Exists To Bridge That Gap By Helping Learners Develop The Technical And Professional Standards Needed In Today's Digital Economy.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-[#0C0C0C] leading-relaxed text-center max-w-[800px] mx-auto"
          >
            We Are Building A Generation Of African Talent Prepared For Global Opportunities.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 3 — Real-World Learning */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-gray-900 mb-8 leading-tight text-center tracking-tight"
          >
            Training Built Around Real Work
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            BigCradle Focuses On Practical Learning Environments That Mirror Real Industry Workflows.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Students Learn How To:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Work With Structured Systems", icon: "layers" },
              { text: "Manage Assignments And Deadlines", icon: "clock" },
              { text: "Maintain Quality Standards", icon: "award" },
              { text: "Collaborate Effectively", icon: "users" },
              { text: "Consistently Improve Performance", icon: "trending", colSpan: true }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(5,70,210,0.1)" }}
                className={`${item.colSpan ? 'md:col-span-2' : ''} bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] group-hover:bg-[#0D8AFF] group-hover:text-white transition-colors duration-300">
                    {iconMap[item.icon]}
                  </div>
                  <p className="text-[18px] font-semibold text-gray-900">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-gray-900 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Real Growth Happens When Learning Becomes Practical.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 4 — Accountability System */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-[#001A30] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{
              background: "radial-gradient(circle, #0D8AFF 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{
              background: "radial-gradient(circle, #9747FF 0%, transparent 70%)",
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full relative z-10"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-white mb-8 leading-tight text-center tracking-tight"
          >
            Accountability Is Part Of The Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-white mb-4 leading-relaxed text-center"
          >
            Growth Requires Consistency.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-white/70 mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            That Is Why BigCradle Tracks Student Progress Weekly Across:
          </motion.p>
          
          {/* Tracking Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-[1000px] mx-auto">
            {[
              { text: "Attendance", icon: "check" },
              { text: "Engagement", icon: "zap" },
              { text: "Assignment Completion", icon: "check" },
              { text: "Participation", icon: "users" },
              { text: "Overall Progress", icon: "trending" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white/5 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-white/10 hover:border-white/20 text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D8AFF]/20 flex items-center justify-center text-[#94B2FF] mx-auto mb-3 group-hover:bg-[#0D8AFF]/30 transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[15px] font-semibold text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-white/70 mb-8 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Students Always Know:
          </motion.p>
          
          {/* Student Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Where They Stand" },
              { text: "Where They Need Improvement" },
              { text: "What Comes Next" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white/5 rounded-2xl p-6 shadow-md border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0D8AFF]/20 flex items-center justify-center">
                    <span className="text-[20px] font-bold text-[#94B2FF]">{idx + 1}</span>
                  </div>
                  <p className="text-[18px] font-semibold text-white">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-white/70 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Discipline And Accountability Are Not Optional In Professional Environments — And They Are Not Optional At BigCradle.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 5 — Portfolio & Proof */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-gray-900 mb-8 leading-tight text-center tracking-tight"
          >
            Learn By Building
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            BigCradle Students Do Not Just Complete Lessons.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            They Build:
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Practical Projects", icon: "briefcase" },
              { text: "Visible Work Samples", icon: "zap" },
              { text: "Measurable Progress", icon: "trending" },
              { text: "Proof Of Consistency", icon: "award" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute top-3 right-3 text-[40px] font-bold opacity-[0.06] text-[#0D8AFF]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] mb-4 group-hover:bg-[#0D8AFF] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[17px] font-semibold text-gray-900">{item.text}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-[#0D8AFF]" />
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-gray-900 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Your Portfolio Becomes Evidence Of Your Growth.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 6 — Community */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-[#0C0C0C] mb-8 leading-tight text-center tracking-tight"
          >
            A Community That Pushes You Forward
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            BigCradle Is Built Around Collaborative Growth.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Students Learn Inside A Community That Encourages:
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Consistency", icon: "clock" },
              { text: "Accountability", icon: "target" },
              { text: "Collaboration", icon: "users" },
              { text: "Improvement", icon: "trending" },
              { text: "Shared Ambition", icon: "star" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0546D2]/10 flex items-center justify-center text-[#0546D2] mx-auto mb-3 group-hover:bg-[#0546D2] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[15px] font-semibold text-[#0C0C0C]">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-[#676767] leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Learning Is Easier When You Grow With People Moving In The Same Direction.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 7 — Quality & Standards */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-gray-900 mb-8 leading-tight text-center tracking-tight"
          >
            Quality Matters
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            BigCradle Trains Students To Approach Work With:
          </motion.p>
          
          {/* Core Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-[1000px] mx-auto">
            {[
              { text: "Accuracy", icon: "target" },
              { text: "Consistency", icon: "layers" },
              { text: "Attention To Detail", icon: "zap" },
              { text: "Professionalism", icon: "award" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(13,138,255,0.1)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] mb-4 group-hover:bg-[#0D8AFF] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[17px] font-semibold text-gray-900">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-gray-600 mb-8 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Students Are Encouraged To:
          </motion.p>
          
          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Review Their Own Work", icon: "check" },
              { text: "Improve Continuously", icon: "trending" },
              { text: "Deliver Dependable Results", icon: "award" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(13,138,255,0.1)" }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D8AFF]/10 flex items-center justify-center text-[#0D8AFF] group-hover:bg-[#0D8AFF] group-hover:text-white transition-colors duration-300">
                    {iconMap[item.icon]}
                  </div>
                  <p className="text-[17px] font-semibold text-gray-900">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-gray-900 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Strong Systems Are Built On Reliable People.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 8 — Career Readiness */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-[1200px] w-full"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-[#0C0C0C] mb-8 leading-tight text-center tracking-tight"
          >
            Preparing Students For Real Opportunities
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-6 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            BigCradle Is Designed To Help Learners Move Beyond Theory And Become Ready For Real-World Environments.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-[#676767] mb-10 leading-relaxed text-center max-w-[800px] mx-auto"
          >
            Students Graduate With:
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 max-w-[1000px] mx-auto">
            {[
              { text: "Practical Exposure", icon: "globe" },
              { text: "Project Experience", icon: "briefcase" },
              { text: "Accountability Records", icon: "check" },
              { text: "Collaborative Experience", icon: "users" },
              { text: "Portfolio-Ready Work", icon: "award" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 text-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0546D2]/10 flex items-center justify-center text-[#0546D2] mx-auto mb-3 group-hover:bg-[#0546D2] group-hover:text-white transition-colors duration-300">
                  {iconMap[item.icon]}
                </div>
                <p className="text-[14px] font-semibold text-[#0C0C0C]">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            variants={fadeInUp}
            className="text-[24px] font-semibold text-[#0C0C0C] leading-relaxed text-center max-w-[800px] mx-auto"
          >
            The Goal Is Not Just Learning. The Goal Is Readiness.
          </motion.p>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="flex flex-col items-center py-24 px-6 md:px-12 lg:px-24 bg-[#0546D2] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center max-w-[1000px] relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[40px] md:text-[48px] font-bold text-white mb-8 leading-tight tracking-tight"
          >
            Ready To Build Real Skills?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[20px] text-white/90 mb-10 leading-relaxed max-w-[800px] mx-auto"
          >
            Join A Learning Environment Focused On Growth, Discipline, Accountability, And Practical Experience.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-[#0546D2] rounded-2xl font-semibold text-[18px] transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            Talk To An Expert
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}