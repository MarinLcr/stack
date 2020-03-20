import React from "react";
import Provider from "../../../contexts/TopicContext"
import Topic from '../components/topic';



const TopicList = () => {
    return (
        <Provider>
            {(value) => {
                return value.topics.map(topic => {
                    return (
                        <Topic key={topic.id} topic={topic} />
                    )
                })
            }}
        </Provider>
    )


}

export default TopicList;