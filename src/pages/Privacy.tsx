import React from 'react';
import Header from '@/components/Layout/Header';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="container py-8">
        <div className="max-w-2xl mx-auto prose">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            <p className="mb-4">
              We do not collect any personal information from our users. Our timer application runs
              entirely in your browser and does not store or transmit any data.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">YouTube Content</h2>
            <p className="mb-4">
              Our application embeds YouTube videos. When interacting with these videos, you are subject
              to YouTube's privacy policy and terms of service.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              If you have any questions about our privacy policy, please contact us through our contact
              form.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;