import { useState } from "react";
import HtmlViewer from "@/components/HtmlViewer";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  const [currentAction, setCurrentAction] = useState<string>("");

  const handleAction = (action: string) => {
    setCurrentAction(action);
    setTimeout(() => setCurrentAction(""), 100);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onAction={handleAction} />
      <main className="flex-1 overflow-auto p-6">
        <HtmlViewer onAction={currentAction} />
      </main>
    </div>
  );
};

export default Index;
