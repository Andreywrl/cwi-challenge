import { useAuth } from "../contexts/AuthProvider";

export default function RouteWrapper({ loggedComponent, defaultComponent, isPrivate }) {

    const { user } = useAuth();

    if (user && !isPrivate) {

        return loggedComponent; //direciona para página privada.

    } else if (!user && isPrivate) {

        return defaultComponent; //direciona para página inicial.

    } else {

        return user ? loggedComponent : defaultComponent;

    };
};

