import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPolicy() {
  return (
    <div className="pt-24 section-padding">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Privacy Policy</h1>
        <p className="text-sm text-text-muted mb-10">Last updated: July 1, 2025</p>
        <div className="prose-axen space-y-8">
          <section>
            <h2>1. Information We Collect</h2>
            <p>When you contact us through our website, we collect the personal information you voluntarily provide: name, email address, company name, phone number, and project details. We may also collect basic technical information (IP address, browser type, referring URL) through standard web server logs and analytics tools.</p>
          </section>
          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide solely to: respond to your project enquiry; send project proposals and related communications; improve our website and services; comply with legal obligations. We do not sell, rent, or trade your personal information to third parties.</p>
          </section>
          <section>
            <h2>3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. All data transmitted through our contact form is encrypted via TLS. We restrict access to your personal data to employees who need it to respond to your enquiry.</p>
          </section>
          <section>
            <h2>4. Cookies</h2>
            <p>Our website uses essential cookies for session management and performance analytics (Google Analytics, anonymised). You may disable cookies in your browser settings, though this may affect some website functionality.</p>
          </section>
          <section>
            <h2>5. Third-Party Services</h2>
            <p>We use Google Analytics for website performance analysis. All analytics data is anonymised. We do not use advertising networks or share data with social media platforms.</p>
          </section>
          <section>
            <h2>6. Data Retention</h2>
            <p>We retain contact enquiry data for 24 months. You may request deletion of your personal data at any time by emailing <a href="mailto:privacy@axentechnology.in">privacy@axentechnology.in</a>.</p>
          </section>
          <section>
            <h2>7. Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:privacy@axentechnology.in">privacy@axentechnology.in</a>. We will respond within 30 days.</p>
          </section>
          <section>
            <h2>8. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Significant changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
          </section>
          <section>
            <h2>9. Contact Us</h2>
            <p>For privacy questions or to exercise your rights, contact us at <a href="mailto:privacy@axentechnology.in">privacy@axentechnology.in</a> or write to: Axen Technology Pvt. Ltd., Mumbai, Maharashtra, India 400001.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
