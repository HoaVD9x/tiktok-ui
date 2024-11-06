import Header from '~/components/layout/components/header';
import Sidebar from './sidebar';

import styles from './defaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function defaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
