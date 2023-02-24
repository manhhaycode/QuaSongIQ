import styles from './Moment.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { states } from '~/recoil';
import Farmer from '~/components/Farmer';
import Sheep from '~/components/Sheep';
import Tiger from '~/components/Tiger';
import Carot from '~/components/Carot';
const cx = classNames.bind(styles);

export default function Movement() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);

    return (
        <div className="DivCoreGameContainer">
            <img alt="" className={cx('raft-img')} src={images.raftimage}></img>
            <Farmer />
            <Sheep />
            <Tiger />
            <Carot />
        </div>
    );
}
