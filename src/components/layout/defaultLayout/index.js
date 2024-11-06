import Header from '~/components/layout/components/header';
import Sidebar from './sidebar';

function defaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
