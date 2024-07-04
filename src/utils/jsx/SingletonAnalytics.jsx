import React, { useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';

// Singleton instance
let analyticsInstance = null;

const AnalyticsSingleton = () => {
  const analyticsRef = useRef(null);

  useEffect(() => {
    if (!analyticsInstance) {
      analyticsInstance = new Analytics();
      analyticsRef.current = analyticsInstance;
    }

    return () => {
      analyticsInstance = null;
    };
  }, []);

  return analyticsRef.current ? <Analytics /> : null;
};

export default AnalyticsSingleton;