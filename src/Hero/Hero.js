import './Hero.css';

const Hero = ({page, setPage}) => {


    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>Find Your Park</h1>
                <p>WELCOME!</p>
                <button>Park Search</button>
                <button onClick={() => setPage("mountains")}>Mountain Search</button>
            </div>
        </div>
    );
}

export default Hero;