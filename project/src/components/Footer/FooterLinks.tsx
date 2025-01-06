// src/components/FooterLinks.tsx

import React from 'react';
import { LinkSection } from './LinkSection';
import { FooterSection } from './types'; 

const sections: FooterSection = {
  industryServed: ["Warehousing"],
  companyInfo: ["AboutUs", "Services", "Pricing", "Contact"],
  ourServices: ["Wholesale FBA Prep","Private Labeling","Online Arbitrage","Retail Arbitrage","Fulfillment By Merchant (FBM)","Fulfillment Services & Shipping"]
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
