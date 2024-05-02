'use client';

import { useEffect } from 'react';

function initializeWebPush(d: any, t: any) {
  if (typeof document === 'undefined') return;
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src =
    'https://cdn.pushalert.co/integrate_0cef55e87e9ea90e5fac6acb8c25bce9.js';
  s.parentNode.insertBefore(g, s);
}

export const WebPush = () => {
  useEffect(() => {
    initializeWebPush(document, 'script');
  }, []);
  return <></>;
};
