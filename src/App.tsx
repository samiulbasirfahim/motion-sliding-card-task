import { ArrowBigLeft, ArrowBigRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useEffect, useState } from "react";

const MAX_LEN = 5;
const INTERVAL = 8000;
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
  }, [active]);

  function nextCard() {
    setActive((prev) => {
      const n_active = prev + 1;
      return n_active > MAX_LEN ? 1 : n_active;
    });
  }

  function prevCard() {
    setActive((prev) => {
      const n_active = prev - 1;
      return n_active < 1 ? MAX_LEN : n_active;
    });
  }

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
          <div className="flex w-full justify-center bottom-10 absolute items-center gap-4">
            {active === i ? (
              <>
                <button
                  onClick={prevCard}
                  className="p-4 bg-slate-900/20 rounded-full hover:bg-slate-900/60 cursor-pointer"
                >
                  <ArrowBigLeft />
                </button>
                <div className="relative w-1/2 h-4 rounded-2xl overflow-hidden bg-teal-600 ">
                  <motion.div
                    key={active}
                    className="origin-left w-full h-full bg-amber-200"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  />
                </div>

                <button
                  onClick={nextCard}
                  className="p-4 bg-slate-900/20 rounded-full hover:bg-slate-900/60 cursor-pointer"
                >
                  <ArrowBigRight />
                </button>
              </>
            ) : (
              <button
                className="rounded-full p-3 bg-slate-900/20 hover:bg-slate-900/60 cursor-pointer"
                onClick={() => setActive(i)}
              >
                <Play className="w-10 h-10 text-white" />
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default App;
