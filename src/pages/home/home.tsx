import React from 'react';
import LeftBlock from './components/left-block';
import RightBlock from './components/right-block';
import PrintBlock from '../../features/print-block/print-block';

function Home() {
    return (
        <div className="site-content">
            <LeftBlock />
            <RightBlock />
            <PrintBlock />
        </div>
    );
}

export default Home;
