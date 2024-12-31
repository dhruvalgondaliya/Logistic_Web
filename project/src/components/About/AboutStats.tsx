import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { value: 5, label: "Star", suffix: "Ranked Company" }, // Numeric value for counter
  { value: 150, label: "+", suffix: "Successful Logistics" } // Numeric value for counter
];

function Counter({ endValue }: { endValue: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const duration = 2; // Duration for counting animation (in seconds)
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return <>{count}</>;
}

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col "
        >
          <div className="text-4xl font-bold text-teal-900 mb-2">
            <Counter endValue={stat.value} />
            <span className="ms-2">{stat.label}</span>
          </div>
          
          <div className="text-gray-600">{stat.suffix}</div>
        </motion.div>
      ))}
    </div>
  );
}
