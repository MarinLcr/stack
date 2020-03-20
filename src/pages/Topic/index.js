import React, {useContext, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import TopicContext from "../../contexts/TopicContext";
import { ReactComponent as Waiting } from '../../assets/img/rocket_blue.svg';
import Navbar from '../../components/navbar'


const Topic = () => {
    const { topics, current, setCurrent, currentId, setCurrentId } = useContext(TopicContext);

    const { topicId } = useParams();


    const _fetchTopic = () => {
			setCurrentId(topicId);
	};

	useEffect(() => {
		_fetchTopic();
	}, []);

    if (!current || current === []) {
        return (
            <div>rien</div>
        )
    }

    return (
        <div className="bg-light">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex">
                        <Waiting />
                        <h5>{current.title}</h5>
                    </div>
                    <div className="col-2">
                        <small>Last vote: 3 days ago</small>
                    </div>
                    <div className="col-2">
                        <small>Last answer: 2 hour ago</small>
                    </div>
                    <div className="col-2"></div>
                </div>
                <p></p>
                <p>{current.id}</p>
            </div>
        </div>
    );
};

export default Topic; 