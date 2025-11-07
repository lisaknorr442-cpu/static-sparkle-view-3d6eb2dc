import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Code2, 
  Wand2, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Trash2, 
  Download, 
  Upload, 
  Shield, 
  Info,
  FileCode,
  Home
} from "lucide-react";

interface SidebarProps {
  onAction?: (action: string) => void;
}

const Sidebar = ({ onAction }: SidebarProps) => {
  const location = useLocation();
  const isViewerPage = location.pathname === "/";

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Shield, label: "Privacy Policy", path: "/privacy" },
    { icon: FileText, label: "Terms of Service", path: "/terms" },
    { icon: Info, label: "About", path: "/about" },
    { icon: FileCode, label: "Contact", path: "/contact" },
  ];

  const toolButtons = [
    { icon: Eye, label: "Preview", action: "preview" },
    { icon: Code2, label: "Highlight", action: "highlight" },
    { icon: Wand2, label: "Format", action: "format" },
    { icon: Maximize2, label: "Expand all", action: "expand" },
    { icon: Minimize2, label: "Collapse all", action: "collapse" },
    { icon: FileText, label: "Sample", action: "sample" },
    { icon: Trash2, label: "Clear", action: "clear" },
    { icon: Upload, label: "Import", action: "import" },
    { icon: Download, label: "Export", action: "export" },
  ];

  return (
    <aside className="w-64 bg-sidebar-background/95 backdrop-blur-xl border-r border-sidebar-border/50 flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border/50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          HTML Viewer
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Modern & Fast</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2 mb-8">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start gap-3 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent/50 transition-all duration-200"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {isViewerPage && (
          <>
            <div className="px-3 py-3 text-xs font-bold text-muted-foreground/80 uppercase tracking-wider">
              Tools
            </div>
            <div className="space-y-1.5">
              {toolButtons.map((item) => (
                <Button
                  key={item.action}
                  variant="ghost"
                  onClick={() => onAction?.(item.action)}
                  className="w-full justify-start gap-3 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent/50 transition-all duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {item.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </nav>

      <div className="p-6 border-t border-sidebar-border/50 text-xs text-muted-foreground/60">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span>© 2025 HTML Viewer</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
