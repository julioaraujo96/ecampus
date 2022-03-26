import { React, useState, useEffect } from 'react'
import styles from './Calendar.module.scss';
import axios from 'axios';


const Calendar = () => {

    const [isLoading, setLoading] = useState(true);
    const token = localStorage.getItem('Token')
    const [cadeiras, setCadeiras] = useState(null);
    const [cadeirasJSON, setCadeirasJSON] = useState(null);
    const [active, setActive] = useState('0');

    useEffect(() => {
        axios.post('http://127.0.0.1:8080/meuhorario', {
            token: token
        })
            .then(function (res) {
                setCadeirasJSON(JSON.stringify(res.data));
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    );

    function handleClick(e) {
        e.preventDefault();
        setActive(e.currentTarget.id)
        PopulateCalendar(e.currentTarget.id);
        //console.log(e.currentTarget.id);
    }

    function PopulateDaysCalendar() {

        var rows = [];
        var dayindents = [];

        for (let i = -3; i <= 3; i++) {
            var resdate = new Date();
            //date.setDate(date.getDate() + 18)
            resdate.setDate(resdate.getDate() + i)
            rows[i] = resdate

            dayindents.push(
                <button className={(i === parseInt(active)) ? styles.CalendarBarActive : styles.CalendarBar} key={i} id={i} onClick={handleClick}>
                    <div style={{ textTransform: 'capitalize' }} className={styles.CalendarWeek}>{rows[i].toLocaleString('pt-PT', { weekday: 'long' }).substring(0, 3)}</div>
                    <div className={styles.CalendarDay}>{rows[i].toLocaleString("pt-PT", { day: '2-digit' })}</div>
                </button>
            );
        }
        return dayindents
    }

    function addZeroBefore(n) {
        return (n < 10 ? '0' : '') + n;
    }

    function PopulateCalendar(days) {
        try {

            var indents = [];

            var today = new Date()
            var resultDate = new Date();
            var result = JSON.parse(cadeirasJSON)
            var found = false

            if (days < 0) {
                days = Math.abs(days)
                resultDate.setDate(today.getDate() - parseInt(days))
            }
            else {
                resultDate.setDate(today.getDate() + parseInt(days))
            }

            for (let i = 0; i < result.length; i++) {
                var datainicioJson = new Date(Date.parse(result[i].datahora_inicio));
                var datafimJson = new Date(Date.parse(result[i].datahora_fim));
                if (datainicioJson.getDate() === resultDate.getDate()) {
                    found = true
                    indents.push(
                        <div className={styles.Cadeira}>
                            <div className={styles.CadeiraInfo}>
                                <div className={styles.NomeCadeira}>{result[i].nome}</div>
                                <div className={styles.HoraCadeira}>{addZeroBefore(datainicioJson.getHours()) + ":" + addZeroBefore(datainicioJson.getMinutes()) + "h - " + addZeroBefore((datafimJson.getHours())) + ":" + addZeroBefore(datafimJson.getMinutes()) + "h"}</div>
                                <div className={styles.NomeCadeira}>{result[i].sala}</div>
                            </div>
                            <div className={styles.TipoAula}>{result[i].ead ? 'Aula EAD' : 'Aula Presencial'}</div>
                        </div>
                    );
                }

            }

        } catch (e) {
            console.log('Still Loading: ' + e)
        }

        if(found === false)
            indents.push(<div className={styles.CadeiraErro}>Não existe nenhuma marcação no horário para o dia selecionado.</div>)
        
        setCadeiras(indents)
    }

    // console.log(rows[i].toLocaleString('pt-PT', {weekday:'long'}).substring(0,3))
    // console.log(rows[i].toLocaleString('pt-PT', {day:'2-digit'}))

    return (
        <>
            <div className={styles.block}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>Horário</div>
                    <div className={styles.subtitle}>Ano Letivo 2021/2022</div>
                </div>
                <div className={styles.content}>
                    <div style={{ textTransform: 'capitalize' }} className={styles.CalendarMonth}>
                        {new Date().toLocaleString("pt-PT", { month: "long" })}
                    </div>
                    <div className={styles.Calendar}>
                        {PopulateDaysCalendar()}
                    </div>
                    <div className={styles.Cadeiras}>
                        {isLoading ? <div className='bg-loading bg-cover bg-no-repeat bg-center w-24 h-24 m-auto'></div> : (cadeiras === null ? PopulateCalendar(0) : cadeiras) }
                    </div>
                    <button className={styles.BotaoHorario}>Ver Horário Completo</button>
                </div>
            </div>
            {/* <div>{new Date().toLocaleString("pt-PT", { month: "long" })}</div>
                    {new Date().toLocaleString('pt-PT', {weekday:'long'})}
                    <div>{new Date().toLocaleString("pt-PT", { day : '2-digit'})}</div>   */}
        </>
    )
}

export default Calendar
