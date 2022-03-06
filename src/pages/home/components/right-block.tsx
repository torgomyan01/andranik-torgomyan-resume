import React from 'react';
import { Language, rightInfo, SkillsItems } from './right-info';
import { keyGenerator } from 'utils/helpers';
import Percents from 'features/percents/percents';

function RightBlock() {
    return (
        <div className="right-block">
            <h1 className="outer-name">ANDRANIK TORGOMYAN</h1>
            <p className="outer-d">FULL STACK DEVELOPER</p>

            {rightInfo.map((info) => {
                return (
                    <>
                        <div
                            key={keyGenerator(20)}
                            className="right-info-block">
                            <span className="round-and-icon">{info.icon}</span>
                            <p className="title">{info.title}</p>
                        </div>
                        {info.items.map((item) => {
                            return (
                                <div
                                    key={keyGenerator(20)}
                                    className="info-item">
                                    <div className="data-item">{item.date}</div>
                                    <div className="item-block">
                                        <p className="item-title">
                                            {item.office}
                                        </p>
                                        <p className="item-title-description">
                                            {item.position}
                                        </p>
                                        <p className="item-sub-title">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                );
            })}
            <div className="right-info-block">
                <span className="round-and-icon">
                    <i className="fas fa-business-time" />
                </span>
                <p className="title">SKILLS AND EXPERTIZE</p>
            </div>
            <div className="skills-body">
                <div className="skills-block">
                    {SkillsItems.map((items) => {
                        return (
                            <div
                                key={keyGenerator(30)}
                                className="skills-items">
                                <div className="name">{items.name}</div>
                                <Percents
                                    width={150}
                                    percent={items.percent}
                                    color={null}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="right-info-block">
                <span className="round-and-icon">
                    <i className="fas fa-globe-americas" />
                </span>
                <p className="title">LANGUAGE</p>
            </div>
            <div className="skills-body">
                <div className="skills-block">
                    {Language.map((lang) => (
                        <div key={keyGenerator(30)} className="skills-items">
                            <div className="name">{lang.languageName}</div>
                            <Percents
                                width={150}
                                percent={lang.percent}
                                color={null}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RightBlock;
