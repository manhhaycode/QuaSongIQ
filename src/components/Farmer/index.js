import styles from './Farmer.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
import images from '~/assets/image';

const cx = classNames.bind(styles);

export default function Farmer() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);

    const handleClickFarmer = () => {
        if (!val.farmer.onBoat.status) {
            if (val.seatEmpty.first) {
                stateMovement(actions.setfarmerOnBoat({ status: true, pos: 1 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: false }));
            } else if (val.seatEmpty.second) {
                stateMovement(actions.setfarmerOnBoat({ status: true, pos: 2 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: false }));
            }
        } else {
            if (val.farmer.onBoat.pos === 1) {
                stateMovement(actions.setfarmerOnBoat({ status: false, pos: 0 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: true }));
            } else if (val.farmer.onBoat.pos === 2) {
                stateMovement(actions.setfarmerOnBoat({ status: false, pos: 0 }));
                stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: true }));
            }
        }
    };

    return (
        <img
            alt=""
            className={
                !val.farmer.onBoat.status
                    ? cx('farmer-img')
                    : val.farmer.onBoat.pos === 1
                    ? cx('farmer-img', 'farmer-onboat1')
                    : cx('farmer-img', 'farmer-onboat2')
            }
            src={images.framer0}
            onClick={handleClickFarmer}
            draggable="false"
        ></img>
    );
}
