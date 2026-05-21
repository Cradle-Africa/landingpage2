import React from 'react';
import type { Metadata } from 'next';
import { BackgroundDecor } from "@/components/shared/BackgroundDecor";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BigCradle Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

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
                <span className="font-bold">Effective Date: August 26, 2025</span> <br /><br />
                Welcome to BigCradle. BigCradle ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share information when you use the BigCradle mobile application ("App").<br /><br />
                By using the App, you agree to the practices described in this Privacy Policy.
              </p>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">1. Information We Collect</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We may collect the following categories of information:</p>
                  
                  <div>
                    <p className="font-semibold text-[#001A30]">Personal Information</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Profile information you voluntarily provide</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#001A30]">Location Information</p>
                    <p>BigCradle may collect precise or approximate location data, including background location access, to:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>verify participation in location-based tasks</li>
                      <li>validate survey authenticity</li>
                      <li>improve task accuracy and fraud prevention</li>
                    </ul>
                    <p className="mt-2">Location collection only occurs when permissions are granted by the user.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#001A30]">Device and Technical Information</p>
                    <p>We may collect:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>device type</li>
                      <li>operating system</li>
                      <li>IP address</li>
                      <li>app version</li>
                      <li>unique device identifiers</li>
                      <li>mobile network information</li>
                      <li>crash logs and diagnostics</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-[#001A30]">Usage Information</p>
                    <p>We collect information about how you interact with the App, including:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>completed tasks</li>
                      <li>survey responses</li>
                      <li>engagement activity</li>
                      <li>session activity</li>
                      <li>feature usage</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">2. How We Use Your Information</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We use collected information to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>provide and maintain the App</li>
                    <li>verify task and survey completion</li>
                    <li>process rewards and incentives</li>
                    <li>improve platform performance and security</li>
                    <li>personalize user experience</li>
                    <li>communicate important updates and notifications</li>
                    <li>detect fraud, abuse, or unauthorized activity</li>
                    <li>comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">3. Sharing of Information</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We do not sell your personal information. We may share information:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>with trusted third-party service providers supporting our infrastructure and operations</li>
                    <li>where required by law or legal process</li>
                    <li>to protect the rights, safety, and security of BigCradle, our users, or others</li>
                    <li>in aggregated or anonymized form for analytics, research, or reporting purposes</li>
                  </ul>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">4. Data Retention</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We retain personal information only for as long as necessary to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>provide our services</li>
                    <li>comply with legal obligations</li>
                    <li>resolve disputes</li>
                    <li>enforce agreements and policies</li>
                  </ul>
                  <p>When data is no longer required, we securely delete or anonymize it.</p>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">5. Your Rights and Choices</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>Depending on your jurisdiction, you may have rights to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>access your personal information</li>
                    <li>correct inaccurate data</li>
                    <li>request deletion of your account or data</li>
                    <li>withdraw consent</li>
                    <li>request limitation of certain processing activities</li>
                  </ul>
                  <p>You may request account or data deletion by contacting:<br />
                  Email: <a href="mailto:management@bigcradle.com" className="text-[#0546D2] font-bold hover:underline">management@bigcradle.com</a></p>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">6. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or destruction. However, no system can be guaranteed to be completely secure.
                </p>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">7. Children’s Privacy</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>BigCradle is not intended for children under the age of 13 (or the minimum legal age in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that a child has provided personal information, we will take steps to remove such data promptly.</p>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">8. Third-Party Services</h2>
                <p className="leading-relaxed">
                  The App may use third-party services such as analytics, cloud hosting, authentication, or notification providers. These services may collect and process data in accordance with their own privacy policies.
                </p>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">9. Changes to This Privacy Policy</h2>
                <div className="space-y-4 leading-relaxed">
                  <p>We may update this Privacy Policy periodically. Changes become effective immediately upon posting the updated version on this page. Continued use of the App after updates constitutes acceptance of the revised policy.</p>
                </div>
              </section>

              <section className='mb-10'>
                <h2 className="text-[#0546D2] text-xl font-bold mb-6">10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions, concerns, or requests related to this Privacy Policy, please contact us:<br />
                  BigCradle<br />
                  Email: <a href="mailto:management@bigcradle.com" className="text-[#0546D2] font-bold hover:underline">management@bigcradle.com</a><br />
                  Website: BigCradle
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
