"use client";
//global vars
import { CoinbaseAPIFetchPoint } from "../globalVariables";

//reactQuery
import { useQuery } from "@tanstack/react-query";

export const fetchCoinData = async (coin: string) => {
    try {
        const response = await fetch(`${CoinbaseAPIFetchPoint}/${coin}/candles?granularity=60`);
        if (!response.ok) throw new Error(response.statusText);

        const rawData: number[][] = await response.json();
        const data: number[] = rawData.map((stamp: number[]) => stamp[1])

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Invalid data format or empty dataset.");
        }

        return data;

    } catch (error) {
        console.error("Error fetching coin price:", error);
        return [];
    }
};


export const SetCoinPrice = (ID: number, coin: string) => {
    const query = useQuery({
        queryKey: [`CoinPrice${ID}`],
        queryFn: () => fetchCoinData(coin),
        staleTime: 300000, //5 min
        refetchOnWindowFocus: true
    })

    return {
        data: query.data,
        refetch: query.refetch,
    };
}