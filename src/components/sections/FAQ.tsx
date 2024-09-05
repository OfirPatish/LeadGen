import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days, no credit card required.",
  },
  {
    question: "Can I integrate LeadGen Pro with my existing tools?",
    answer: "Yes, we offer integrations with popular CRMs, email marketing platforms, and other tools.",
  },
  {
    question: "Is there a limit on leads I can capture?",
    answer: "Our plans are designed to scale with your needs. Contact us for custom enterprise solutions.",
  },
  {
    question: "How secure is my data?",
    answer: "We use industry-standard encryption and security practices to keep your data safe and compliant.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(0, faqs.length);
  }, []);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 rounded-lg focus:outline-none"
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  maxHeight: activeIndex === index ? answerRefs.current[index]?.scrollHeight + "px" : "0px",
                }}
              >
                <div className="p-4 bg-gray-50 rounded-b-lg">{faq.answer}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
