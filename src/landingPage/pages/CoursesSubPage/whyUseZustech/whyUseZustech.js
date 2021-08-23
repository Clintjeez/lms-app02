//Import images:
import teaching from "./assets/Teaching 3.png";
import certificate from "./assets/Certificate.png";
import bookApple from "./assets/Book Apple.png";
import studyLamp from "./assets/Study lamp 3.png";

//Styling:
import "./whyUseZustech.scss";


const WhyUseZustech = () => {
    return ( 
        <section id="whyUseZustech">
            <div>
                <p id="sectionTitle">why use Zustech</p>
            </div>
            <div id="reasons">
                <div>
                    <img src={teaching} alt="Teaching icon" />
                    <p>one-one support</p>
                </div>
                <div>
                    <img src={certificate} alt="Certificate icon" />
                    <p>industry expert course teachers</p>
                </div>
                <div>
                    <img src={bookApple} alt="Book and apple icon" />
                    <p>work experience whilst training</p>
                </div>
                <div>
                    <img src={studyLamp} alt="Study lamp icon" />
                    <p>flexible work schedule</p>
                </div>
            </div>
        </section>
     );
}
 
export default WhyUseZustech;