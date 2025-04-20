
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Check if page was refreshed
    const wasRefreshed = sessionStorage.getItem('pageRefreshed') === 'true';
    
    if (wasRefreshed) {
      // Clear the flag
      sessionStorage.removeItem('pageRefreshed');
      // Redirect to loading page
      navigate('/', { replace: true });
    } else {
      setIsReady(true);
    }
  }, [navigate]);
  
  if (!isReady) {
    return null; // Don't render anything while checking
  }
  
  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center">
      <h1 className="text-4xl text-white">Main Page</h1>
    </div>
  );
};

export default Main;
