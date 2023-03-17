import classNames from 'classnames/bind';
import styles from './Start.module.scss';
import images from '~/assets/image';
import { useSetRecoilState } from 'recoil';
import { actions, states } from '~/recoil';
const cx = classNames.bind(styles);

export default function Start() {
    const setState = useSetRecoilState(states.handleGameLayout);
    const handleClickStart = () => {
        setTimeout(() => {
            setState(actions.setStart(false));
            setState(actions.setPlaying(true));
        }, 1000);
    };
    return (
        <div className={cx('DivContainer')} style={{ position: 'relative', height: '100vh' }}>
            <img className={cx('background-start')} src={images.titleBackground} alt="" draggable="false"></img>
            <img className={cx('logo-start')} src={images.logoStart} alt="" draggable="false"></img>
            <img className={cx('title-start')} src={images.titleGame} alt="" draggable="false"></img>
            <img
                className={cx('button-start')}
                src={images.buttonStart}
                alt=""
                draggable="false"
                onClick={handleClickStart}
            ></img>
        </div>
    );
}
