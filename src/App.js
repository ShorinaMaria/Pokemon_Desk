import React from 'react';
import cn from 'classnames';

import './custom.css';
import s from './App.modules.scss';

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            This is App component
        </div>
    );
}

export default App;