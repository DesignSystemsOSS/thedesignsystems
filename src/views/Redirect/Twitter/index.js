// eslint-disable-next-line
import React, { useEffect } from 'react';

export default function Twitter() {
  useEffect(() => {
    window.location.href = "https://twitter.com/TDesignSystems";
  }, []);
  return (
    <div className="twitter-view">
      Redirecting to The DesignSystems' Twitter Page...
    </div>
  )
}