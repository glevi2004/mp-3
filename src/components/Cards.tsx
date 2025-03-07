import React from "react";
import styled from "styled-components";

export const CardsContainer = styled.div`
  margin: 2vh;
`;

export const CardItem = styled.div`
  position: relative;
  margin: 4vh 0;
  padding: 4vh;
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Year = styled.div`
  font-weight: bold;
  font-size: calc(2px + 2.2vh);
  color: #3c3a3a;
  background: #e1bebe;
  padding: 0.6vh;
  border-radius: 5px;
  display: inline-block;
`;

export type CardInfo = {
  year: string;
  title: string;
  description: React.ReactNode;
  items?: string[];
  url?: string;
};

export type CardsProps = {
  cards: CardInfo[];
};

export function Cards({ cards }: CardsProps) {
  return (
    <CardsContainer>
      {cards.map((card, index) => (
        <CardItem key={index}>
          <Year>{card.year}</Year>
          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.items && card.items.length > 0 && (
              <ul>
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {card.url && (
              <a href={card.url} target="_blank">
                View
              </a>
            )}
          </div>
        </CardItem>
      ))}
    </CardsContainer>
  );
}
