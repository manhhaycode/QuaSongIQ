import styles from './Tiger.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
import images from '~/assets/image';

const cx = classNames.bind(styles);

export default function Tiger() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);

    const handleClickTiger = () => {
        if (!val.tiger.onBoat.status) {
            if (val.seatEmpty.first) {
                stateMovement(actions.setTigerOnBoat({ status: true, pos: 1 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: false }));
            } else if (val.seatEmpty.second) {
                stateMovement(actions.setTigerOnBoat({ status: true, pos: 2 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: false }));
            }
        } else {
            if (val.tiger.onBoat.pos === 1) {
                stateMovement(actions.setTigerOnBoat({ status: false, pos: 0 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: true }));
            } else if (val.tiger.onBoat.pos === 2) {
                stateMovement(actions.setTigerOnBoat({ status: false, pos: 0 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: true }));
            }
        }
    };

    return (
        <img
            alt=""
            className={
                !val.tiger.onBoat.status
                    ? cx('tiger-img')
                    : val.tiger.onBoat.pos === 1
                    ? cx('tiger-img', 'tiger-onboat1')
                    : cx('tiger-img', 'tiger-onboat2')
            }
            src={images.tiger0}
            onClick={handleClickTiger}
            draggable="false"
        ></img>
    );
}
