import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

const Privacy = () => {
  const base = `${window.location.origin}${import.meta.env.BASE_URL}`;
  const canonical = `${base}privacy`;
  return (
    <>
      <Helmet>
        <title>Privacy Policy - HTML Online Viewer</title>
        <meta name="description" content="Read our privacy policy to understand how HTML Online Viewer handles your data. We process all HTML in your browser with no data collection." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      
      <div className="container mx-auto p-6 max-w-4xl">
        <AdSense slot="top" className="mb-6" />
      <Card className="p-8 bg-card/80 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to HTML Online Viewer. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we handle your information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              HTML Online Viewer is a client-side application. All HTML processing happens in your browser:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>We do not collect or store your HTML code</li>
              <li>We do not track your personal information</li>
              <li>All data remains on your device</li>
              <li>We may use cookies for analytics purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since we operate as a client-side tool, your HTML code and data never leave your browser. 
              We may collect anonymous usage statistics to improve our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services such as Google Analytics or advertising services. 
              These services may collect data according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since all processing occurs in your browser, your data security depends on your device and browser security. 
              We recommend keeping your browser and operating system up to date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access your data (stored locally in your browser)</li>
              <li>Clear your browser cache and data</li>
              <li>Opt-out of analytics cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </Card>
      
      <AdSense slot="bottom" className="mt-6" />
    </div>
    </>
  );
};

export default Privacy;
