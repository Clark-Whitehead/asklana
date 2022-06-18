export const TextBox = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 m-auto">
                    <input 
                        style={{height: 50, fontSize: 15}}
                        enterKeyHint="send" 
                        type="text" 
                        autoFocus
                        className="w-100 pl-3"
                    />
                </div>
                <button className="col-4 btn btn-primary">
                    Send
                </button>
            </div>
        </div>
    )

}