import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/login';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }),
    [];
  return <div />;
}
