// src/components/FooterLinks.tsx

import React from 'react';
import { LinkSection } from './LinkSection';
import { FooterSection } from './types'; // Importing types

const sections: FooterSection = {
  industryServed: ["Warehousing"],
  companyInfo: ["AboutUs", "Services", "Pricing", "Contact"],
  ourServices: ["Container Freight"]
};

export const FooterLinks: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
    <LinkSection 
      title="Industry Served" 
      links={sections.industryServed} 
    />
    <LinkSection 
      title="Company Info" 
      links={sections.companyInfo} 
    />
    <LinkSection 
      title="Our Services" 
      links={sections.ourServices} 
    />
  </div>
);
