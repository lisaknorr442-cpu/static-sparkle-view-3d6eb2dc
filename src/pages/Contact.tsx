import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="p-8 bg-card/80 backdrop-blur-sm mb-6">
        <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Have questions, suggestions, or found a bug? We'd love to hear from you! 
          Fill out the form below or reach out through any of our channels.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">support@htmlviewer.com</p>
            </div>
          </Card>

          <Card className="p-4 bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-sm text-muted-foreground">github.com/htmlviewer</p>
            </div>
          </Card>

          <Card className="p-4 bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Community</h3>
              <p className="text-sm text-muted-foreground">Join our Discord</p>
            </div>
          </Card>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us more..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Send Message
          </Button>
        </form>
      </Card>

      <Card className="p-6 bg-card/80 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-primary mb-1">Is this tool really free?</h3>
            <p className="text-muted-foreground text-sm">
              Yes! HTML Online Viewer is completely free to use with no hidden fees or premium tiers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">Can I use this for commercial projects?</h3>
            <p className="text-muted-foreground text-sm">
              Absolutely! You can use our tool for personal and commercial projects.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">How do you handle my code?</h3>
            <p className="text-muted-foreground text-sm">
              Your code is processed entirely in your browser and never sent to our servers.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
