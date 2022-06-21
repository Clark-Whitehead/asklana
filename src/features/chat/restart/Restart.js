import { restart } from '../chatSlice';
import { useDispatch } from 'react-redux'

export const Restart = () => {

    const dispatch = useDispatch();

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