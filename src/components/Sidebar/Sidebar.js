import { useState } from "react";
import styles from './Sidebar.module.scss';
import { MdOutlineDarkMode, MdDarkMode, MdOutlineExpandMore } from 'react-icons/md'
import { Menu } from '@headlessui/react'
import useDarkmode from '../../hooks/useDarkmode';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [gotIt, setgotIt] = useState(false);
    const [colorTheme, setTheme] = useDarkmode();

    const token = localStorage.getItem('Token')

    if (gotIt === false) {
        setgotIt(true)
        axios.post('http://127.0.0.1:8080/listarinfoaluno', {
            token: token
        })
            .then(function (res) {
                if (res.data !== null) {
                    if (res.data.Code === 401 || res.data.Code === 400)
                        Logout()

                    setValue(res.data.Aluno[0][2])
                }
            })
            .catch(function (error) {
                //console.log(error);
            });
    }

    function Logout() {
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        <div>

            {/* Mobile */}
            <div className={styles.mobileNav}>
                <Link to="/">
                    <button className={styles.ISMAIlogoNav}></button>
                </Link>
                <button className={styles.darkmodeIcon} onClick={() => setTheme(colorTheme)}>{colorTheme === 'light' ? <MdDarkMode size={25} /> : <MdOutlineDarkMode size={20} />}</button>
                <button onClick={() => setIsOpen(!isOpen)}
                    className="w-20 p-4 focus:outline-none focus:bg-terciary"
                    type="button"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <svg className="h-5 w-5 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className={styles.sidebar}>
                <div className={styles.logoblock}>
                    <Link to="/">
                        <div className={styles.ISMAIlogo}></div>
                    </Link>
                    <button className={styles.btnIsmai}>
                        <span className={styles.txtIsmai}>Bemvindo</span>
                    </button>
                    <span className={styles.txtIsmai_sec}>{value === null ? 'Aluno' :
                        <Menu as="conta" className="relative inline-block text-center">
                            <Menu.Button className={styles.menuButton}>{value} <MdOutlineExpandMore /></Menu.Button>

                            <Menu.Items className="ring-opacity-5 focus:outline-none">
                                <div className="py-1 text-center">
                                    <Menu.Item>
                                        <button className={styles.menuButtonMob}>
                                            Perfil
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButtonMob} onClick={Logout}>
                                            Logout
                                        </button>
                                    </Menu.Item>

                                </div>
                            </Menu.Items>
                        </Menu>

                    }</span>
                </div>
                <nav>
                    <Menu as="documentos" className="relative inline-block text-left">
                        <div><Menu.Button className={styles.menuButton}>Documentos <MdOutlineExpandMore /></Menu.Button></div>

                        <Menu.Items className="ml-6 ring-opacity-5 focus:outline-none mb-2">
                            <div className="py-1 text-left">
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Pedido Documentos
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Informação
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Regulamento
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <Menu as="servicos" className="relative inline-block text-left">
                        <div><Menu.Button className={styles.menuButton}>Serviços <MdOutlineExpandMore /></Menu.Button></div>

                        <Menu.Items className="ml-8 ring-opacity-5 focus:outline-none mb-2">
                            <div className="py-1 text-left">
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Notas
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                <Link to="/anuncios">
                                    <button className={styles.menuButton}>
                                        Anúncios
                                    </button>
                                </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Disciplinas
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <Menu as="tesouraria" className="relative inline-block text-left">
                        <div><Menu.Button className={styles.menuButton}>Tesouraria <MdOutlineExpandMore /></Menu.Button></div>

                        <Menu.Items className="ml-6 ring-opacity-5 focus:outline-none mb-2">
                            <div className="py-1 text-left">
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Pagamentos MB
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Situação
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <Menu as="secretaria" className="relative inline-block text-left">
                        <div><Menu.Button className={styles.menuButton}>Secretaria <MdOutlineExpandMore /></Menu.Button></div>

                        <Menu.Items className="ml-6 ring-opacity-5 focus:outline-none mb-2">
                            <div className="py-1 text-left">
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Acesso Parque
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Inscrições Exames
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Pedido Permuta de Turno
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className={styles.menuButton}>
                                        Inscrição Online
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                    <button className={styles.menuButton} onClick={() => setTheme(colorTheme)}>{colorTheme === 'light' ? <MdDarkMode size={20} /> : <MdOutlineDarkMode size={20} />}Modo Escuro</button>
                </nav>

            </div>
            {
                isOpen ?
                    <nav className={styles.subMenu}>
                        <Menu as="documentos" className="relative text-left">
                            <div><Menu.Button className={styles.menuButton}>Documentos <MdOutlineExpandMore /></Menu.Button></div>

                            <Menu.Items className="ml-6 ring-opacity-5 focus:outline-none mb-2">
                                <div className="py-1 text-left">
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Pedido Documentos
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Informação
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Regulamento
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                        <Menu as="servicos" className="relative text-left">
                            <div><Menu.Button className={styles.menuButton}>Serviços <MdOutlineExpandMore /></Menu.Button></div>

                            <Menu.Items className="ml-8 ring-opacity-5 focus:outline-none mb-2">
                                <div className="py-1 text-left">
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Notas
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Anúncios
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Disciplinas
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                        <Menu as="tesouraria" className="relative text-left">
                            <div><Menu.Button className={styles.menuButton}>Tesouraria <MdOutlineExpandMore /></Menu.Button></div>

                            <Menu.Items className="ml-6 ring-opacity-5 focus:outline-none mb-2">
                                <div className="py-1 text-left">
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Pagamentos MB
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Situação
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                        <Menu as="secretaria" className="relative text-left">
                            <div><Menu.Button className={styles.menuButton}>Secretaria <MdOutlineExpandMore /></Menu.Button></div>

                            <Menu.Items className="ml-6 ring-opacity-5 focus:outline-none mb-2">
                                <div className="py-1 text-left">
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Acesso Parque
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Inscrições Exames
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Pedido Permuta de Turno
                                        </button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <button className={styles.menuButton}>
                                            Inscrição Online
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                        <hr className="border-t-1 border-black" />
                        <span className={styles.txtIsmai_sec}>{value === null ? 'Aluno' :
                            <Menu as="conta" className="relative inline-block text-left">
                                <Menu.Button className={styles.menuButton}>{value} <MdOutlineExpandMore /></Menu.Button>

                                <Menu.Items className="ring-opacity-5 focus:outline-none">
                                    <div className="py-1 text-left">
                                        <Menu.Item>
                                            <button className={styles.menuButton}>
                                                Perfil
                                            </button>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button className={styles.menuButton} onClick={Logout}>
                                                Logout
                                            </button>
                                        </Menu.Item>

                                    </div>
                                </Menu.Items>
                            </Menu>

                        }</span>
                    </nav> : <div></div>}
        </div>
    );
};


export default Sidebar;