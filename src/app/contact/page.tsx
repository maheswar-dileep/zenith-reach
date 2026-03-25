'use client';
import ProductHero from '@/components/ProductHero';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import React, { useState } from 'react';
import ContactInfoSection from './sections/ContactInfoSection';
import { contactData } from '@/utils/ContactData';
import ContactFormSection from './sections/ContactFormSection';
import ContactMapSection from './sections/ContactMapSection';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollClick = () => {
    const productDescription = document.getElementById('product-description');
    if (productDescription) {
      productDescription.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-background">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ProductHero
          backgroundImage={contactData.hero.backgroundImage}
          title={contactData.hero.title}
          subtitle={contactData.hero.subtitle}
          showScrollIndicator={true}
          onScrollClick={handleScrollClick}
        />
        <div className="flex flex-col gap-12 sm:gap-18 pb-20 md:mb-24 pt-10 gradient-secondary">
          <ContactInfoSection
            image={contactData.contactInfoSection.image}
            imageAlt={contactData.contactInfoSection.imageAlt}
            cards={contactData.contactInfoSection.cards}
          />
          <ContactFormSection />
          <ContactMapSection mapSrc="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3928.087296002964!2d76.42116032487269!3d10.091933090018227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1%2F122%2Fh%20marampally%20po.%20edathala%20ernakulam%20kerala%20683%20105!5e0!3m2!1sen!2sin!4v1774459681380!5m2!1sen!2sin" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
