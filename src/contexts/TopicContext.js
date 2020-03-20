import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Context = React.createContext();

const Provider = ({ children }) => {
	const [topics, setTopics] = useState([]);
	const [current, setCurrent] = useState([]);
	const [currentId, setCurrentId] = useState(0);
	
	const urlAPI = "http://localhost:3001/topic.json";


	const _fetchCurrentTopic = (id) => {
		try {
			axios.get(urlAPI)
            .then((res)=>{
				const topics = res.data;
				const slice = topics[id]
				setCurrent(slice)
            }).catch((err)=>{
                console.log(err);
			})
		} catch (error) {
			throw error;
        }
	}

	const getItem = (id) => {
		const topic = topics.find(item => item.topicId === id);
        return topic;
    }

    const handleDetail = (id) => {
		const topic = getItem(id);
        setCurrent(topic);
    }

	const _fetchAllTopics = () => {
		try {
			axios.get(urlAPI)
            .then((res)=>{
                const topics = res.data;
				setTopics(topics);
            }).catch((err)=>{
                console.log(err);
			})
		} catch (error) {
			throw error;
        }
	};

	useEffect(() => {
		_fetchAllTopics();
		_fetchCurrentTopic(currentId);
	},[]);


	return (
		<Context.Provider
			value={{
                topics, setTopics,
				current, setCurrent,
				currentId, setCurrentId,
				handleDetail
            }}
		>
        {children}
		</Context.Provider>
	)
}


export { Provider };
export default Context;