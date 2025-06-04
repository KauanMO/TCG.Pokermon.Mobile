import React from "react";
import { CardSetInfo } from "@/app/types/CardSetType";
import CardSet from "./CardSet";

export default function CardSetDisplay({ sets }: { sets: CardSetInfo[] }) {
    return sets.map(set => {
        return <CardSet key={set.id} set={set} />
    });
}