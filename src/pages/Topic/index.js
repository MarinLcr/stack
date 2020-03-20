import React, {useContext, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import TopicContext from "../../contexts/TopicContext";
import { ReactComponent as Waiting } from '../../assets/img/rocket_blue.svg';
import Navbar from '../../components/navbar'


const Topic = () => {
    const {
        topics = false,
        setTopics,
        details,
        setDetails
    } = useContext(TopicContext);

    const { topicId } = useParams();

    const _fetchTopic = () => {
			const res = topics[2+1];
			setDetails(res);
	};

	useEffect(() => {
		_fetchTopic();
	}, []);

    if (!details || details === []) {
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
                        <h5>{details.title}</h5>
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
                <p>{details.id}</p>
            </div>
        </div>
    );
};

export default Topic; 