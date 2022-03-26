import React from 'react'
import styles from './Email.module.scss';

function Email() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>E-mail Institucional</div>
                    <div className={styles.subtitle}>Mensagens: 839 / Não Lidas: 466</div>
                </div>
                <div className={styles.content}>
                    <div>Para visualizar o seu e-mail, terá que aceder à página do
                        Microsoft Office 365 e iniciar a sessão com o seu utilizador
                        (Ex:A0XXXXX@ismai.pt ou A0XXXXX@ipmaia.pt) e password da área privada.
                        Mais informações sobre o Office 365.
                    </div>
                    <a href='http://outlook.com/ismai.pt' target='_blank' rel="noreferrer"><div className='bg-outlook bg-cover bg-no-repeat bg-center h-[60px] m-auto mt-1 max-w-[165px]'></div></a>
                </div>
            </div>
        </>
    )
}

export default Email
