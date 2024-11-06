import Header from '~/components/layout/components/header';

function headerOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default headerOnly;
