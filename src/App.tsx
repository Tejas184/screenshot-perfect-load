
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const App = () => {
  // Create a QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  const [isLoading, setIsLoading] = useState(true);
  
  // Reset loading state on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      // This sets a flag in sessionStorage that will be checked when the page loads
      sessionStorage.setItem('pageRefreshed', 'true');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
