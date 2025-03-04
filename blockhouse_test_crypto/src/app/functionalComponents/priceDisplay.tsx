"use client";

//reactQuery
import { useQueryClient } from "@tanstack/react-query";

import { SetCoinPrice } from "./fetchCoiinData";

import { altCoin } from "../globalVariables";

interface PriceDisplayProps {
    ID: number;
    price: number[] | undefined;
    loading: boolean;
    resetLoading: () => void;
}

export default function PriceDisplay({ ID, price, loading, resetLoading}: PriceDisplayProps) {

    const queryClient = useQueryClient();

    if (loading) {
        {setTimeout(() => {
            resetLoading();
        }, 500)}
    }

    return (
        <article key={ID} className="flex w-fit flex-wrap self-center text-5xl">
            {loading ? (
            <>
                Loading...
            </>
        ) : price ? (
            price[0]
        ) : (
            'loading...'
        )}
        </article>
    )
}