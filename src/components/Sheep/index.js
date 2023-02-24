import styles from './Sheep.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
import images from '~/assets/image';

const cx = classNames.bind(styles);

export default function Sheep() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);

    const handleClickSheep = () => {
        if (!val.sheep.onBoat.status) {
            if (val.seatEmpty.first) {
                stateMovement(actions.setSheepOnBoat({ status: true, pos: 1 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: false }));
            } else if (val.seatEmpty.second) {
                stateMovement(actions.setSheepOnBoat({ status: true, pos: 2 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: false }));
            }
        } else {
            if (val.sheep.onBoat.pos === 1) {
                stateMovement(actions.setSheepOnBoat({ status: false, pos: 0 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: true }));
            } else if (val.sheep.onBoat.pos === 2) {
                stateMovement(actions.setSheepOnBoat({ status: false, pos: 0 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: true }));
            }
        }
    };

    return (
        <img
            alt=""
            src={images.sheep0}
            className={
                !val.sheep.onBoat.status
                    ? cx('sheep-img')
                    : val.sheep.onBoat.pos === 1
                    ? cx('sheep-img', 'sheep-onboat1')
                    : cx('sheep-img', 'sheep-onboat2')
            }
            onClick={handleClickSheep}
            draggable="false"
        ></img>
    );
}
