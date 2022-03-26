import { React, useState } from 'react'
import styles from './Curso.module.scss';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Curso = () => {
    const [percentage, setPercentage] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const token = localStorage.getItem('Token')
    const [cursosJSON, setCursosJSON] = useState(null);
    const [cursos, setCursos] = useState(null);

    const [cadeirasFeitas, setCadeirasFeitas] = useState(0);
    const [cursosLength, setCursosLength] = useState(0);

    if (isLoading) {
        axios.post('http://127.0.0.1:8080/listacadeiraaluno', {
            token: token
        })
            .then(function (res) {
                if (res.data.Code === 400) {
                    setLoading(false);
                } else {
                    setCursosJSON(JSON.stringify(res.data));
                    PopulateCursos()

                }
            })
            .catch(function (error) {
                //console.log(error);
            });
    }

    function PopulateCursos() {

        var indents = []
        var result = JSON.parse(cursosJSON)
        var feitas = 0

        for (let i = 0; i < result.length; i++){
            indents.push(<div className={styles.bottomcadeira}>{result[i].cadeira}<div>{result[i].professor}</div></div>)

            if(result[i].concluido)
                feitas++    
        }
        
        var percentagem = (feitas / parseInt(result.length)) * 100;
        setPercentage(percentagem.toFixed(1))
        
        setCadeirasFeitas(feitas)
        setCursosLength(result.length)

        setLoading(false);
        setCursos(indents)
    }

    return (
        <>
            <div className={styles.block}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>Curso</div>
                    <div className={styles.subtitle}>IPMAIA - Tecnologias de Informação, Web e Multimédia (1.º Ciclo)</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.topbanner}>
                        <div className={styles.topcoordenador}><div className={styles.topcoordenador_image}></div><div className={styles.topcoordenador_title}>Coordenador: <br /><span>Rui Alexandre Salgado Carreira</span></div></div>
                        <div className={styles.topcadeiras}><div className={styles.topcadeiras_progress}><CircularProgressbar value={percentage} text={`${percentage}%`} /></div><div className={styles.topcadeiras_title}>Cadeiras Concluidas: {isLoading ? '0/0' : cadeirasFeitas + "/" + cursosLength}<br />Propinas em falta: 0</div></div>
                    </div>
                    <div className={styles.bottomcurso}>2021/22 - IP Maia - Tecnologias de Informação, Web e Multimédia (1.º Ciclo)</div>
                    <div className={styles.bottomcadeiras}>
                        {isLoading ? <div className='bg-loading bg-cover bg-no-repeat bg-center w-24 h-24 m-auto'></div> : (cursos === null ? 'Não está inscrito em nenhuma cadeira.' : cursos)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curso
