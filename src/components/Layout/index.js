import { useAuth } from '../../contexts/AuthProvider';
import './Layout.css';

export default function Layout({ children }) {

    const { userData } = useAuth();

    function Header() {

        return (userData &&
            <div className="layout_header_centralizer" >
                <div className="layout_header_content" >
                    <img />

                    <button>
                        Sair
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="layout">
            <Header />
            <div className="layout_content_centralizer">
                {children}
            </div>
        </div>
    );
};