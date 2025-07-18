import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { CardInfo, CardsObtainedCount } from "@/app/types/CardType";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";

type Prop = {
    cards: CardInfo[] | undefined,
    internal: boolean,
    marginTop: number,
    cardWidth?: number,
    cardHeight?: number,
    rowCount?: number,
    gap?: number,
    cardsObtainedCount?: CardsObtainedCount[],
    cardsSelled?: Function
};

export default function CardDisplay(props: Prop) {
    const [expandedCard, setExpandedCard] = useState<CardInfo | null>(null);
    const { width, height } = Dimensions.get('window');
    const [cardsObtainedCountNumber, setCardsObtainedCountNumber] = useState<number | undefined>(0);

    const cardsSelled = (ids: number[]) => {
        props.cardsSelled?.(ids)
        setExpandedCard(null);
    }

    useEffect(() => {
        if (expandedCard)
            setCardsObtainedCountNumber(props.cardsObtainedCount
                ?.find(c => c.shopCardId == expandedCard.id)
                ?.count);
    }, [expandedCard]);

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: props?.gap ?? 8,
            marginTop: props.marginTop,
            maxHeight: props.rowCount && props.cardHeight
                ? props.cardHeight * props.rowCount
                : null
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
            backgroundColor: 'rgba(0,0,0,0.4)',
        },
        expanded_card_info: {
            backgroundColor: 'white',
            width: 300
        }
    });

    return <>
        <View style={styles.container}>
            {
                props.cards?.map(card =>
                    <Card
                        key={card.id ?? card.externalCode}
                        image={card.images.small}
                        width={props.cardWidth ?? 75}
                        onPress={() => setExpandedCard(card)}
                    />
                )
            }
        </View>
        {
            expandedCard && <ExpandedCard
                card={expandedCard}
                setExpanded={() => setExpandedCard(null)}
                internal={props.internal}
                cardsObtainedCount={cardsObtainedCountNumber}
                cardsSelled={cardsSelled}
            />
        }
    </>
}