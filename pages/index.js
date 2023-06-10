import { Inter } from 'next/font/google'
import React from 'react';
import Layout from '@/pages/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <Layout>
    <h1>Welcome to my website</h1>
    {/* Rest of the page content */}
  </Layout>
    )
}
