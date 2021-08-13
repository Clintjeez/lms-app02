// Imports:
import { Collapse } from 'antd';

//Styling:
import "./courseContentSection.scss";

import Arrow from "./assets/ArrowVector.svg"
import { useState } from 'react';






const { Panel } = Collapse;
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam voluptates dignissimos. Itaque corrupti omnis iure laudantium ipsam vitae consequatur laboriosam commodi debitis totam error, est ducimus reiciendis esse. Ipsa!";

const CourseContentSection = () => {
    const [revealAll, setRevealAll] = useState([]);
    const handleClick = () => {
        setRevealAll([1, 2, 3, 4, 5, 6, 7, 8 ,9]);
    }



    return ( 
        <section id="CourseContentSection">
            <div id="CourseContentSectionTitle">
                <p id="CourseContentSectionTitle">course content</p>
            </div>
            <div id="accordian">

                {/*  activeKey={revealAll}   -- can be added below to open all but breaks collapse feature*/}
                <Collapse defaultActiveKey={[1]} expandIcon={({ isActive }) => isActive ? <img src={Arrow} alt="Directional arrow"/> : <img src={Arrow} alt="Directional arrow" style={{transform: "rotate(-90deg)"}}/>}>

                    <Panel header="introduction" key="1">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 2" key="2">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 3" key="3">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 4" key="4" >
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 5" key="5">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 6" key="6">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 7" key="7" >
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 8" key="8">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="panel 9" key="9">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
            <div id="viewAll">
                <button onClick={handleClick}>View all</button>
            </div>
        </section>
     );
}
 
export default CourseContentSection;