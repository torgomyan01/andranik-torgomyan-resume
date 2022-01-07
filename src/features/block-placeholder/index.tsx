import React from 'react';
import { keyGenerator } from '../../utils/helpers';

interface IThisProps {
    width: number | string;
    height: number;
    borderRadius: number;
    status: boolean;
    count: number;
    className: string | any;
}

function BlockPlaceholder({
    width,
    height,
    borderRadius,
    status,
    count,
    className
}: IThisProps) {
    const countArray: any = [...Array.from(Array(count).keys())];

    return (
        <>
            {countArray.map(() => {
                return (
                    <span
                        className={`block-placeholder ${className}`}
                        key={keyGenerator(30)}
                        style={{
                            display: status ? 'inline-block' : 'none',
                            width,
                            height,
                            borderRadius: `${borderRadius}px`
                        }}
                    />
                );
            })}
        </>
    );
}

export default BlockPlaceholder;
