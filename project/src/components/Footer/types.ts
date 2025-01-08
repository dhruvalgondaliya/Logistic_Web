export interface LinkSectionProps {
    title: string;
    links: string[] | { label: string; href: string }[]; 
  }
  
  export interface FooterSection {
    industryServed: string[];
    companyInfo: string[];
    ourServices: { title: string; link: string }[];
  } 