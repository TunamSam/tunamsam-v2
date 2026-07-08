import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export function FaqSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqKeys = [
    { q: 'faq_1_q' as const, a: 'faq_1_a' as const },
    { q: 'faq_2_q' as const, a: 'faq_2_a' as const },
    { q: 'faq_3_q' as const, a: 'faq_3_a' as const },
    { q: 'faq_4_q' as const, a: 'faq_4_a' as const },
    { q: 'faq_5_q' as const, a: 'faq_5_a' as const },
    { q: 'faq_6_q' as const, a: 'faq_6_a' as const },
    { q: 'faq_7_q' as const, a: 'faq_7_a' as const },
    { q: 'faq_8_q' as const, a: 'faq_8_a' as const },
    { q: 'faq_9_q' as const, a: 'faq_9_a' as const },
    { q: 'faq_10_q' as const, a: 'faq_10_a' as const },
  ];

  const faqs = faqKeys.map(({ q, a }) => ({
    question: t(q),
    answer: t(a),
  }));

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading text-gray-900 text-center mb-16">
          {t('faq_title')}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:border-gray-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-2 focus:outline-offset-2 focus:outline-brand rounded-xl"
              >
                <span className="text-2xl font-heading font-sans pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 font-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
