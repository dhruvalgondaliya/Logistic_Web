import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
      >
        <span className="text-lg text-teal-900 font-semibold text-left">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <Plus className="w-6 h-6 text-orange-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the LBS weight cost of goods transportation?",
      answer: "The LBS weight cost varies depending on distance, weight, and shipping method. Contact us for a detailed quote based on your specific requirements."
    },
    {
      question: "How much time it takes for LTL Freight transport?",
      answer: "LTL freight transport typically takes 2-5 business days depending on the distance and route. We provide real-time tracking for all shipments."
    },
    {
      question: "What are the pick up points of logistics?",
      answer: "We have multiple pickup points across major cities. You can schedule a pickup from your location or drop off at our nearest facility."
    },
    {
      question: "What is the cost of goods transportation?",
      answer: "Transportation costs are calculated based on weight, distance, and service level. Contact our team for a customized quote."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}