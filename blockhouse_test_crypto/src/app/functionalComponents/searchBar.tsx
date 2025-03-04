"use client";

// React
import { useState } from "react";

// React Query
import { useQueryClient } from "@tanstack/react-query";

interface SearchBarProps {
    IDKey: number;
    rerender: () => void;
    refetch: () => void;
    inputKey: string;
}

export function SearchBar({ IDKey, rerender, refetch, inputKey }: SearchBarProps) {
    const queryClient = useQueryClient();

    const cryptoList = queryClient.getQueryData<string[]>(["CryptoPairsList"]) ?? [];
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredList = cryptoList.filter((coin) =>
        coin.includes(searchTerm.toUpperCase())
    );

    return (
        <>
            <input
                className="flex rounded text-white self-center px-2 py-1"
                type="text"
                autoCapitalize="on"
                autoComplete="off"
                list="Crypto-Options"
                value={searchTerm || queryClient.getQueryData<string>([`input${IDKey}`]) || inputKey}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={(e) => {
                    const Key = queryClient.getQueryData<string>([`input${IDKey}`]) || inputKey;
                    e.target.value = Key;
                }}
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const value = e.currentTarget.value;
                    if (cryptoList.includes(value)) {
                        queryClient.setQueryData([`input${IDKey}`], value);
                        rerender();
                        refetch();
                    }
                }}
                onClick={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = ''
                }}
            />
            <datalist id="Crypto-Options" className="crypto-list">
                {cryptoList.map((coin) => (
                    <option key={coin} value={coin} />
                ))}
            </datalist>
        </>
    );
}
