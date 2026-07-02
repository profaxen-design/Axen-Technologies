import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service" };
export default function TermsPage() {
  return (
    <div className="pt-24 section-padding">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Terms of Service</h1>
        <p className="text-sm text-text-muted mb-10">Last updated: July 1, 2025</p>
        <div className="prose-axen space-y-8">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Axen Technology website (axentechnology.in), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>
          <section>
            <h2>2. Website Use</h2>
            <p>You may use our website for lawful purposes only. You must not use the website in any way that is unlawful, harmful, or fraudulent, or that could damage, disable, or impair the website. You must not attempt to gain unauthorised access to any part of our website or its related systems.</p>
          </section>
          <section>
            <h2>3. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, designs, and code — is owned by Axen Technology Pvt. Ltd. and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
          </section>
          <section>
            <h2>4. Client Projects and Services</h2>
            <p>Services are governed by separate client agreements. These terms apply only to your use of this website. Deliverables, payment terms, intellectual property ownership, and liability for client projects are defined in individual service agreements executed with each client.</p>
          </section>
          <section>
            <h2>5. Disclaimer of Warranties</h2>
            <p>This website is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that the website will be error-free, uninterrupted, or free from viruses or other harmful components.</p>
          </section>
          <section>
            <h2>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Axen Technology Pvt. Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.</p>
          </section>
          <section>
            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>
          <section>
            <h2>8. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.</p>
          </section>
          <section>
            <h2>9. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@axentechnology.in">legal@axentechnology.in</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
