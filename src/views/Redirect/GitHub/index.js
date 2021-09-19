// eslint-disable-next-line
import React, { useEffect } from 'react';

export default function GitHub() {
  useEffect(() => {
    window.location.href = "https://www.github.com/DesignSystems";
  }, []);
  return (
    <div className="github-view">
      Redirecting to The DesignSystems' GitHub Organization Page...
    </div>
  )
}