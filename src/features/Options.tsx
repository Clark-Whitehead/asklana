export const Options = () => {

    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-4">
                    <button className="btn w-100 h-100 btn-danger">
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
                    <button className="btn bg-light w-100 h-100 border-dark">
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