import React from 'react'
import styles from './Info.module.scss';

function Info() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>Informação</div>
                    <div className={styles.subtitle}><b>Bem-vindo à área privada.</b><br/>Para qualquer contacto sobre o funcionamento do e-campus: suporte@ismai.pt</div>
                </div>
                <div className={styles.content}>
                    <div>Bem-vindo à área privada. Para qualquer contacto sobre o funcionamento do e-campus: suporte@ismai.pt</div>
                    <div>Biblioteca - A partir de 15 de outubro de 2014 só é permitido requisitar livros, revistas, testes psicológicos, vídeos, etc, na Biblioteca a quem apresentar o Cartão de Estudante ou o comprovativo do pedido do mesmo (Ficha Foto validada pelo Santander Totta).</div>
                    <div>Parque de Estacionamento - Relembra-se todos os Alunos que para terem acesso ao Parque de Estacionamento, têm de ser detentores do Cartão de Estudante.</div>
                </div>
            </div>
        </>
    )
}

export default Info
