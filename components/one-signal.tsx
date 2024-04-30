'use client';

import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

async function runOneSignal() {
  if (typeof document === 'undefined') return;
  await OneSignal.init({
    appId: '616e6c5c-7bf0-45d2-b114-67f8bbcb82a9',
    allowLocalhostAsSecureOrigin: true,
  });
  OneSignal.Slidedown.promptPush();
}

export const InitializeOneSignal = () => {
  useEffect(() => {
    runOneSignal();
  }, []);
  return <></>;
};
