export const ConversationBox = () => {

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
                mt-3">
                
                Lana: Hi there! What do you need help with?
                
            </textarea>

        </div>
    )

}