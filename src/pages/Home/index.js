import React from 'react';
import TopicList from './containers/topicList';
import Navbar from '../../components/navbar';


const Home = () => {
    return (
        <div className="bg-light">
            <Navbar />
            <div className="container">
                <TopicList />
            </div>
        </div>
    )
}

export default Home;