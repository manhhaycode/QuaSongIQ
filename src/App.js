import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Play from './layouts/Play';
import Start from './layouts/Start';
import { states } from './recoil';

function App() {
    const stateLayout = useRecoilValue(states.gameLayout);

    return (
        <div className="App">
            {stateLayout.start && <Start />}
            {stateLayout.playing && <Play />}
        </div>
    );
}

export default App;
