// eslint-disable-next-line
import React, { useEffect } from 'react';

export default function Discord() {
  useEffect(() => {
    window.location.href = "https://discord.gg/sETEXAsWhR";
  }, []);
  return (
    <div className="discord-view">
      Redirecting to The DesignSystems' Discord Server...
    </div>
  )
}