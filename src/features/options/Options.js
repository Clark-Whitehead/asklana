import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectChat, selectIdx, setChat, decrement } from '../chat/chatSlice';
import { selectConvo } from './optionsSlice.js';
import store from '../../app/store'

export const Options = () => {

    const dispatch = useDispatch()

    //The id to keep track of where we are in the store.conversations array. Changed by buttons
    const [idx, setIdx] = useState(0);

    const storeChatId = useSelector(selectIdx)

    //
    const convo = useSelector(selectConvo);

    //used in below effects to prevent first render processing.
    const isFirstRun = useRef(true);
    const isFirstRun2 = useRef(true);

    //set store.chat based on this components id. store.conversation[idx]
    useEffect(() => {
        //if first run, don't do anything.
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        dispatch(setChat(convo[idx]));

    }, [idx])

    // useEffect(() => {
    //     console.log(`storeChatId = ${storeChatId}`)
    //     setIdx(storeChatId)
    // }, [storeChatId])

    //set id for this component, when TextBox.js adds a new message. //sets the new message to head of list.
    useEffect(() => {
        //if first run, don't do anything.
        if (isFirstRun2.current) {
            isFirstRun2.current = false;
            return;
        }

        //First check if just restarted. Then increment local id.
        if (storeChatId !== 1) {
            setIdx(prev => prev + 1)
        } else {
            setIdx(1)
        }
        

    }, [convo])

    const handleBack = () => {
        if (idx > 0 && storeChatId > 0) {
            //decrement local id
            setIdx(prev => prev - 1)

            //decrement store.chat.id
            dispatch(decrement())
        }
    }

    const handleSave = () => {
        console.log(convo)
    }



    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-4">
                    <button onClick={handleBack} className="btn w-100 h-100 btn-danger">
                            <div className="col">
                                <i 
                                className="bi bi-arrow-counterclockwise"
                                style={{fontSize: "2em"}}
                                >
                                </i>
                            </div>
                    </button>
                </div>

                <div className="col-4">
                    <button className="btn w-100 h-100 btn-success">
                            <div className="col">
                            <i 
                                className="bi bi-arrow-clockwise"
                                style={{fontSize: "2em"}}
                            >
                            </i>
                            </div>
                    </button>
                </div>

                <div className="col-2">
                    <button onClick={handleSave} className="btn bg-light w-100 h-100 border-dark">
                        SAVE
                    </button>
                </div>

                <div className="col-2">
                    <button className="btn bg-light h-100 w-100 border-dark">
                        SHARE <br />
                        <i className="bi bi-facebook mr-1"></i>
                        <i className="bi bi-instagram mr-1"></i>
                        <i className="bi bi-tiktok mr-1"></i>
                    </button>
                </div>
            </div>

        </div>
    )

}