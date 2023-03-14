import images from '~/assets/image';
import styles from './Raft.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameState, handleGameState } from '~/recoil/listState';
import { useEffect, useRef } from 'react';
import { actions } from '~/recoil';

const cx = classNames.bind(styles);

export default function Raft({ children }) {
    const val = useRecoilValue(gameState);
    const setRef = useSetRecoilState(handleGameState);
    const raftRef = useRef();
    useEffect(() => {
        setRef(actions.setRaft({ ref: raftRef, pos: val.raft.pos }));
    }, []);
    return (
        <div className={val.raft.pos === 1 ? cx('raft-div1') : cx('raft-div2')} ref={raftRef}>
            <img alt="" className={cx('raft-img')} src={images.raftimage}></img>
            {children}
        </div>
    );
}
