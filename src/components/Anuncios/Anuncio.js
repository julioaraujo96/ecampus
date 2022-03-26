import { React, useState } from 'react'
import styles from './Anuncio.module.scss';
import axios from 'axios';

function Anuncio() {

    const [isLoading, setLoading] = useState(true);
    const [anuncioJSON, setAnuncioJSON] = useState(null);
    const [anuncio, setAnuncio] = useState(null);
    if (isLoading) {
        axios.post('http://127.0.0.1:8080/listartodosanuncios', {
        })
            .then(function (res) {
                if (res.data.Code === 400) {
                    setLoading(false);
                } else {
                    setAnuncioJSON(JSON.stringify(res.data));
                    PopulateAnuncios()
                }
            })
            .catch(function (error) {
                //console.log(error);
            });
    }

    function PopulateAnuncios() {

        var indents = []
        var result = JSON.parse(anuncioJSON)


        for (let i = 0; i < result.Anuncios.length; i++) {
            var timestamp = Date.parse(result.Anuncios[i][5]);
            var date = new Date(timestamp);
            indents.push(
                <div className={styles.Anuncio}>
                    <div className={styles.AnuncioTitle}>{result.Anuncios[i][1]}</div>
                    <div className={styles.AnuncioText}>{result.Anuncios[i][2]}</div>
                    <div className={styles.AnuncioText}>Criado em: {date.toLocaleDateString('pt-PT')}</div>
                </div>
            )
        }

        setLoading(false);
        setAnuncio(indents)
    }


    return (
        <>
            <div className={styles.block}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>Anúncios</div>
                    <div className={styles.subtitle}><b>Bem-vindo à área de Anúncios.</b><br />Para qualquer contacto sobre o funcionamento do e-campus: suporte@ismai.pt</div>
                </div>
                <div className={styles.content}>
                    <div>{isLoading ? <div className='bg-loading bg-cover bg-no-repeat bg-center w-24 h-24 m-auto'></div> : (anuncio === null ? 'Não existem anúncios.' : anuncio)}</div>
                </div>
            </div>
        </>
    )
}

export default Anuncio
