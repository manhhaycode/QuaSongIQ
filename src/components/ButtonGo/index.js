import styles from './ButtonGo.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameState, handleGameState } from '~/recoil/listState';
import { actions } from '~/recoil';

const cx = classNames.bind(styles);

export default function ButtonGo() {
    const setGo = useSetRecoilState(handleGameState);
    const val = useRecoilValue(gameState);

    const handleClickGo = () => {
        if (!val.farmer.onBoat.status) {
            alert('Farmer must on raft');
            return;
        }

        if (!val.tiger.onBoat.status && !val.sheep.onBoat.status && val.sheep.river === val.tiger.river) {
            alert('Tiger will eat sheep');
            return;
        }

        if (!val.sheep.onBoat.status && !val.carot.onBoat.status && val.sheep.river === val.carot.river) {
            alert('Sheep will eat carot');
            return;
        }

        setGo(actions.setRaft({ pos: val.raft.pos === 1 ? 2 : 1, ref: val.raft.ref }));
    };
    return (
        !val.help && (
            <img src={images.buttonGo} alt="" className={cx('btn-go')} draggable="false" onClick={handleClickGo}></img>
        )
    );
}
