import React, { useState, useEffect } from 'react';
import styles from '../Styles/EdicaoFormulario.module.css';

export default function EdicaoFormulario({ hotelAtual, fecharFormulario, atualizarHotel }) {
    const [nome, setNome] = useState(hotelAtual.nome);
    const [imagem, setImagem] = useState(hotelAtual.imagem);
    const [estrelas, setEstrelas] = useState(hotelAtual.estrelas);
    const [cidade, setCidade] = useState(hotelAtual.cidade);
    const [estado, setEstado] = useState(hotelAtual.estado);
    const [preco, setPreco] = useState(hotelAtual.preco);
    const [descricao, setDescricao] = useState(hotelAtual.descricao);

    const handleSubmit = (e) => {
        e.preventDefault();

        const hotelEditado = {
            ...hotelAtual,
            nome,
            imagem,
            estrelas: parseInt(estrelas),
            cidade,
            estado,
            preco: parseFloat(preco),
            descricao,
        };

        atualizarHotel(hotelEditado);
        fecharFormulario();
    };

    return (
        <div className={styles.formularioOverlay}>
            <div className={styles.formularioContent}>
                <h2>Editar Hotel</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="nome">Nome do Hotel:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="imagem">URL da Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="estrelas">Estrelas (1-5):</label>
                        <input
                            type="number"
                            id="estrelas"
                            value={estrelas}
                            onChange={(e) => setEstrelas(e.target.value)}
                            required
                            min="1"
                            max="5"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cidade">Cidade:</label>
                        <input
                            type="text"
                            id="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="estado">Estado:</label>
                        <input
                            type="text"
                            id="estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="preco">Preço por Diária:</label>
                        <input
                            type="number"
                            id="preco"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="descricao">Descrição dos Serviços:</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="submit" className={styles.submitButton}>Salvar Alterações</button>
                        <button type="button" onClick={fecharFormulario} className={styles.closeButton}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
