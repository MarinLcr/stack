import React from "react";
import {Link} from 'react-router-dom';
import { ReactComponent as Waiting } from '../../../assets/img/rocket_blue.svg';
import Provider from "../../../contexts/TopicContext"
import { ReactComponent as InProgress } from '../../../assets/img/rocket_orange.svg';
import { ReactComponent as Solved } from '../../../assets/img/rocket_green.svg';

const Topic = ({ topic }) => {
        const {id,title, topicId, description, author, state, vote, answers} = topic
        return (
            <Provider>
            {(value) => {
                return (
                    <Link 
                                to={`/topic/${topicId}`} 
                                key={topicId}
                                onClick={() => value.handleDetail(topicId)}
                            >
                                <div className="row bg-white p-3 m-4">
                                    <div className="col-4 justify-content-center row d-flex flex-direction-column align-items-center">
                                        <div className="col-3 p-0">
                                            <Waiting />
                                        </div>
                                        <div className="col-9">
                                            <div className="bg-primary rounded text-center">
                                                <p className="small">{id}</p>
                                            </div>
                                            <p className="small">{state[1]}</p>
                                        </div>
                                    </div>
                                    <div className="col-6 justify-content-center">
                                        <strong className="text-primary">{title}</strong>
                                        <p>{description}</p>
                                    </div>
                                    <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                                        <em>{vote} votes</em>
                                        <em>{answers} réponses</em>
                                    </div>
                                </div>
                            </Link> 
                )
                            }}
                        </Provider>

        );
}


export default Topic;