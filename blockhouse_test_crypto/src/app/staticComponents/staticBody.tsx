"use client";

//Queries
import { FetchCoins } from "../functionalComponents/fetchCoins";

//components
import CoinDisplay from "./CoinDisplay";

export function StaticBody() {

    const data = FetchCoins();
    const range = 5

    return (
        <main className="flex w-full h-fit min-h-full mt-4 p-5 justify-center border border-gray-500 rounded-2xl">
            <ul className="flex flex-col w-full">
                {[...Array(range)].map((_, i) => (
                    <div key={i}>
                        <CoinDisplay
                        ID= {i}
                    />
                    </div>
                ))}
            </ul>
        </main>
    )
}