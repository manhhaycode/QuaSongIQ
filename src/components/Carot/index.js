import styles from './Carot.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { states, actions } from '~/recoil';
import images from '~/assets/image';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

export default function Carot() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);

    const handleClickCarot = () => {
        if (val.carot.river === val.raft.pos) {
            if (!val.carot.onBoat.status) {
                if (val.seatEmpty.first) {
                    stateMovement(actions.setCarotOnBoat({ status: true, pos: 1 }));
                    stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: false }));
                } else if (val.seatEmpty.second) {
                    stateMovement(actions.setCarotOnBoat({ status: true, pos: 2 }));
                    stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: false }));
                }
            } else {
                if (val.carot.onBoat.pos === 1) {
                    stateMovement(actions.setCarotOnBoat({ status: false, pos: 0 }));
                    stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, first: true }));
                } else if (val.carot.onBoat.pos === 2) {
                    stateMovement(actions.setCarotOnBoat({ status: false, pos: 0 }));
                    stateMovement(actions.setSeatEmpty({ ...val.seatEmpty, second: true }));
                }
            }
        }
    };

    useEffect(() => {
        if (val.carot.onBoat.status && val.raft.pos !== val.carot.river) {
            stateMovement(actions.setCarotRiver(val.raft.pos));
        }
        // eslint-disable-next-line
    }, [val.raft.pos]);

    return (
        <img
            alt=""
            src={images.carot}
            className={
                val.carot.river === 1
                    ? !val.carot.onBoat.status
                        ? cx('carot-img')
                        : val.carot.onBoat.pos === 1
                        ? cx('carot-img', 'carot-onboat1')
                        : cx('carot-img', 'carot-onboat2')
                    : !val.carot.onBoat.status
                    ? cx('carot-img2')
                    : val.carot.onBoat.pos === 1
                    ? cx('carot-img', 'carot-onboat12')
                    : cx('carot-img', 'carot-onboat22')
            }
            onClick={handleClickCarot}
            draggable="false"
        ></img>
    );
}
