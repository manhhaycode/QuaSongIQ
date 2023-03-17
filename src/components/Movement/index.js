import Farmer from '~/components/Farmer';
import Sheep from '~/components/Sheep';
import Tiger from '~/components/Tiger';
import Carot from '~/components/Carot';
import Raft from '~/components/Raft';
import ButtonGo from '~/components/ButtonGo';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';

export default function Movement() {
    const val = useRecoilValue(states.gameState);
    const stateLayout = useSetRecoilState(states.handleGameLayout);

    useEffect(() => {
        if (val.carot.river + val.farmer.river + val.sheep.river + val.tiger.river === 8) {
            alert('You win');
            stateLayout(actions.setStart(true));
            stateLayout(actions.setPlaying(false));
        }
        // eslint-disable-next-line
    }, [val.carot, val.farmer, val.sheep, val.tiger]);
    return (
        <div className="DivCoreGameContainer">
            <Raft />
            <Farmer />
            <Sheep />
            <Tiger />
            <Carot />
            <ButtonGo />
        </div>
    );
}
