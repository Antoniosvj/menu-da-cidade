import React from "react";
import { Carousel } from 'react-bootstrap';
import './Footer.css';

// Função para reorganizar aleatoriamente um array
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Footer() {
    // Caminhos das imagens de patrocínio
    const patrocinioImages = [
        '/image/patrocinio/1.jpg',
        '/image/patrocinio/2.jpg',
        '/image/patrocinio/3.jpg',
        '/image/patrocinio/4.png',

        // Adicione mais caminhos de imagens conforme necessário
    ];

    // Reorganizar aleatoriamente as imagens de patrocínio
    const shuffledImages = shuffleArray(patrocinioImages);

    // Dividir as imagens reorganizadas em pares para exibir duas por vez
    const imagePairs = [];
    for (let i = 0; i < shuffledImages.length; i += 2) {
        imagePairs.push(shuffledImages.slice(i, i + 2));
    }

    return (
        <footer className='fixed-bottom d-flex justify-content-center'>
            <Carousel className='col-md-6 conteiner-img'>
                {imagePairs.map((pair, index) => (
                    <Carousel.Item key={index}>
                        <div className='d-flex justify-content-center'>
                            {pair.map((image, i) => (
                                <img key={i} src={image} alt={`Imagem ${i + 1}`} />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='d-none d-md-block'>
                Redes sociais
            </div>
            <div className='d-none d-md-block'>
                <img src='/image/rodape.jpeg' alt='Imagem do Rodapé' />
            </div>
        </footer>
    )
}

export default Footer;
