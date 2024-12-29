import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What are the costs of goods transportation?',
    answer: 'Our transportation costs vary based on distance, weight, and shipping method. Contact us for a detailed quote tailored to your needs.'
  },
  {
    question: 'How do you ensure package safety?',
    answer: 'We use industry-leading packaging methods and tracking systems, plus comprehensive insurance coverage for all shipments.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We provide worldwide logistics services with particular expertise in Asia, Europe, and North America.'
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Do you have any questions? Find answers here
        </h2>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;