import React, { useContext, useEffect } from 'react';
import axios from 'axios'

import Provider from "../../contexts/TopicContext"
import TopicContext from "../../contexts/TopicContext";
import TopicList from './containers/topicList';
import Navbar from '../../components/navbar';


const Home = () => {
    const {
        topics,
        setTopics
	} = useContext(TopicContext);
    
    
        return (
            <Provider>
            {(value)=>{
                const arr =  
                value
                console.log("Arr : ", arr)
                    return (
                        <div className="bg-light">
                            <Navbar />
                            <div className="container">
                                <TopicList topics={topics} />
                            </div>
                        </div>
                    )
            }
            }
            </Provider>
        );
}

export default Home;