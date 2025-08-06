import type { CardData } from "./App";

const ActiveCardLayout = ({ card }: { card: CardData }) => {
    return (
        <div className="flex-1 flex justify-between p-10">
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
    );
};

export default ActiveCardLayout;
