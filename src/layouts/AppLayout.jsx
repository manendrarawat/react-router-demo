import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
             React Router Demo
            <Header />
            { isLoading && <div>Loading....</div>}
            <Outlet />
        </div>
    );
};

export default AppLayout;