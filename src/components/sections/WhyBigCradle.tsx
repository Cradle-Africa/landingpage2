"use client";

import React from "react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Zap,
  Globe,
  Database,
  RefreshCw,
  Lock,
  Eye,
  FileCheck,
  Cpu,
  Car,
  Building2,
  BarChart2,
  Landmark,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.18em] text-[#0D8AFF] uppercase mb-4">
      {text}
    </p>
  );
}

export function WhyBigCradle() {
  return (
    <div className="bg-[#FCFCFC] min-h-screen font-sans">
      <Navbar />

      {/* ── SECTION 1 · HERO ───────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center pt-36 pb-28 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#F0F6FF] to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0D8AFF]/6 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-[860px] relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[44px] md:text-[64px] font-extrabold text-[#0C0C0C] leading-[1.1] tracking-tight mb-6"
          >
            Your AI Model Is Only as Good as the{" "}
            <span className="text-[#0D8AFF]">Data Behind It.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[18px] md:text-[21px] text-[#4B5563] leading-relaxed mb-10 max-w-[720px] mx-auto"
          >
            BigCradle gives you human-verified, high-integrity African data at
            scale — so your models ship on time, perform in production, and stay
            relevant to the markets you are actually building for.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://app.bigcradle.com"
              className="flex items-center gap-2 px-7 py-4 bg-[#0D8AFF] hover:bg-[#0B7AE6] text-white font-semibold text-[16px] rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              Get Your Data <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/talk-to-expert"
              className="flex items-center gap-2 px-7 py-4 bg-white border-2 border-[#0D8AFF] text-[#0D8AFF] font-semibold text-[16px] rounded-xl hover:bg-[#F0F6FF] transition-all"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 2 · WHAT IS BIGCRADLE ─────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[1100px] mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel text="The Intelligence Engine for Africa" />
            <h2 className="text-[36px] md:text-[52px] font-extrabold text-[#0C0C0C] leading-tight mb-6">
              We Turn African Data Into AI-Ready Intelligence.
            </h2>
            <p className="text-[18px] text-[#4B5563] leading-relaxed max-w-[780px] mx-auto mb-14">
              BigCradle crowdsources real-world data from verified African
              contributors, transforms it through human-in-the-loop annotation
              and labeling, and delivers it as structured, production-ready
              intelligence. One continuous pipeline — from raw collection to
              model-ready output.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Users,
                title: "Crowdsourced Data",
                desc: "Real responses from verified African contributors at scale",
                color: "#0D8AFF",
              },
              {
                Icon: CheckCircle,
                title: "Human-Verified Annotation",
                desc: "Every data point labeled, checked, and quality-controlled",
                color: "#10B981",
              },
              {
                Icon: Zap,
                title: "Production-Ready Delivery",
                desc: "Structured output your model can use from day one",
                color: "#8B5CF6",
              },
            ].map(({ Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={cardIn}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 shadow-md bg-white hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${color}15` }}
                >
                  <Icon style={{ color }} className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-[18px] text-[#0C0C0C] mb-2">
                  {title}
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 3 · BEFORE & AFTER ────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[1000px] mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0C0C0C] leading-tight">
              Your Data Pipeline. Before and After BigCradle.
            </h2>
          </motion.div>

          <motion.div
            variants={cardIn}
            className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl"
          >
            {/* Table header */}
            <div className="grid grid-cols-2">
              <div className="bg-[#FEF2F2] px-6 py-4 border-r border-gray-200">
                <p className="font-bold text-[#DC2626] text-[15px]">
                  ❌ Before BigCradle
                </p>
              </div>
              <div className="bg-[#F0FDF4] px-6 py-4">
                <p className="font-bold text-[#16A34A] text-[15px]">
                  ✓ After BigCradle
                </p>
              </div>
            </div>
            {[
              [
                "Unverified data that breaks model training",
                "Human-verified data ready for model training",
              ],
              [
                "Surveys with no cultural context",
                "African consumer insights you can trust",
              ],
              [
                "No pipeline from collection to output",
                "End-to-end flywheel — collection to delivery",
              ],
              [
                "Insights that arrive too late to act on",
                "Real-time insights when your team needs them",
              ],
              [
                "Weeks spent cleaning instead of using data",
                "Clean, annotated, structured data on your timeline",
              ],
            ].map(([before, after], i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <div className="flex items-center gap-3 px-6 py-5 border-r border-gray-200 text-[15px] text-[#4B5563]">
                  <span className="text-[#DC2626] shrink-0">✗</span>
                  {before}
                </div>
                <div className="flex items-center gap-3 px-6 py-5 text-[15px] text-[#4B5563]">
                  <span className="text-[#16A34A] shrink-0">✓</span>
                  {after}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 4 · WHY BIGCRADLE ─────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[1000px] mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel text="Why BigCradle" />
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0C0C0C] leading-tight">
              The Data Partner Built for Africa.{" "}
              <span className="text-[#0D8AFF]">Trusted Beyond It.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              {
                num: "01",
                title: "Africa-Native Data — Not Adapted. Not Approximated.",
                body: "Most data providers collect globally and filter for Africa. BigCradle starts in Africa. Our contributors are on the continent, our methodologies are built for its languages and cultures, and our data reflects how African people actually think, behave, and respond. You cannot get that from a Western dataset.",
              },
              {
                num: "02",
                title: "Human-Verified Integrity at Every Stage",
                body: "Every data point that leaves BigCradle has been verified by a screened human contributor. We do not allow synthetic responses, automated submissions, or bot activity. Quality control is built into the collection process — not applied after the fact.",
              },
              {
                num: "03",
                title: "A Continuous Flywheel — Not a One-Off Export",
                body: "BigCradle is not a one-time dataset. It is a live pipeline. As your model evolves, your data updates. As your research questions change, your collection adapts. You get intelligence that stays current — not a static export that goes stale in 90 days.",
              },
              {
                num: "04",
                title: "End-to-End Pipeline — Collection to Model-Ready Output",
                body: "Collection. Annotation. Labeling. Metadata generation. Quality assurance. Delivery. BigCradle handles the full pipeline so your team receives data that is ready to use — not data that needs weeks of additional processing before it is usable.",
              },
              {
                num: "05",
                title: "Built for Africa. Structured for Global AI Standards.",
                body: "BigCradle operates from Kigali and Lagos with contributors across the continent. We understand the market, the context, and the edge cases. And we deliver output that meets the accuracy and format standards required by global AI companies, research institutions, and enterprise teams.",
              },
            ].map(({ num, title, body }) => (
              <motion.div
                key={num}
                variants={cardIn}
                whileHover={{ x: 4 }}
                className="flex gap-6 p-8 rounded-2xl border border-gray-100 shadow-md bg-white hover:shadow-xl hover:border-[#0D8AFF]/30 transition-all"
              >
                <span className="text-[40px] font-extrabold text-[#0D8AFF]/15 leading-none shrink-0 select-none">
                  {num}
                </span>
                <div>
                  <h3 className="font-bold text-[18px] text-[#0C0C0C] mb-2">
                    {title}
                  </h3>
                  <p className="text-[15px] text-[#4B5563] leading-relaxed">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 5 · HOW IT WORKS ──────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#001A30] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] bg-[radial-gradient(circle,#0D8AFF_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] bg-[radial-gradient(circle,#8B5CF6_0%,transparent_70%)]" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[1000px] mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel text="The Process" />
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-white leading-tight">
              From Raw Data to Production-Ready Intelligence in Five Steps.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              {
                step: "01",
                title: "Define Your Requirements",
                body: "Tell us what you need — data type, accuracy threshold, format, timeline. We design the entire collection and annotation process around your exact specifications before a single task goes live.",
                Icon: FileCheck,
              },
              {
                step: "02",
                title: "Deploy to Our Verified Contributor Network",
                body: "Your task goes live across BigCradle's network of screened, trained, verified African contributors. Real people. Real responses. No bots. No synthetic submissions.",
                Icon: Users,
              },
              {
                step: "03",
                title: "Human-in-the-Loop Quality Assurance",
                body: "Every data point passes through BigCradle's QA process. Anomalies are flagged. Low-quality responses are removed. Output is validated against your accuracy target before it leaves the pipeline.",
                Icon: Shield,
              },
              {
                step: "04",
                title: "Delivery in Your Format",
                body: "Your data arrives clean, structured, and annotated — ready for model training, analytics, or direct publication. Delivered via API, direct export, or integrated into your existing workflow.",
                Icon: Database,
              },
              {
                step: "05",
                title: "Continuous Feedback Loop",
                body: "The flywheel keeps turning. As your model evolves or your research requirements shift, BigCradle continues collecting, validating, and delivering. Your data stays fresh. Your decisions stay current.",
                Icon: RefreshCw,
              },
            ].map(({ step, title, body, Icon }, i) => (
              <motion.div
                key={step}
                variants={cardIn}
                className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-[#0D8AFF]/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#94B2FF]" />
                  </div>
                  {i < 4 && (
                    <div className="w-px flex-1 bg-white/10 mt-2 min-h-[24px]" />
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-[12px] font-bold tracking-widest text-[#94B2FF] mb-1">
                    STEP {step}
                  </p>
                  <h3 className="font-bold text-[18px] text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-[15px] text-white/65 leading-relaxed">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 6 · USE CASES ─────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[1100px] mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <SectionLabel text="Who We Work With" />
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0C0C0C] leading-tight">
              Built for Every Organisation That Runs on African Data.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Cpu,
                color: "#0D8AFF",
                title: "AI & Machine Learning Companies",
                body: "Get high-quality, annotated, model-ready training data sourced directly from African consumers. Ship faster, perform better in African markets, and build models that actually understand the context they operate in.",
              },
              {
                Icon: Car,
                color: "#8B5CF6",
                title: "Autonomous Vehicle & Robotics Companies",
                body: "Access labeled image, video, and sensor datasets built for African road conditions and environments. Get the edge cases Western datasets consistently miss.",
              },
              {
                Icon: Globe,
                color: "#10B981",
                title: "NGOs & Development Organisations",
                body: "Collect culturally grounded survey data across African communities. Track programme impact with research that reflects the people you are actually serving — not approximations of them.",
              },
              {
                Icon: BarChart2,
                color: "#F59E0B",
                title: "Consumer Brands & Market Researchers",
                body: "Understand how African consumers think, buy, and behave. Real-time insights from a verified contributor panel that reflects the genuine diversity of the continent.",
              },
              {
                Icon: Landmark,
                color: "#EF4444",
                title: "Governments & Policy Bodies",
                body: "Make policy decisions on verified, structured intelligence. BigCradle gives decision-makers the real-world data they need to act with confidence across African markets.",
              },
              {
                Icon: Building2,
                color: "#0546D2",
                title: "Enterprise & Research Institutions",
                body: "Commission large-scale data collection, annotation, and delivery pipelines tailored to your accuracy requirements, format specifications, and research protocols.",
              },
            ].map(({ Icon, color, title, body }) => (
              <motion.div
                key={title}
                variants={cardIn}
                whileHover={{ y: -6 }}
                className="flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: `${color}15` }}
                >
                  <Icon style={{ color }} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[17px] text-[#0C0C0C] mb-2">
                  {title}
                </h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 7 · TRUST & DATA SECURITY ───────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[1000px] mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionLabel text="Data Integrity" />
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#0C0C0C] leading-tight mb-6">
              Every Data Point. Verified. Traceable. Deliverable.
            </h2>
            <p className="text-[17px] text-[#4B5563] leading-relaxed max-w-[740px] mx-auto">
              BigCradle treats data integrity as the foundation of everything we
              deliver — not a feature. Every contributor is screened and verified
              before they participate in any project. Every response is processed
              through a human quality control layer. And every data point
              delivered to a client can be traced back to its source. For AI
              companies, enterprise clients, and research institutions, this is
              not optional. It is the baseline.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                Icon: Users,
                text: "Contributor verification — every source is a real, identified, screened human",
              },
              {
                Icon: Shield,
                text: "Zero synthetic responses — no bots, no AI-generated submissions, no gamed answers",
              },
              {
                Icon: CheckCircle,
                text: "Human-in-the-loop QA at every stage of the data pipeline",
              },
              {
                Icon: Eye,
                text: "Full data provenance — every point traceable from collection to delivery",
              },
              {
                Icon: Lock,
                text: "Client data handled in compliance with applicable privacy regulations",
              },
              {
                Icon: FileCheck,
                text: "Custom NDAs and data agreements available for enterprise projects",
              },
            ].map(({ Icon, text }) => (
              <motion.div
                key={text}
                variants={cardIn}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8FAFF] border border-[#0D8AFF]/10 hover:border-[#0D8AFF]/30 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D8AFF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#0D8AFF]" />
                </div>
                <p className="text-[14px] text-[#374151] leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 8 · CLOSING CTA ───────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-gradient-to-br from-[#0546D2] to-[#0D8AFF] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-[780px] mx-auto text-center relative z-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[36px] md:text-[52px] font-extrabold text-white leading-tight mb-6"
          >
            Ready to Build on Data You Can Actually Trust?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[17px] md:text-[19px] text-white/85 leading-relaxed mb-10 max-w-[640px] mx-auto"
          >
            Talk to the BigCradle team about your data requirements. We scope
            every project around your accuracy targets, timeline, and delivery
            format — then we build the pipeline that hits them.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="/talk-to-expert"
              className="flex items-center gap-2 px-8 py-4 bg-white text-[#0546D2] font-bold text-[16px] rounded-xl hover:bg-[#F0F6FF] transition-all shadow-xl"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://app.bigcradle.com"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/50 text-white font-bold text-[16px] rounded-xl hover:bg-white/20 transition-all"
            >
              Create Your Account <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-[13px] text-white/60 leading-relaxed"
          >
            Trusted by AI companies, NGOs, autonomous vehicle teams, and
            research institutions across Africa and beyond.
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}