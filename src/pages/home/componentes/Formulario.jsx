import React, { useState } from 'react';
import styles from '../Styles/Formulario.module.css';

export default function Formulario({ fecharFormulario, adicionarHotel }) {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [estrelas, setEstrelas] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoHotel = {
            id: Date.now(),
            nome,
            imagem,
            estrelas: parseInt(estrelas),
            cidade,
            estado,
            preco: parseFloat(preco),
            descricao,
        };

        adicionarHotel(novoHotel);
        fecharFormulario();
    };

    return (
        <div className={styles.formularioOverlay}>
            <div className={styles.formularioContent}>
                <h2>Cadastro de Novo Hotel</h2>
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
                        <button type="submit" className={styles.submitButton}>Cadastrar</button>
                        <button type="button" onClick={fecharFormulario} className={styles.closeButton}>Sair</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
