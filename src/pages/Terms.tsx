import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

const Terms = () => {
  const base = `${window.location.origin}${import.meta.env.BASE_URL}`;
  const canonical = `${base}terms`;
  return (
    <>
      <Helmet>
        <title>Terms of Service - HTML Online Viewer</title>
        <meta name="description" content="Read the terms of service for HTML Online Viewer. Understand your rights and responsibilities when using our free HTML editor tool." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      
      <div className="container mx-auto p-6 max-w-4xl">
        <AdSense slot="top" className="mb-6" />
      <Card className="p-8 bg-card/80 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using HTML Online Viewer, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Permission is granted to use HTML Online Viewer for personal and commercial purposes, subject to the following restrictions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You may not modify or copy the materials</li>
              <li>You may not use the materials for any commercial purpose without written consent</li>
              <li>You may not attempt to reverse engineer any software contained in the service</li>
              <li>You may not remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on HTML Online Viewer are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall HTML Online Viewer or its suppliers be liable for any damages arising out of 
              the use or inability to use the materials, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on HTML Online Viewer could include technical, typographical, or photographic errors. 
              We do not warrant that any of the materials are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">User Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for all content you create or upload using our service. 
              We do not claim ownership of your content and do not monitor or store your HTML code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              You may not use our service:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>For any unlawful purpose</li>
              <li>To harass, abuse, or harm others</li>
              <li>To upload malicious code or viruses</li>
              <li>To violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may revise these terms of service at any time without notice. By using this service, 
              you agree to be bound by the current version of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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

export default Terms;
