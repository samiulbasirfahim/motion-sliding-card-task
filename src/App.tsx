import {
    ArrowBigDown,
    ArrowBigLeft,
    ArrowBigRight,
    ArrowBigUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useIsMobile } from "./hooks/isMobile";
import ActiveCardLayout from "./activeCardLayout";

export interface CardData {
    title: string;
    color: string;
    description: string;
    bulletPoints: string[];
    bgURL: string;
    videoURL: string;
}

const cards: CardData[] = [
    {
        bgURL: "/photo2.avif",
        title: "Random Title",
        description: "Random Description",
        bulletPoints: [
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
        ],
        color: "#F84328",
        videoURL: "",
    },
    {
        bgURL: "/photo1.avif",
        title: "Random Title",
        description: "Random Description",
        bulletPoints: [
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
        ],
        color: "#F84328",
        videoURL: "",
    },
    {
        bgURL: "/photo4.jpg",
        title: "Random Title",
        description: "Random Description",
        bulletPoints: [
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
        ],
        color: "#F84328",
        videoURL: "",
    },
    {
        bgURL: "/photo3.avif",
        title: "Random Title",
        description: "Random Description",
        bulletPoints: [
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
            "bullentpoints 1",
        ],
        color: "#F84328",
        videoURL: "",
    },
];

const INTERVAL = 8000;

const App = () => {
    const [active, setActive] = useState<number>(1);
    const isMobile = useIsMobile();

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => {
                const n_active = prev + 1;
                return n_active > cards.length ? 1 : n_active;
            });
        }, INTERVAL);
        return () => clearInterval(interval);
    }, [active]);

    function nextCard() {
        setActive((prev) => {
            const n_active = prev + 1;
            return n_active > cards.length ? 1 : n_active;
        });
    }

    function prevCard() {
        setActive((prev) => {
            const n_active = prev - 1;
            return n_active < 1 ? cards.length : n_active;
        });
    }

    return (
        <div
            className="w-full flex gap-2 lg:p-10 md:p-6 p-2 h-screen"
            style={{
                flexDirection: isMobile ? "column" : "row",
            }}
        >
            {cards.map((card, i) => {
                i = i + 1;
                return (
                    <motion.div
                        key={i}
                        className={`h-full rounded relative overflow-hidden bg-[url(${card.bgURL})] bg-cover bg-center`}
                        onClick={() => {
                            if (i === active) return;
                            setActive(i);
                        }}
                        transition={{
                            delay: 0,
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundImage: `url(${card.bgURL})`,
                            cursor: active !== i ? "pointer" : "auto",
                        }}
                        animate={{
                            width: isMobile ? "100%" : active === i ? "100%" : "8%",
                            height: isMobile ? (active === i ? "100%" : "8%") : "100%",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                        {active === i && (
                            <div className="relative z-10 h-full flex">
                                <ActiveCardLayout card={card} />
                            </div>
                        )}
                        <motion.div
                            key={i}
                            className={`flex absolute gap-4 justify-center ${isMobile ? "left-4 bottom-0 flex-col items-center flex-1 h-full" : "bottom-10 justify-center items-center w-full"}`}
                            animate={{
                                scaleX: isMobile ? 1 : active === i ? 1 : 0,
                                scaleY: isMobile ? (active === i ? 1 : 0) : 1,
                                opacity: active === i ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        >
                            <div
                                className={`relative w-1/2 rounded-2xl overflow-hidden ${isMobile ? "h-1/2" : "h-4"} bg-[${card.color}]/40`}
                            >
                                <motion.div
                                    key={active}
                                    className={`w-full h-full bg-[${card.color}] ${isMobile ? "origin-top" : "origin-left"}`}
                                    initial={{
                                        scaleX: isMobile ? 1 : 0,
                                        scaleY: isMobile ? 0 : 1,
                                    }}
                                    animate={{ scaleX: 1, scaleY: 1 }}
                                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                                />
                            </div>

                            <button
                                onClick={prevCard}
                                className="p-2 bg-slate-900/20 rounded-full hover:bg-slate-900/60 cursor-pointer"
                            >
                                {!isMobile ? <ArrowBigLeft /> : <ArrowBigUp />}
                            </button>
                            <button
                                onClick={nextCard}
                                className="p-2 bg-slate-900/20 rounded-full hover:bg-slate-900/60 cursor-pointer"
                            >
                                {!isMobile ? <ArrowBigRight /> : <ArrowBigDown />}
                            </button>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default App;
