import React from 'react';
import { BackgroundDecor } from "@/components/shared/BackgroundDecor";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FCFCFC] relative min-h-screen overflow-x-hidden">
      <BackgroundDecor />
      <Navbar />
      <main className="relative z-10 font-sans pt-32 pb-20">
        <div className='w-full max-w-4xl mx-auto px-6 md:px-20'>
          <div className='flex flex-col justify-center'>
            <h1 className="text-[#0546D2] capitalize font-bold text-4xl pb-10 text-center font-poppins">Privacy Policy</h1>
            
            <div className="prose prose-blue max-w-none text-[#494949] font-poppins">
              <p className="mb-8">
                <span className="font-bold">Effective Date: 26th of August 2025</span> <br /><br />
                BigCradle (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you use the BigCradle mobile app (“App”). By using our App, you agree to the terms of this Privacy Policy.
              </p>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">1. Information We Collect</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We may collect the following types of information:</p>
                  <p><span className="font-semibold text-[#001A30]">Personal Information:</span> Name, email address, phone number, and other details you provide when creating an account.</p>
                  <p><span className="font-semibold text-[#001A30]">Location Information:</span> Your location may be collected in the background to verify participation in location-based tasks or surveys.</p>
                  <p><span className="font-semibold text-[#001A30]">Device Information:</span> Device type, operating system, app version, unique device identifiers, and network information.</p>
                  <p><span className="font-semibold text-[#001A30]">Usage Information:</span> Interaction with the App, survey responses, and engagement with tasks or campaigns.</p>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">2. How We Use Your Information</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide and maintain the App’s features and services.</li>
                    <li>Verify task or survey completion at specific locations.</li>
                    <li>Send notifications, updates, and communications relevant to your account or tasks.</li>
                    <li>Improve our App, services, and user experience.</li>
                    <li>Comply with legal obligations and enforce our policies.</li>
                  </ul>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">3. Sharing of Information</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We do not sell your personal information. We may share information:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>With trusted service providers who perform services on our behalf.</li>
                    <li>In connection with legal requirements, investigations, or to protect rights and safety.</li>
                    <li>In anonymized or aggregated form for research or analytics purposes.</li>
                  </ul>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">4. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.
                </p>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">5. Your Rights</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>Depending on your location, you may have rights regarding your data, including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Accessing your personal data.</li>
                    <li>Correcting inaccurate information.</li>
                    <li>Requesting deletion of your account and personal data.</li>
                    <li>Withdrawing consent for certain processing activities.</li>
                  </ul>
                  <p>To exercise these rights, please contact us at <a href="mailto:management@bigcradle.com" className="text-[#0546D2] font-bold hover:underline">management@bigcradle.com</a>.</p>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">6. Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">7. Children’s Privacy</h2>
                <p className="leading-relaxed">
                  Our App is not intended for children under 13 (or the applicable age in your country). We do not knowingly collect personal information from children.
                </p>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">8. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new Privacy Policy on our website or App.
                </p>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">9. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions or concerns about this Privacy Policy, please contact: <br />
                  Email: <a href="mailto:management@bigcradle.com" className="text-[#0546D2] font-bold hover:underline">management@bigcradle.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy;
