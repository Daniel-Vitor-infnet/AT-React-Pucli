import React, { useState, useEffect } from 'react';
import styles from './Styles.module.css';
import Header from '../globais/componentes/Header.jsx';
import Footer from '../globais/componentes/Footer.jsx';
import Formulario from './componentes/Formulario.jsx';
import EdicaoFormulario from './componentes/EdicaoFormulario.jsx';
import Ordem from './componentes/Ordem.jsx';
import { Link } from 'react-router-dom';

const hotelIMGEx = "https://www.kayak.com.br/news/wp-content/uploads/sites/12/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg";

export default function ListaDeHoteis() {
    const [hoteis, setHoteis] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [hotelEditando, setHotelEditando] = useState(null);
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [criterioOrdem, setCriterioOrdem] = useState('preco');
    const [favoritos, setFavoritos] = useState({});

    useEffect(() => {
        const hoteisSalvos = localStorage.getItem('hoteis');
        const favoritosSalvos = localStorage.getItem('favoritos');
        
        if (hoteisSalvos) {
            setHoteis(JSON.parse(hoteisSalvos));
        } else {
            const hoteisExemplo = [
                { id: 1, nome: "Hotel Estrela do Mar", imagem: hotelIMGEx, estrelas: 4, cidade: "Rio de Janeiro", estado: "RJ", preco: 350, descricao: "Um hotel à beira-mar com uma vista espetacular e serviços completos." },
                { id: 2, nome: "Hotel Paraíso Verde", imagem: hotelIMGEx, estrelas: 3, cidade: "Florianópolis", estado: "SC", preco: 420, descricao: "Um hotel cercado pela natureza, perfeito para relaxamento e tranquilidade." },
                { id: 3, nome: "Hotel Sol Nascente", imagem: hotelIMGEx, estrelas: 5, cidade: "Salvador", estado: "BA", preco: 500, descricao: "Luxuoso e moderno, o hotel oferece as melhores acomodações e serviços exclusivos." },
                { id: 4, nome: "Hotel Ocean Park", imagem: hotelIMGEx, estrelas: 4, cidade: "São Paulo", estado: "SP", preco: 450, descricao: "Um hotel urbano com um toque de sofisticação e proximidade a grandes atrações." },
                { id: 5, nome: "Hotel Majestic", imagem: hotelIMGEx, estrelas: 5, cidade: "Belo Horizonte", estado: "MG", preco: 600, descricao: "Experiência majestosa com atendimento de alto nível e acomodações incríveis." }
            ];
            setHoteis(hoteisExemplo);
            localStorage.setItem('hoteis', JSON.stringify(hoteisExemplo));
        }

        if (favoritosSalvos) {
            setFavoritos(JSON.parse(favoritosSalvos));
        } else {
            setFavoritos({});
        }
    }, []);

    const hoteisFiltrados = hoteis.filter(hotel =>
        hotel.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    function adicionarHotel(novoHotel) {
        try {
            const hoteisAtualizados = [...hoteis, novoHotel];
            setHoteis(hoteisAtualizados);
            localStorage.setItem('hoteis', JSON.stringify(hoteisAtualizados));
            alert('Hotel cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar o hotel. Tente novamente.');
        }
    }

    function atualizarHotel(hotelAtualizado) {
        try {
            const hoteisAtualizados = hoteis.map(hotel =>
                hotel.id === hotelAtualizado.id ? hotelAtualizado : hotel
            );
            setHoteis(hoteisAtualizados);
            localStorage.setItem('hoteis', JSON.stringify(hoteisAtualizados));
            alert('Hotel atualizado com sucesso!');
        } catch (error) {
            alert('Erro ao atualizar o hotel. Tente novamente.');
        }
    }

    function excluirHotel(id) {
        try {
            const hoteisAtualizados = hoteis.filter(hotel => hotel.id !== id);
            setHoteis(hoteisAtualizados);
            localStorage.setItem('hoteis', JSON.stringify(hoteisAtualizados));
            alert('Hotel excluído com sucesso!');
        } catch (error) {
            alert('Erro ao excluir o hotel. Tente novamente.');
        }
    }

    const toggleFavorito = (id) => {
        const novosFavoritos = { ...favoritos, [id]: !favoritos[id] };
        setFavoritos(novosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    };

    const ordenarHoteis = (hoteis) => {
        let hoteisParaExibir = [...hoteis];

        if (criterioOrdem === 'favoritos') {
            hoteisParaExibir = hoteisParaExibir.filter(hotel => favoritos[hotel.id]);
        }

        return hoteisParaExibir.sort((a, b) => {
            if (criterioOrdem === 'preco') {
                return a.preco - b.preco;
            } else if (criterioOrdem === 'estrelas') {
                return b.estrelas - a.estrelas;
            }
            return 0;
        });
    };

    return (
        <>
            <Header HomeOff="off"/>
            <button className={styles.adicionarButton} onClick={() => setMostrarFormulario(true)}>
                Adicionar Hotel
            </button>

            <input
                type="text"
                placeholder="Pesquisar por nome"
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
                className={styles.pesquisaInput}
            />

            <Ordem criterioOrdem={criterioOrdem} setCriterioOrdem={setCriterioOrdem} />

            {mostrarFormulario && (
                <Formulario fecharFormulario={() => setMostrarFormulario(false)} adicionarHotel={adicionarHotel} />
            )}

            {hotelEditando && (
                <EdicaoFormulario
                    hotelAtual={hotelEditando}
                    fecharFormulario={() => setHotelEditando(null)}
                    atualizarHotel={atualizarHotel}
                />
            )}

            <main className={styles.hotelList}>
                {ordenarHoteis(hoteisFiltrados).map((hotel) => (
                    <div key={hotel.id} className={styles.hotelCard}>
                        <div className={styles.imageContainer}>
                            <img src={hotel.imagem} alt={`Imagem do ${hotel.nome}`} className={styles.hotelImage} />
                            <button
                                className={`${styles.favoritarButton} ${favoritos[hotel.id] ? styles.favoritado : ''}`}
                                onClick={() => toggleFavorito(hotel.id)}
                            >
                                {favoritos[hotel.id] ? '❤️' : '♡'}
                            </button>
                        </div>
                        <h2>{hotel.nome}</h2>
                        <div className={styles.stars}>
                            {'★'.repeat(hotel.estrelas) + '☆'.repeat(5 - hotel.estrelas)}
                        </div>
                        <p className={styles.location}>{hotel.cidade}, {hotel.estado}</p>
                        <p className={styles.price}>R$ {hotel.preco} / diária</p>
                        <p className={styles.description}>{hotel.descricao}</p>
                        <button className={styles.editarButton} onClick={() => { setHotelEditando(hotel); setMostrarEdicao(true); }}>Editar Hotel</button>
                        <button className={styles.excluirButton} onClick={() => excluirHotel(hotel.id)}>Excluir Hotel</button>
                        <Link to={`/hotel/${hotel.id}`} className={styles.verMais}>
                            Ver mais
                        </Link>
                    </div>
                ))}
            </main>
            <Footer />
        </>
    );
}
