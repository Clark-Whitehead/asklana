export const Options = () => {

    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-4">
                    <button className="btn w-100 btn-danger">
                            <div className="col">
                                <img className="w-25" src="arrow-left.svg" />
                            </div>
                    </button>
                </div>

                <div className="col-4">
                    <button className="btn w-100 btn-success">
                            <div className="col">
                                <img className="w-25" src="arrow-right.svg" />
                            </div>
                    </button>
                </div>

                <div className="col-2">
                    <button className="btn w-100 h-100 btn-success">
                        Save
                    </button>
                </div>

                <div className="col-2">
                    <button className="btn h-100 w-100 btn-success">
                        Share
                    </button>
                </div>

                <div className="col-4">
                </div>
                <div className="col-4">
                </div>
            </div>
        </div>
    )

}