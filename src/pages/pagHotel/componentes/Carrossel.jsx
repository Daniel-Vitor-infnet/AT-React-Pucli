import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Carrossel.css";

const Carrossel = ({ imagens }) => {
    const imagensCorrigidas = [
        imagens[0],  // Imagem recebida As outras é apenas para ilustrar
        'https://cdn-icons-png.flaticon.com/512/813/813789.png',  
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYa88AyMbjn63yCvQ5qPB1GJrLP8H4u1caA&s',
        'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif'
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: function (i) {
            return (
                <img
                    src={imagensCorrigidas[i]}
                    alt={`Miniatura ${i + 1}`}
                    className="thumbnail"
                />
            );
        },
        dotsClass: "slick-dots slick-thumb"
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {imagensCorrigidas.map((imagem, index) => (
                    imagem && (
                        <div key={index}>
                            <img src={imagem} alt={`Imagem ${index + 1}`} className="carousel-image" />
                        </div>
                    )
                ))}
            </Slider>
        </div>
    );
};

export default Carrossel;
