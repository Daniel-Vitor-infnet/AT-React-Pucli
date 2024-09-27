import React from 'react';
import { useParams } from 'react-router-dom';
import Carrossel from './componentes/Carrossel.jsx';
import Header from '../globais/componentes/Header.jsx';
import Footer from '../globais/componentes/Footer.jsx';
import './Styles.css';

export default function PagHotel() {
    const { id } = useParams();
    const hoteis = JSON.parse(localStorage.getItem('hoteis')) || [];
    const hotel = hoteis[id];

    if (!hotel) {
        return <div>Hotel não encontrado!</div>;
    }

    // Adicione a única imagem do hotel dentro de um array
    const imagens = [hotel.imagem];

    return (
        <>
            <Header />
            <div className="hotel-details">
                <h1>{hotel.nome}</h1>
                <div className="hotel-images">
                    <Carrossel imagens={imagens} />
                </div>
                <div className="hotel-info">
                    <p className="location">Localização: {hotel.cidade}, {hotel.estado}</p>
                    <p className="price">R$ {hotel.preco} / diária</p>
                    <h2>Descrição</h2>
                    <p className="description">{hotel.descricao}</p>
                    <p>Classificação: {hotel.classificacao} estrelas</p>
                </div>
            </div>
            <Footer />
        </>
    );
}


