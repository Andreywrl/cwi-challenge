import Header from './Header';
import '../../styles/Layout.css';

export default function Layout({ children }) {

    return (
        <div className="layout">
            <Header />
            <div className="content_centralizer">
                {children}
            </div>
        </div>
    );
};