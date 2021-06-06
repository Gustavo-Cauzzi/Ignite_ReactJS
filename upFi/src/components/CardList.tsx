import { Box, Flex, SimpleGrid, useDisclosure, Image, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [isModalActive, setIsModalActive] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  // TODO MODAL USEDISCLOSURE

  function handleImageOpening(url: string){
    setIsModalActive(true);
    setImgUrl(url);
  }

  return (
    <>
      <ModalViewImage imgUrl={imgUrl} onClose={() => setIsModalActive(false)} isOpen={isModalActive}/>

      <SimpleGrid columns={3} spacing='40px'>
        {cards.map(card => (
          <Card
            data={card}
            key={card.id}
            viewImage={handleImageOpening}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
