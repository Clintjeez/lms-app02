import 'antd/dist/antd.css';
import './subPageHero.scss';

import getStars from "../../../../components/courseCard/helpers/getStars";
import getStar from "../../../../components/courseCard/helpers/getStar";
// import getLevel from "../../../../components/courseCard/helpers/getLevel";

//Images:
import difficultyBarImage from "./assets/difficultyBar.svg";



//Data will be use to make it dynamic
const SubPageHero = ({
    // id,
    rating = 4.2,
    rateCount = 763,
    level = "beginner",
}) => {
    // round start to nearest half (0.5)
    function roundHalf(num) {
        return (Math.round(num * 2) / 2).toFixed(1);
    }
    return ( 
        <section id={'SubPageHero'}>
            
                <div id="path">
                    {/* Anchors to be changed to routing Links */}
                    {/* <h3><a href="#">Development</a> &gt; <a href="#">Data Science</a> &gt; <a href="#">Python</a></h3> */}
                </div>
                    
                <div id="section-1">
                    
                        <div className="courseInfo">
                            <h1>Learn Python Programming Masterclass</h1>
                            {/* <div className="courseRating">
                                <p className="rating-value">4.2</p>
                                <img src={starsImage} alt="Star rating" />
                                <p className="rating-count">(763)</p>
                            </div> */}
                            <div className="courseRating">
                                <span className="rating-value">{rating}</span>
                                <div className="stars">
                                    {getStars(roundHalf(rating)).map((rating, index) => (
                                    <img src={getStar(rating)} width={16} key={index} alt="star" />
                                    ))}
                                </div>
                                <span className="rating-count">({rateCount})</span>
                            </div>
                            <p id="courseDescription">
                            This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3
                            </p>
                            <div id="courseTrialOne">
                                <button className="trialStart">Start Free Trial</button>
                                <p>start a 7 day free trial and see if you like this course </p>
                            </div>
                        </div>
                     
    
                        <div id="HeroImage">
                            <button id="previewButton">Preview</button>
                        </div>
                    

                </div>
                <div className="courseStats">
                    <div id="courseDifficulty">
                        <img id="difficultyBar" src={difficultyBarImage} alt="course difficulty bar" />
                        <p>{level}</p>
                    </div>
                    <div id="studentEnrolled">
                        <h3>1,356</h3>
                        <p>students enrolled</p>
                    </div>
                    <div id="numProjects">
                        <h3>25</h3>
                        <p>projects</p>
                    </div>
                    <div id="hoursOfContent">
                        <h3>40 hours</h3>
                        <p>of video content</p>
                    </div>
                </div>
                <div id="courseTrialTwo">
                            <button className="trialStart">Start Free Trial</button>
                            <p>start a 7 day free trial and see if you like this course </p>
                </div>
            
        </section>
     );
}
 
export default SubPageHero;