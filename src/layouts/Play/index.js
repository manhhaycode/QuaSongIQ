import classNames from 'classnames/bind';
import styles from './Play.module.scss';
import images from '~/assets/image';
import Movement from '~/components/Movement';
import useAIHelper from '~/helperHook/useAIHelper';
import { useRecoilValue } from 'recoil';
import { states } from '~/recoil';

const cx = classNames.bind(styles);

export default function Play() {
    const { handleHelp } = useAIHelper();
    const val = useRecoilValue(states.gameState);
    return (
        <div className={cx('DivContainer')} style={{ position: 'relative', height: '100vh' }}>
            {!val.help && (
                <img
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        zIndex: '100',
                    }}
                    onClick={handleHelp}
                    src={images.help}
                ></img>
            )}
            <canvas width="2400" height="1225" style={{ width: '100%', height: '100%', position: 'absolute' }}></canvas>
            <img className={cx('background-playing')} src={images.playingBackground} alt="" draggable="false"></img>
            <Movement />
        </div>
    );
}
