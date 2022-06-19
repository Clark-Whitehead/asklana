export const ConversationBox = (props) => {

    const { conversationBox } = props;

    return (
        <div
            id="conversationBox"
            style={{height: 300, fontSize: 20}} 
            className="
                container 
                border 
                border-dark
                rounded
                bg-light
                mb-3">
            
            <textarea  
                id="conversation"
                readOnly
                className="
                col
                h-75
                text-left
                mt-3"
                value={conversationBox}
                
            />
                
            

        </div>
    )

}