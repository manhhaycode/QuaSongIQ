import images from '~/assets/image';
import styles from './Raft.module.scss';
import classNames from 'classnames/bind';
import { useRecoilValue } from 'recoil';
import { gameState } from '~/recoil/listState';

const cx = classNames.bind(styles);

export default function Raft({ children }) {
    const val = useRecoilValue(gameState);

    return (
        <div className={val.raft.pos === 1 ? cx('raft-div1') : cx('raft-div2')}>
            <img alt="" className={cx('raft-img')} src={images.raftimage}></img>
            {children}
        </div>
    );
}
