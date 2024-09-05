import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../contexts/ThemeContext";

const statistics = [
  { label: "Leads Generated", value: 1000000 },
  { label: "Conversion Rate", value: 25 },
  { label: "Happy Customers", value: 50000 },
  { label: "ROI Increase", value: 300 },
];

const AnimatedCounter: React.FC<{ value: number }> = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2 });
    }
  }, [count, inView, value]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}>
      {inView ? <motion.span>{rounded}</motion.span> : null}
    </motion.span>
  );
};

const Statistics: React.FC = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`py-16 ${colors.background}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-8 text-center ${colors.text}`}>LeadGen Pro by the Numbers</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <p className={`text-4xl font-bold mb-2 ${colors.accent}`}>
                <AnimatedCounter value={stat.value} />
                {stat.label === "Conversion Rate" || stat.label === "ROI Increase" ? "%" : "+"}
              </p>
              <p className={`${colors.text}`}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
