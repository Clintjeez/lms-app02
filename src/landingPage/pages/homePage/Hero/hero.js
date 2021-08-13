import './hero.scss';
import Hero1 from './assets/hero1.png';
import Hero2 from './assets/hero2.png';
import Hero3 from './assets/hero3.png';


const Hero = () => {
    return (
        <section id="hero"className="container">
            <div className="hero">
                <div className="hero-left">
                    <div className="intro">
                        <h1 className="title">Start Your Career At <span>Zustech Academy</span></h1>
                        
                        <p className="cta-text">Start learning today at Zustech and learn core skills in: Business Analysis, Project Management, Software Testing, Test Automation and more!</p>
                    </div>

                    <form className="cta-form">
                        <input 
                            placeholder="Enter your email"
                            type="text"
                            className="cta-input"
                            id="cta-input"
                        />
                        <button type="submit" className="cta-submit-btn btn">
                            Start Free Trial
                        </button>
                    </form>
                    <div className="feature-points">
                        <ul>
                            <li className="bullet">Powered by Zustech</li>
                        </ul>
                        <ul>
                            <li className="bullet">30 / 7 day free trial</li>
                        </ul>
                    </div>
                </div>
                
                <div className="hero-right bg">
                    <img src={Hero1} alt="person over vector" className="hero1"/>
                    <img src={Hero2} alt="person over vector" className="hero2"/>
                    <img src={Hero3} alt="person over vector" className="hero3"/>
                    
                    <form className="cta-form-2">
                        <input 
                            placeholder="Enter your email"
                            type="text"
                            className="cta-input"
                            id="cta-input"
                        />
                        <button type="submit" className="cta-submit-btn btn">
                            Start Free Trial
                        </button>
                    </form>
                    <div className="feature-points-2">
                        <ul>
                            <li className="bullet">Powered by Zustech</li>
                        </ul>
                        <ul>
                            <li className="bullet">30 / 7 day free trial</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero;