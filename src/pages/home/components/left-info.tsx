import React from 'react';
import Paulownia from 'assets/images/Paulownia.png';
import adz from 'assets/images/adz.png';
import AboutUS from 'assets/images/AboutUS.png';
import mosService from 'assets/images/mosService.png';
import QT from 'assets/images/QT.png';
import TicTacToe from 'assets/images/tic-tac-toe.png';
import FaceApp from 'assets/images/face-app.png';

export const leftInfo = [
    {
        title: 'INFO',
        className: '',
        body: [
            {
                icon: <i className="fas fa-user" />,
                title: 'Name',
                subTitle: 'Andranik Torgomyan'
            },
            {
                icon: <i className="fas fa-map-marker-alt" />,
                title: 'Address',
                subTitle: (
                    <a
                        href="https://goo.gl/maps/XFbxyEoAzByorSuKA"
                        className="c-while-gray"
                        target="_blank"
                        rel="noreferrer">
                        Armenia, Yerevan, Nor-Norq
                    </a>
                )
            },
            {
                icon: <i className="fas fa-phone-alt" />,
                title: 'Phone',
                subTitle: (
                    <a
                        href="tel: +374 77 76-96-68"
                        className="c-while-gray"
                        target="_blank"
                        rel="noreferrer">
                        +374 77 76-96-68
                    </a>
                )
            },
            {
                icon: <i className="fas fa-envelope" />,
                title: 'Email',
                subTitle: (
                    <a
                        href="mailto: and.torgomyan01@gmail.com"
                        className="c-while-gray"
                        target="_blank"
                        rel="noreferrer">
                        and.torgomyan01@gmail.com
                    </a>
                )
            },
            {
                icon: <i className="fab fa-github" />,
                title: 'GitHub',
                subTitle: (
                    <a
                        href="https://github.com/torgomyan01"
                        className="c-while-gray"
                        rel="noreferrer">
                        https://github.com/torgomyan01
                    </a>
                )
            }
        ]
    },
    {
        title: 'SOCIAL',
        className: 'mt-5',
        body: [
            {
                icon: <i className="fab fa-linkedin" />,
                title: 'Linkedin',
                subTitle: (
                    <a
                        href="https://www.linkedin.com/in/torgomyan01/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        @torgomyan01
                    </a>
                )
            },
            {
                icon: <i className="fab fa-facebook-square" />,
                title: 'Facebook',
                subTitle: (
                    <a
                        href="https://www.facebook.com/torgomyan01/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        torgomyan01
                    </a>
                )
            },
            {
                icon: <i className="fab fa-telegram" />,
                title: 'Telegram',
                subTitle: (
                    <a
                        href="https://t.me/torgomyan01"
                        className="c-while-gray"
                        target="_blank"
                        rel="noreferrer">
                        +374 77 76-96-68
                    </a>
                )
            },
            {
                icon: <i className="fab fa-whatsapp-square" />,
                title: 'WhatsUp',
                subTitle: (
                    <a
                        href="https://wa.me/+37477769668?text=Hi Andranik"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        +374 77 76-96-68
                    </a>
                )
            },
            {
                icon: <i className="fab fa-viber" />,
                title: 'Viber',
                subTitle: (
                    <a
                        href="viber://add?number=+37477769668"
                        className="c-while-gray"
                        target="_blank"
                        rel="noreferrer">
                        +374 77 76-96-68
                    </a>
                )
            }
        ]
    },
    {
        title: 'PORTFOLIOS',
        className: 'mt-5',
        body: [
            {
                icon: <img src={Paulownia} alt="Paulownia" width={30} />,
                title: 'Paulownia',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/paulovina/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <img src={adz} alt="ADZ Motors" width={30} />,
                title: 'ADZ Motors',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/adz-motors/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <img src={AboutUS} alt="AboutUS" width={30} />,
                title: 'AboutUS',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/AboutUS/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <img src={mosService} alt="МосСервис" width={30} />,
                title: 'МосСервис',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/santechnik/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <img src={QT} alt="QUICKSTEPS TIMETABLE" width={30} />,
                title: 'QUICKSTEPS TIMETABLE',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/QUICKSTEPS/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <img src={FaceApp} alt="Face App" width={30} />,
                title: 'Face App',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/face-app/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            }
        ]
    },
    {
        title: 'React Portfolio',
        className: 'mt-5',
        body: [
            {
                icon: <i className="fas fa-music" />,
                title: 'LovSound',
                subTitle: (
                    <a
                        href="https://github.com/torgomyan01/lovsound"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <i className="fas fa-dice-one" />,
                title: 'H1',
                subTitle: (
                    <a
                        href="https://github.com/torgomyan01/h1"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <i className="fas fa-icons" />,
                title: 'Free Icons',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/icons/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                icon: <i className="fas fa-portrait" />,
                title: 'This Resume Page',
                subTitle: (
                    <a
                        href="https://github.com/torgomyan01/andranik-torgomyan-resume"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            }
        ]
    },
    {
        title: 'Games',
        className: 'mt-5',
        body: [
            {
                icon: <img src={TicTacToe} width={30} alt="TicTacToe" />,
                title: 'Tic-Tac-Toe Game',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/tic-tac-toe-game/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-play" />
                    </a>
                )
            }
        ]
    }
];
