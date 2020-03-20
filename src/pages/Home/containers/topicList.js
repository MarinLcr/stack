import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Waiting } from '../../../assets/img/rocket_blue.svg';
import { ReactComponent as InProgress } from '../../../assets/img/rocket_orange.svg';
import { ReactComponent as Solved } from '../../../assets/img/rocket_green.svg';


const topicList = ({ topics }) => {
console.log("mes topics : ", topics)
    var officersIds = topics.map(function (topic) {
    return topic.author
  });
  console.log("test : ", officersIds)
  return (
      <React.Fragment>
      {
        topics.map(topic => {
                console.log(topic)
                        return (
                            <Link 
                                to={`/topic/${topic.topicId}`} 
                                key={topic.topicId}
                            >
                                <div className="row bg-white p-3 m-4">
                                    <div className="col-4 justify-content-center row d-flex flex-direction-column align-items-center">
                                        <div className="col-3 p-0">
                                            <Waiting />
                                        </div>
                                        <div className="col-9">
                                            <div className="bg-primary rounded text-center">
                                                <p className="small">{topic.id}</p>
                                            </div>
                                            <p className="small">{topic.state[1]}</p>
                                        </div>
                                    </div>
                                    <div className="col-6 justify-content-center">
                                        <strong className="text-primary">{topic.title}</strong>
                                        <p>{topic.description}</p>
                                    </div>
                                    <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                                        <em>{topic.vote} votes</em>
                                        <em>{topic.answers} réponses</em>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
      }
      </React.Fragment>
  );
}

export default topicList;