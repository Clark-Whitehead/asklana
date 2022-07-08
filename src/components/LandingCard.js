export const LandingCard = (props) => {
    return (
        <div className="col-4">
            <div style={{borderRadius: '10px'}} className="border border-dark pb-4 px-2 h-100">
                <img width="100%" style={{borderRadius: '20px'}} className="p-2" src={props.image} />
                <p style={{fontSize: '2vw', fontWeight: 'bold'}}>{props.title}</p>
                <p style={{fontSize: '1.2vw'}}>{props.description}</p>
                <a href="#">
                    <span style={{fontWeight: 'bold', color: '#047090'}}>
                        Learn more <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
                    
            </div>
        </div>
    )
}