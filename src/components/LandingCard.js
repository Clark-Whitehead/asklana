export const LandingCard = (props) => {
    return (
        <div style={{height: '100px'}} className="col-4">
            <div style={{borderRadius: '10px', height: '300px'}} className="border border-dark">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}