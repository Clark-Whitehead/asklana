import { restart } from '../conversationBox/conversationBoxSlice.js';

export const Restart = (props) => {

    const { dispatch } = props;

    const handleRestart = () => {
        
        dispatch(restart());
    }

    return (
        <div className="row mt-3">
            <div className="col-6 m-auto">
                <button onClick={handleRestart} className="btn bg-light w-100">
                    RESTART
                </button>
            </div>
        </div>
    )
}