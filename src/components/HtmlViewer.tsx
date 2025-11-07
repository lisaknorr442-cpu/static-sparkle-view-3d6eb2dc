import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface HtmlViewerProps {
  onAction?: string;
}

const HtmlViewer = ({ onAction }: HtmlViewerProps) => {
  const [htmlCode, setHtmlCode] = useState(
    `<!DOCTYPE html>
<html>
<head>
  <title>Sample Page</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h1 { color: #0ea5e9; }
  </style>
</head>
<body>
  <h1>Welcome to HTML Viewer</h1>
  <p>Edit the HTML code on the left to see the preview here.</p>
  <p>This is a <strong>live preview</strong> of your HTML content.</p>
</body>
</html>`
  );

  const sampleHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Sample Page</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
    h1 { color: #fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
    .card { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px); }
  </style>
</head>
<body>
  <div class="card">
    <h1>Beautiful Sample HTML</h1>
    <p>This is a sample HTML page with gradient background.</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>
  </div>
</body>
</html>`;

  useEffect(() => {
    if (onAction) {
      switch (onAction) {
        case "clear":
          setHtmlCode("");
          toast.success("Editor cleared");
          break;
        case "sample":
          setHtmlCode(sampleHtml);
          toast.success("Sample HTML loaded");
          break;
        case "format":
          toast.info("Format functionality - HTML is already formatted");
          break;
        case "export":
          const blob = new Blob([htmlCode], { type: "text/html" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "export.html";
          a.click();
          toast.success("HTML exported");
          break;
        case "import":
          const input = document.createElement("input");
          input.type = "file";
          input.accept = ".html,.htm";
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                setHtmlCode(e.target?.result as string);
                toast.success("HTML imported");
              };
              reader.readAsText(file);
            }
          };
          input.click();
          break;
      }
    }
  }, [onAction]);

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
      <div className="flex-1 flex flex-col">
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 px-4 py-3 mb-3 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/60"></div>
            <span className="text-sm font-semibold text-foreground">HTML Code Editor</span>
          </div>
        </div>
        <Textarea
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          placeholder="Put your HTML text here..."
          className="flex-1 font-mono text-sm bg-editor-bg/95 backdrop-blur-sm text-foreground resize-none rounded-xl border border-border/50 shadow-2xl focus-visible:ring-primary/50 transition-all"
          style={{ minHeight: "500px" }}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 px-4 py-3 mb-3 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/60"></div>
            <span className="text-sm font-semibold text-foreground">Live Preview</span>
          </div>
        </div>
        <div className="flex-1 bg-preview-bg rounded-xl border border-border/50 overflow-auto shadow-2xl">
          <iframe
            srcDoc={htmlCode}
            title="HTML Preview"
            className="w-full h-full rounded-xl"
            style={{ minHeight: "500px" }}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default HtmlViewer;
