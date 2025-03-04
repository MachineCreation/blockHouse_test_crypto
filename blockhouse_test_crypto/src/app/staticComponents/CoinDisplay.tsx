"use client";

// React
import { useState } from "react";

// Components
import PriceDisplay from "../functionalComponents/priceDisplay";
import { SearchBar } from "../functionalComponents/searchBar";
import { generateLineGraph } from "../functionalComponents/lineGraph";

// Global vars
import { altCoin } from "../globalVariables";

// React Query
import { useQueryClient } from "@tanstack/react-query";

// Queries
import { SetCoinPrice } from "../functionalComponents/fetchCoiinData";

interface CoinDisplayProps {
    ID: number;
}

export default function CoinDisplay({ ID }: CoinDisplayProps) {
    const queryClient = useQueryClient();

    const [loading, setLoading] = useState<boolean>(false);
    const [inputKey, setInputKey] = useState<string>(
        queryClient.getQueryData<string>([`input${ID}`]) || altCoin[ID]
    );

    const { data: price, refetch } = SetCoinPrice(ID, inputKey);

    const rerender = () => {
        const newInput = queryClient.getQueryData<string>([`input${ID}`]) || altCoin[ID];
        setInputKey(newInput);
        setLoading(true);
    };

    const ReFetch = () => {
        setTimeout(() => {
            refetch();
        }, 100);
    };

    const resetLoading = () => {
        setLoading(false);
    };


    return (
        <section
            key={`${ID}-${inputKey}`}
            className={`flex flex-col w-full h-50 ${ID === 0 ? '' : 'mt-5'} p-2 justify-center border rounded-xl`}
            style={{
                backgroundImage: `url(${generateLineGraph(price || [], ID)})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
            }}
        >
            <SearchBar
                IDKey={ID}
                rerender={rerender}
                refetch={ReFetch}
                inputKey={inputKey}
            />
            <PriceDisplay
                ID={ID}
                price={price}
                loading={loading}
                resetLoading={resetLoading}
            />
            <button onClick={() => {
                rerender();
                refetch();
            }}>Reload</button>
        </section>
    );
}
