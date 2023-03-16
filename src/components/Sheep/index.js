import styles from './Sheep.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
import images from '~/assets/image';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

export default function Sheep() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);
    const refSheep = useRef();

    const handleClickSheep = () => {
        if (val.sheep.river === val.raft.pos) {
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
        }
    };

    useEffect(() => {
        if (val.sheep.onBoat.status && val.raft.pos !== val.sheep.river) {
            stateMovement(actions.setSheepRiver(val.raft.pos));
        }
        // eslint-disable-next-line
    }, [val.raft.pos]);

    return (
        <img
            alt=""
            src={val.sheep.river === 1 ? images.sheep0 : images.sheep1}
            className={
                val.sheep.river === 1
                    ? !val.sheep.onBoat.status
                        ? cx('sheep-img')
                        : val.sheep.onBoat.pos === 1
                        ? cx('sheep-img', 'sheep-onboat1')
                        : cx('sheep-img', 'sheep-onboat2')
                    : !val.sheep.onBoat.status
                    ? cx('sheep-img2')
                    : val.sheep.onBoat.pos === 1
                    ? cx('sheep-img', 'sheep-onboat12')
                    : cx('sheep-img', 'sheep-onboat22')
            }
            onClick={handleClickSheep}
            draggable="false"
            ref={refSheep}
        ></img>
    );
}
