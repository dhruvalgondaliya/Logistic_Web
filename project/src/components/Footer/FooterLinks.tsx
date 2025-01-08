import React from "react";
import { LinkSection } from "./LinkSection";
import { FooterSection } from "./types";

const sections: FooterSection = {
  industryServed: ["E-commerce", "Dropshipping", "Warehousing", "Logistics"],
  companyInfo: ["AboutUs", "Services", "Pricing", "Contact"],
  ourServices: [
    { title: "Wholesale FBA Prep", link: "/services" },
    { title: "Private Labeling", link: "/services" },
    { title: "Online Arbitrage", link: "/services" },
    { title: "Retail Arbitrage", link: "/services" },
    { title: "Fulfillment By Merchant (FBM)", link: "/services" },
    {
      title: "Fulfillment Services & Shipping",
      link: "/services/fulfillment-shipping",
    },
  ],
};

export const FooterLinks: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
    <LinkSection title="Industry Served" links={sections.industryServed} />
    <LinkSection title="Company Info" links={sections.companyInfo} />
    <LinkSection
      title="Our Services"
      links={sections.ourServices.map((service) => ({
        label: service.title,
        href: service.link,
      }))}
    />
  </div>
);
