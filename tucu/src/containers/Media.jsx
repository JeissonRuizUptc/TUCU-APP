import React from "react";
import ButtonComp from '../components/ButtonComp';
import Notice from "../components/notice";
import './styles/Media.scss';

const Media = () => {
    return (
        <div className="media">
            <div className="media-title">
                <h1>Medios</h1>
            </div>

            <div className="media-targets">
               
                <Notice URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"} title={"equisde"} text={"tex bla bla bla bla bla bla bla bla bla bla bla"} />
                <Notice URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"} title={"equisde"} text={"tex bla bla bla bla bla bla bla bla bla bla bla"} />
                <Notice URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"} title={"equisde"} text={"tex bla bla bla bla bla bla bla bla bla bla bla"} />
                <Notice URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"} title={"equisde"} text={"tex bla bla bla bla bla bla bla bla bla bla bla"} />
                <Notice URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"} title={"equisde"} text={"tex bla bla bla bla bla bla bla bla bla bla bla"} />
                <Notice URLImage={"https://pbs.twimg.com/media/DYNg8uwW0AAahV2.jpg"} title={"equisde"} text={"tex bla bla bla bla bla bla bla bla bla bla bla"} />

            </div>

            <div className="media-button">
                <ButtonComp textButton={"Ver más"} />
            </div>
        </div>
    )
}

export default Media;