import AuthProvider from "../contexts/AuthProvider";
import Layout from "./Layout";

export default function Provider({ children }) {

    return (
        <AuthProvider>
            <Layout>
                {children}
            </Layout>
        </AuthProvider>
    );
};