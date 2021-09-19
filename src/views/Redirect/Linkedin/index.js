// eslint-disable-next-line
import React, { useEffect } from 'react';

export default function LinkedIn() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com/company/thedesignsystems";
  }, []);
  return (
    <div className="linkedIn-view">
      Redirecting to The DesignSystems' LinkedIn Page...
    </div>
  )
}