export const Options = () => {

    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-4">
                    <button className="btn w-100 h-100 btn-danger">
                            <div className="col">
                                <img className="w-25" src="arrow-left.svg" />
                            </div>
                    </button>
                </div>

                <div className="col-4">
                    <button className="btn w-100 h-100 btn-success">
                            <div className="col">
                                <img className="w-25" src="arrow-right.svg" />
                            </div>
                    </button>
                </div>

                <div className="col-2">
                    <button className="btn bg-light w-100 h-100 border-dark">
                        SAVE
                    </button>
                </div>

                <div className="col-2">
                    <button className="btn bg-light h-100 w-100 border-dark">
                        SHARE
                        <img className="w-100" src="social.png" />
                    </button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12">
                    <button className="btn bg-light w-100 border-dark ">
                        RESTART
                    </button>
                </div>
            </div>

        </div>
    )

}