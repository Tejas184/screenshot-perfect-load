
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100 over 5 seconds
    const tl = gsap.timeline();
    tl.to({ value: 0 }, {
      value: 100,
      duration: 5,
      ease: "linear",
      onUpdate: function() {
        setProgress(this.targets()[0].value);
      },
      onComplete: () => {
        // Navigate to main page after animation completes
        navigate('/main');
      }
    });

    return () => {
      tl.kill();
    };
  }, [navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-deep-navy flex flex-col items-center justify-center px-4 space-y-8"
    >
      {/* Logo placeholder */}
      <Skeleton className="w-32 h-32 rounded-full bg-white/10" />
      
      {/* Progress bar */}
      <div className="w-full max-w-md space-y-4">
        <Progress value={progress} className="h-2 bg-white/10" />
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-center text-lg"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
