import React from 'react';

interface IThisProps {
    width: number;
    percent: number;
    color: string | null;
}

function Percents({ width, percent, color }: IThisProps) {
    return (
        <div className="loading" style={{ width }}>
            {percent >= 0 && percent <= 100 && (
                <div
                    className="loading-percent"
                    style={{
                        width: `${percent}%`,
                        background: color ? color : ''
                    }}
                />
            )}
        </div>
    );
}

export default Percents;
