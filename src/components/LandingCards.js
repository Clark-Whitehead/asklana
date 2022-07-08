import { LandingCard } from "./LandingCard"

export const LandingCards = () => {
    return (
        <div style={{height: "300px"}} className="row mt-4 mb-5">
            <LandingCard title="hey" />
            <LandingCard title="There"/>
            <LandingCard title="dude"/>
        </div>
    )
}