import React from 'react';
import { Link } from 'react-router-dom';

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
                subTitle: 'Armenia, Yerevan, Nor-Norq'
            },
            {
                icon: <i className="fas fa-phone-alt" />,
                title: 'Phone',
                subTitle: '+374 77 76-96-68'
            },
            {
                icon: <i className="fas fa-envelope" />,
                title: 'Email',
                subTitle: 'and.torgomyan01@gmail.com'
            }
        ]
    },
    {
        title: 'SOCIAL',
        className: 'mt-5',
        body: [
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
                icon: <i className="fab fa-linkedin" />,
                title: 'Linkedin',
                subTitle: (
                    <a
                        href="https://www.linkedin.com/in/andranik-torgomyan-1193221b0/"
                        target="_blank"
                        className="c-while-gray"
                        rel="noreferrer">
                        andranik-torgomyan-1193221b0
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
    }
];

export const Language = [
    {
        languageName: 'Russian',
        percent: 80
    },
    {
        languageName: 'English',
        percent: 30
    }
];
