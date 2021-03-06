import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export const Conversations = () => {

    let category = useParams().category

    const [titles, setTitles] = useState([])

    useEffect(() => {
        Axios.post("http://localhost:4001/getCategorySharedConversations", {category, category})
            .then((res) => {
                // console.log(res.data)
                setTitles(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    

    return (
        <div style={{backgroundColor: '#F18000'}} className="container rounded text-white pb-3 mb-4">
            <div className="row mt-5">
                <div className="col">
                    <br />
                    <h1>Community {category.charAt(0).toUpperCase() + category.slice(1)} Conversations</h1>
                </div>
            </div>
            <div style={{backgroundColor: 'white'}} className="container rounded">
                <div className="row mt-5">
                    <div className="col text-dark pt-4">
                        {titles.map(title => {
                            return (
                                <div key={title.id}>
                                    <a style={{fontSize: '20px', fontWeight: 'bold'}} href={'/conversations/conversation/' + title.titleUrl}>{title.title}</a>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
