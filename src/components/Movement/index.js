import styles from './Moment.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useRef, useState } from 'react';
import { actions, states } from '~/recoil';
const cx = classNames.bind(styles);

export default function Movement() {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const val = useRecoilValue(states.gameState);
    const pos = useRef([
        { bottom: '210px', right: '560px' },
        { bottom: '190px', right: '650px' },
    ]);

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

    const handleClickCarot = () => {
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
    };

    return (
        <div className="DivCoreGameContainer">
            <img alt="" className={cx('raft-img')} src={images.raftimage}></img>
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
            <img
                alt=""
                src={images.carot}
                className={
                    !val.carot.onBoat.status
                        ? cx('carot-img')
                        : val.carot.onBoat.pos === 1
                        ? cx('carot-img', 'carot-onboat1')
                        : cx('carot-img', 'carot-onboat2')
                }
                onClick={handleClickCarot}
                draggable="false"
            ></img>
        </div>
    );
}
