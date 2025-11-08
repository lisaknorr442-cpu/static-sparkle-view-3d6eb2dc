import { useState } from "react";
import { Helmet } from "react-helmet";
import HtmlViewer from "@/components/HtmlViewer";
import Sidebar from "@/components/Sidebar";
import AdSense from "@/components/AdSense";

const Index = () => {
  const [currentAction, setCurrentAction] = useState<string>("");

  const handleAction = (action: string) => {
    setCurrentAction(action);
    setTimeout(() => setCurrentAction(""), 100);
  };

  const canonical = (typeof window !== "undefined" ? `${window.location.origin}` : "") + (import.meta.env.BASE_URL || "/");

  return (
    <>
      <Helmet>
        <title>HTML Online Viewer - Free HTML Editor & Live Preview Tool 2025</title>
        <meta name="description" content="Free online HTML viewer and editor with instant live preview. Test, format, import, export HTML code in your browser. Perfect for web developers and students." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      
      <div className="flex h-screen overflow-hidden">
        <Sidebar onAction={handleAction} />
        <main className="flex-1 overflow-auto">
          {/* Top Banner Ad */}
          <div className="p-4 pb-2">
            <AdSense slot="top" />
          </div>
          
          <div className="p-6 pt-4">
            <HtmlViewer onAction={currentAction} />
          </div>
          
          {/* Bottom Banner Ad */}
          <div className="p-4 pt-2">
            <AdSense slot="bottom" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
