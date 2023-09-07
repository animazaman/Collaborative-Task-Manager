import PrimaryNav from '../PrimaryNav/PrimaryNav';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className=''>
            <div className='header'>
                <h3>Collaborative Task Management</h3>
                <PrimaryNav></PrimaryNav>
            </div>
        </div>
    );
};

export default HomePage;