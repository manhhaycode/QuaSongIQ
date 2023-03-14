import styles from './Farmer.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
import images from '~/assets/image';
import { useEffect } from 'react';

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

    useEffect(() => {
        if (val.farmer.onBoat.status && val.raft.pos !== val.farmer.river) {
            stateMovement(actions.setFarmerRiver(val.raft.pos));
        }
        // eslint-disable-next-line
    }, [val.raft.pos]);

    return (
        <img
            alt=""
            src={val.farmer.river === 1 ? images.farmer0 : images.farmer1}
            className={
                val.farmer.river === 1
                    ? !val.farmer.onBoat.status
                        ? cx('farmer-img')
                        : val.farmer.onBoat.pos === 1
                        ? cx('farmer-img', 'farmer-onboat1')
                        : cx('farmer-img', 'farmer-onboat2')
                    : !val.farmer.onBoat.status
                    ? cx('farmer-img2')
                    : val.farmer.onBoat.pos === 1
                    ? cx('farmer-img', 'farmer-onboat12')
                    : cx('farmer-img', 'farmer-onboat22')
            }
            onClick={handleClickFarmer}
            draggable="false"
        ></img>
    );
}
