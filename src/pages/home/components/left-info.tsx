import React from 'react';
import Paulownia from 'assets/images/Paulownia.png';
import adz from 'assets/images/adz.png';
import AboutUS from 'assets/images/AboutUS.png';
import mosService from 'assets/images/mosService.png';
import QT from 'assets/images/QT.png';
import TicTacToe from 'assets/images/tic-tac-toe.png';
import FaceApp from 'assets/images/face-app.png';
import Youtube from 'assets/images/youtube.png';
import ciklevka from 'assets/images/ciklevka.png';
import YOUNGZSOFT from 'assets/images/YOUNGZSOFT.png';
import sys from 'assets/images/sys.png';
import YOUNGZSOFT_landing from 'assets/images/YOUNGZSOFT_landing.png';
import cripoPost from 'assets/images/cripoPost.png';
import shopProductCard from 'assets/images/shop-product-card.png';
import nt from 'assets/images/nt.png';
import fullStroi from 'assets/images/full-stroi.png';
import winitp from 'assets/images/winitp.png';
import adzMotors from 'assets/images/adz-motors.png';

export const leftInfo = [
    {
        title: 'INFO',
        className: '',
        body: [
            {
                tooltip: null,
                icon: <i className="fas fa-user" />,
                title: 'Name',
                subTitle: 'Andranik Torgomyan'
            },
            {
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: 'Open Page Ciklevka',
                icon: <img src={ciklevka} alt="Ciklevka" width={30} />,
                title: 'Ciklevka',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/ciklevka/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page Paulownia',
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
                tooltip: 'Open Full Stroi',
                icon: <img src={fullStroi} alt="Full Stroi" width={30} />,
                title: 'Full Stroi',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/full-stroi/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page ADZ Motors',
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
                tooltip: 'Open Page YOUNGZSOFT Users',
                icon: <img src={YOUNGZSOFT} alt="YOUNGZSOFT" width={30} />,
                title: 'YOUNGZSOFT Users',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/YOUNGZSOFT/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page sys.id',
                icon: <img src={sys} alt="sys" width={30} />,
                title: 'sys.id',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/sys/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page YOUNGZSOFT Landing',
                icon: (
                    <img
                        src={YOUNGZSOFT_landing}
                        alt="YOUNGZSOFT_landing"
                        width={30}
                    />
                ),
                title: 'YOUNGZSOFT Landing',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/YOUNGZSOFT_landing/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page cripoPost',
                icon: <img src={cripoPost} alt="cripoPost" width={30} />,
                title: 'cripoPost',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/cripoPost/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page cripoPost Backend',
                icon: <img src={cripoPost} alt="cripoPost" width={30} />,
                title: 'cripoPost Backend',
                subTitle: (
                    <a
                        href="https://github.com/torgomyan01/cripoPost_backend"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page Shop Product Card',
                icon: (
                    <img
                        src={shopProductCard}
                        alt="shopProductCard"
                        width={30}
                    />
                ),
                title: 'Shop Product Card',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/shop-product-card/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page NT',
                icon: <img src={nt} alt="nt" width={30} />,
                title: 'NT',
                subTitle: (
                    <a
                        href="https://torgomyan01.github.io/layout-framework/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open Page AboutUS',
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
                tooltip: 'Open Page МосСервис',
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
                tooltip: 'Open Page QUICKSTEPS TIMETABLE',
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
                tooltip: 'Open Page Face App',
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
            },
            {
                tooltip: 'Open Page Youtube Copy Project',
                icon: <img src={Youtube} alt="Face App" width={30} />,
                title: 'Youtube Copy Project',
                subTitle: (
                    <a
                        href=" https://torgomyan01.github.io/youtube-project/"
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
        title: 'REACT PORTFOLIO',
        className: 'mt-5',
        body: [
            {
                tooltip: null,
                icon: <i className="fas fa-images" />,
                title: 'Fanbooks',
                subTitle: (
                    <a
                        href="https://github.com/torgomyan01/Fanbook"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
                tooltip: null,
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
        title: 'PRACTICE GAMES',
        className: 'mt-5',
        body: [
            {
                tooltip: null,
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
    },
    {
        title: 'PORTFOLIO DESIGNS',
        className: 'mt-5',
        body: [
            {
                tooltip: 'Open design YOUNGZSOFT Landing',
                icon: (
                    <img src={YOUNGZSOFT} width={30} alt="YOUNGZSOFT landing" />
                ),
                title: 'YOUNGZSOFT Landing',
                subTitle: (
                    <a
                        href="https://www.figma.com/file/X2LMX4IjeAFU69FiknaBqx/YOUNGZSOFT_landing"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open design YOUNGZSOFT Users page',
                icon: <img src={YOUNGZSOFT} width={30} alt="YOUNGZSOFT" />,
                title: 'YOUNGZSOFT Users page',
                subTitle: (
                    <a
                        href="https://www.figma.com/file/Uu0VyLkvi4gIouQhmM0Oyp/YOUNGZSOFT-Copy"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open design FULL STROI',
                icon: <img src={fullStroi} width={30} alt="FULL STROI" />,
                title: 'FULL STROI',
                subTitle: (
                    <a
                        href="https://www.figma.com/file/VUCuwTblh1EEvpmwmIn3gf/FULL-STROI"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open design Win IP',
                icon: <img src={winitp} width={30} alt="Win IP" />,
                title: 'Win IP',
                subTitle: (
                    <a
                        href="https://www.figma.com/file/KwRQdywsgdbQYY5EXAhAOB/WINIIP-Copy"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open design Transmission',
                icon: <img src={adz} width={30} alt="Transmission" />,
                title: 'Transmission',
                subTitle: (
                    <a
                        href="https://www.figma.com/file/XcoF36r7xZyBcHUOHjYFFE/Transmision"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            },
            {
                tooltip: 'Open design ADZ Motors',
                icon: <img src={adzMotors} width={30} alt="ADZ Motors" />,
                title: 'ADZ Motors',
                subTitle: (
                    <a
                        href="https://www.figma.com/file/XcoF36r7xZyBcHUOHjYFFE/Transmision"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        <i className="fas fa-external-link-alt" />
                    </a>
                )
            }
        ]
    }
];
