import { useRecoilValue } from 'recoil';
import Loading from './layouts/Loading';
import Start from './layouts/Start';
import { states } from './recoil';

function App() {
    const stateLayout = useRecoilValue(states.gameState);
    return (
        <div className="App">
            {console.log(stateLayout)}
            {stateLayout.start && <Start />}
            {stateLayout.loading && <Loading />}
        </div>
    );
}

export default App;
