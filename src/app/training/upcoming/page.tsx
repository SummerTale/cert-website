import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UpcomingPage() {
  return (
    <>
        <Header />
        <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Upcoming training sessions will be listed here soon.</p>
        </div>
        <Footer />
    </>
  );
}
