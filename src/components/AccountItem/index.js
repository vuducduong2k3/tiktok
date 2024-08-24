import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faEllipsis } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <span className={cx('avartar-wrapper')}>
                <img
                    className={cx('avartar')}
                    src={data.avatar}
                    alt={data.full_name}
                />
            </span>
            <div className={cx('info')}>
                <div className={cx('info-wrap')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        <span >
                            {data.tick && <FontAwesomeIcon className={cx('checkcircle')}  icon={faCheckCircle} />}                            
                        </span>
                    </h4>

                    <span className={cx('username')}>{data.nickname}</span>
                </div>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </Link>
    );
}

export default AccountItem;
