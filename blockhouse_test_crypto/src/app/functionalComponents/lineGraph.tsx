"use client";

//global vars
import { colors } from "../globalVariables";

export const generateLineGraph = (values: number[], coinID: number): string | null => {
    if (values.length === 0) return null;

    const canvasWidth = 1000;
    const canvasHeight = 100;
    const padding = canvasHeight * 0.03; // 3% padding

    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    const normalizeY = (value: number) =>
        canvasHeight - padding - ((value - minValue) / (maxValue - minValue)) * (canvasHeight - 2 * padding);

    const normalizeX = (index: number) =>
        (index / (values.length - 1)) * (canvasWidth - 2 * padding) + padding;

    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;


    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.strokeStyle = colors[coinID]
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(normalizeX(0), normalizeY(values[0]));

    for (let i = 1; i < values.length; i++) {
        ctx.lineTo(normalizeX(i), normalizeY(values[i]));
    }

    ctx.stroke();

    const imageURL = canvas.toDataURL("image/png");
    if (typeof window !== "undefined") {
        localStorage.setItem(`coin_bg_${coinID}`, imageURL);
    }

    return imageURL;
};
