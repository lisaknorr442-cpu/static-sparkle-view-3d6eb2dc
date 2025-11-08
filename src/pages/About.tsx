import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Code2, Zap, Shield, Sparkles } from "lucide-react";
import AdSense from "@/components/AdSense";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Live Preview",
      description: "See your HTML code rendered in real-time as you type"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Client-side processing means instant results with no server delays"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your code never leaves your browser - complete privacy guaranteed"
    },
    {
      icon: Sparkles,
      title: "Easy to Use",
      description: "Simple interface with powerful features for everyone"
    }
  ];

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const base = `${origin}${import.meta.env.BASE_URL || "/"}`;
  const canonical = `${base}about`;

  return (
    <>
      <Helmet>
        <title>About HTML Online Viewer - Free HTML Editor Tool</title>
        <meta name="description" content="Learn about HTML Online Viewer - the free online HTML editor with live preview. Discover features, benefits, and how our tool helps developers test HTML code instantly." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      
      <div className="container mx-auto p-6 max-w-4xl">
        <AdSense slot="top" className="mb-6" />
      <Card className="p-8 bg-card/80 backdrop-blur-sm mb-6">
        <h1 className="text-4xl font-bold mb-6 text-primary">About HTML Online Viewer</h1>
        <div className="space-y-6 text-foreground">
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HTML Online Viewer is a free, open-source web application designed to help developers, 
              designers, and anyone interested in HTML to quickly preview and test HTML code in real-time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why HTML Online Viewer?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you're learning HTML, testing a code snippet, or sharing examples with colleagues, 
              our tool provides a simple and efficient way to visualize HTML instantly. No installation, 
              no setup - just paste your code and see the results.
            </p>
          </section>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-card/80 backdrop-blur-sm mt-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          We believe in making web development accessible to everyone. HTML Online Viewer is part of our 
          commitment to providing free, high-quality tools that empower developers and learners worldwide. 
          We're constantly improving and adding new features based on user feedback.
        </p>
      </Card>

      <Card className="p-8 bg-card/80 backdrop-blur-sm mt-6">
        <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
        <p className="text-muted-foreground leading-relaxed">
          HTML Online Viewer is open source and available on GitHub. We welcome contributions, bug reports, 
          and feature requests from the community. Together, we can make this tool even better.
        </p>
      </Card>
      
      <AdSense slot="bottom" className="mt-6" />
    </div>
    </>
  );
};

export default About;
