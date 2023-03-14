import styles from './Tiger.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
import images from '~/assets/image';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

export default function Tiger() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);

    const handleClickTiger = () => {
        if (val.tiger.river === val.raft.pos) {
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
        }
    };

    useEffect(() => {
        if (val.tiger.onBoat.status && val.raft.pos !== val.tiger.river) {
            stateMovement(actions.setTigerRiver(val.raft.pos));
        }
        // eslint-disable-next-line
    }, [val.raft.pos]);

    return (
        <img
            alt=""
            src={val.tiger.river === 1 ? images.tiger0 : images.tiger1}
            className={
                val.tiger.river === 1
                    ? !val.tiger.onBoat.status
                        ? cx('tiger-img')
                        : val.tiger.onBoat.pos === 1
                        ? cx('tiger-img', 'tiger-onboat1')
                        : cx('tiger-img', 'tiger-onboat2')
                    : !val.tiger.onBoat.status
                    ? cx('tiger-img2')
                    : val.tiger.onBoat.pos === 1
                    ? cx('tiger-img', 'tiger-onboat12')
                    : cx('tiger-img', 'tiger-onboat22')
            }
            onClick={handleClickTiger}
            draggable="false"
        ></img>
    );
}
