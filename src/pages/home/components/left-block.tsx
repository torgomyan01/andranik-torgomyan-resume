import React from 'react';
import avatar from 'assets/images/avatar.jpg';
import { leftInfo } from './left-info';
import { keyGenerator } from 'utils/helpers';

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
                        <div className="left-block-section">
                            {info.body.map((infoItem) => {
                                return (
                                    <div
                                        key={keyGenerator(30)}
                                        className="info-block-item">
                                        <div className="icon">
                                            {infoItem.icon}
                                        </div>
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
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default LeftBlock;
