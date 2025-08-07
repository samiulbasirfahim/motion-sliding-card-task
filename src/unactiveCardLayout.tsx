import type { CardData } from "./App";
import { useIsMobile } from "./hooks/isMobile";

const UnactiveCardLayout = ({ card }: { card: CardData }) => {
    const isMobile = useIsMobile();
    return (
        <div
            className={`flex-1 flex  lg:text-2xl text-xl font-semibold flex-col gap-4 ${isMobile ? "justify-center px-4 items-center h-full" : "items-center py-10"}`}
        >
            <p
                style={{
                    writingMode: isMobile ? "horizontal-tb" : "vertical-lr",
                    color: card.color,
                }}
            >
                {card.title}
            </p>

            {isMobile || (
                <span
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: card.color }}
                />
            )}
        </div>
    );
};

export default UnactiveCardLayout;
