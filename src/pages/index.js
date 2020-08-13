import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="Utopiia"
        content="A personalized health networking application with a built-in search engine. 
        The app will automatically facilitate resources (information, news, products, services, 
          events, professionals, organizations, and communities) in any health-related area (sleep, 
            fitness, hygiene, mental health, nutrition, etc.) based on the user’s personal health problems, 
            interests, and needs. This is derived through how they use the platform."
        illustration={HeroIllustration}
        
      />
      

    </Layout>
  )
}

export default IndexPage;
