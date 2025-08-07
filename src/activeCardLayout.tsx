import type { CardData } from "./App";

const ActiveCardLayout = ({ card }: { card: CardData }) => {
    return (
        <div className="flex-1 flex flex-col p-10">
            <div className="py-10 flex justify-end gap-2 items-center">
                <span
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: card.color }}
                />
                <p className="text-2xl font-semibold" style={{ color: card.color }}>{card.title}</p>
            </div>
            <div className="w-full flex justify-between">
                <div className="flex-col flex h-full w-full">
                    <h3 className="text-3xl font-semibold">{card.title}</h3>
                    <p className="">{card.description}</p>
                </div>
                <div className="flex justify-end items-center w-1/2">
                    <img
                        src={card.bgURL}
                        style={{
                            borderColor: card.color,
                        }}
                        className={`rounded-xl border-2`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ActiveCardLayout;
