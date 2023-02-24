import classNames from 'classnames/bind';
import styles from './Play.module.scss';
import images from '~/assets/image';
import Movement from '~/components/Movement';
const cx = classNames.bind(styles);

export default function Play() {
    return (
        <div className={cx('DivContainer')} style={{ position: 'relative', height: '100vh' }}>
            <canvas width="2400" height="1225" style={{ width: '100%', height: '100%', position: 'absolute' }}></canvas>
            <img className={cx('background-playing')} src={images.playingBackground} alt="" draggable="false"></img>
            <Movement />
        </div>
    );
}
