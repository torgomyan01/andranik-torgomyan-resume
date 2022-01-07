import React from 'react';
import avatar from 'assets/images/avatar.jpg';
import { Language, leftInfo } from './left-info';
import { keyGenerator } from 'utils/helpers';
import Percents from 'features/percents/percents';

function LeftBlock() {
    return (
        <div className="left-block">
            <img
                src={avatar}
                className="avatar-img"
                alt="Avatar Andranik Torgomyan"
            />
            {leftInfo.map((info) => {
                return (
                    <>
                        <div className={`info-block-title ${info.className}`}>
                            {info.title}
                        </div>
                        {info.body.map((infoItem) => {
                            return (
                                <div
                                    key={keyGenerator(30)}
                                    className="info-block-item">
                                    <div className="icon">{infoItem.icon}</div>
                                    <div>
                                        <p className="title">
                                            {infoItem.title}
                                        </p>
                                        <p className="sub-title">
                                            {infoItem.subTitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                );
            })}
            <div className="info-block-title mt-5">Languages</div>
            {Language.map((lang) => {
                return (
                    <div key={keyGenerator(30)} className="language">
                        <p className="language-name">{lang.languageName}</p>
                        <Percents
                            width={200}
                            percent={lang.percent}
                            color="#fff"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default LeftBlock;
