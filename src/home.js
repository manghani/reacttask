import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <Link to = '/text'>Change Colour And Font</Link>
        </div>
     );
}
 
export default Home;