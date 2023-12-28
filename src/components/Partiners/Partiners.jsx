import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Partiners.css';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Partiners() {
  const imageList = [
    "/image/parceiros/ataide.jpg",
    "/image/parceiros/bela.jpg",
    "/image/parceiros/linus.jpg",
    // Adicione mais imagens conforme necessário
  ];

  const shuffledImages = shuffleArray(imageList);

  // Dividir as imagens reorganizadas em pares para exibir duas por vez
  const imagePairs = [];
  for (let i = 0; i < shuffledImages.length; i += 2) {
    imagePairs.push(shuffledImages.slice(i, i + 2));
  }

  return (
    <Container className="container-partiners-img">
      <Row>
        {imagePairs.map((imagePair, index) => (
          <Col key={index} >
            {imagePair.map((image, i) => (
              <img className="img-partiners" key={i} src={process.env.PUBLIC_URL + image} alt="" />
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Partiners;
