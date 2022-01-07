import React from 'react';
import LeftBlock from './components/left-block';
import RightBlock from './components/right-block';

function Home() {
    return (
        <div className="site-content">
            <LeftBlock />
            <RightBlock />
        </div>
    );
}

export default Home;
