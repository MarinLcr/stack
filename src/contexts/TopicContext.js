import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

const Provider = ({ children }) => {
	const [topics, setTopics] = useState([]);
	const [details, setDetails] = useState([]);

	const _fetchAllTopics = () => {
		try {
			axios.get('./topic.json')
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
	},[]);


	


	return (
		<Context.Provider
			value={{
                topics, setTopics,
				details, setDetails
            }}
		>
        {children}
		</Context.Provider>
	)
}


export { Provider };
export default Context;