import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useEffect, useState } from "react";

const MAX_LEN = 5;
const INTERVAL = 5000;
const App = () => {
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const n_active = prev + 1;
        return n_active > MAX_LEN ? 1 : n_active;
      });
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[80vh] w-full flex gap-2 p-10">
      {Array.from({ length: MAX_LEN }, (_, i) => i + 1).map((i) => (
        <motion.div
          key={i}
          className="bg-teal-400 h-full rounded-2xl relative"
          animate={{
            width: active === i ? "100%" : "8%",
          }}
        >
          {active === i && (
            <div className="flex w-full justify-center bottom-10 absolute">
              <div className="relative w-1/2 bg-amber-200 h-4 rounded-2xl overflow-hidden">
                <motion.div
                  key={active}
                  className="bg-teal-600 origin-left w-full h-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default App;
