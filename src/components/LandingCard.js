export const LandingCard = (props) => {
    return (
        <div className="col-4">
            <div style={{borderRadius: '10px'}} className="border border-dark pb-4 px-2 h-100">
                <img width="100%" src={props.image} className="p-2" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href="#">
                    <span style={{fontWeight: 'bold', color: '#047090'}}>
                        Learn more <i class="bi bi-arrow-right"></i>
                    </span>
                </a>
                    
            </div>
        </div>
    )
}