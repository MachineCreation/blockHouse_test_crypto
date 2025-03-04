"use client";

//global variables
import { CoinbaseAPIFetchPoint } from "../globalVariables";

//React Query
import { useQuery } from "@tanstack/react-query";

interface Currency {
    id: string
}

const CryptoList = (): Promise<string[]> => {
    return fetch(`${CoinbaseAPIFetchPoint}`)
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then((coinPairs: Currency[]) => 
            coinPairs
                .filter((coin) => coin.id.includes("USD"))
                .map((coin) => coin.id)
        )
        .catch((error) => {
            console.error("Error fetching coin pairs:", error);
            return [];
        });
};

export const FetchCoins = () => {
    return useQuery({
        queryKey: ["CryptoPairsList"], 
        queryFn: CryptoList, 
        staleTime: Infinity,
        refetchOnWindowFocus: false
    })
    
}