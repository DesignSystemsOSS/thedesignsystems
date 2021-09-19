// eslint-disable-next-line
import React, { useEffect } from 'react';

export default function PersonalLinks(__Identifier) {
  let url = "/";
  if (__Identifier.toLowerCase() === 'yash') {
    url = "https://yashsehgal.github.io/portfolio_v_2";
  }
  useEffect(() => {
    window.location.href = url;
  }, []);
  return (
    <div className="github-view">
      Redirecting to {__Identifier}'s personal page...
    </div>
  )
}