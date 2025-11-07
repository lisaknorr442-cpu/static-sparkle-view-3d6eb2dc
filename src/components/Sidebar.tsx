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
    <aside className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-primary">HTML Online Viewer</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className="w-full justify-start gap-2 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {isViewerPage && (
          <>
            <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase">
              Tools
            </div>
            <div className="space-y-1">
              {toolButtons.map((item) => (
                <Button
                  key={item.action}
                  variant="ghost"
                  onClick={() => onAction?.(item.action)}
                  className="w-full justify-start gap-2 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </nav>

      <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground">
        © 2025 HTML Viewer
      </div>
    </aside>
  );
};

export default Sidebar;
