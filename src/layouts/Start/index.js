import classNames from 'classnames/bind';
import styles from './Start.module.scss';
import images from '~/assets/image';
const cx = classNames.bind(styles);

export default function Start() {
    return (
        <div style={{ position: 'relative' }}>
            <img
                style={{ position: 'absolute', zIndex: 2, height: 'auto', left: 80 }}
                alt=""
                src={images.titleGame}
            ></img>
            <img style={{ position: 'absolute', width: '100%' }} alt="" src={images.titleBackground}></img>
            <img
                style={{ position: 'absolute', zIndex: 2, height: 'auto', bottom: 0, right: 0 }}
                alt=""
                src={images.logoStart}
            ></img>
            <img
                style={{ position: 'absolute', zIndex: 2, height: 'auto', bottom: 212, left: 215 }}
                alt=""
                src={images.buttonStart}
            ></img>
        </div>
    );
}
