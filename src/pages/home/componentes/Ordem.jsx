import React from 'react';
import styles from '../Styles/Ordem.module.css';

export default function Ordem({ criterioOrdem, setCriterioOrdem }) {
    return (
        <select
            value={criterioOrdem}
            onChange={(e) => setCriterioOrdem(e.target.value)}
            className={styles.OrdemSelect}
        >
            <option value="preco">Ordenar por Preço</option>
            <option value="estrelas">Ordenar por Classificação</option>
            <option value="favoritos">Mostrar Favoritos</option> 
        </select>
    );
}
