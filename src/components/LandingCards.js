import { LandingCard } from "./LandingCard"

export const LandingCards = () => {

    const description1 = "A conversational experience. Like chatting with a human professor."
    const description2 = "When you're exhausted, just save and come back the next day."
    const description3 = "Option to share your conversation with our community to get help from others."

    return (
        <div className="row mt-4 mb-5">
            <LandingCard title="Ask follow up questions" image="conversational.png" description={description1} />
            <LandingCard title="Save your conversations" image="continue.png" description={description2} />
            <LandingCard title="Get more help" image="share.png" description={description3} />
        </div>
    )
}