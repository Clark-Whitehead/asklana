import { LandingCard } from "./LandingCard"

export const LandingCards = () => {

    const description1 = "Stuff is going good Stuff is going good Stuff is going good Stuff is going good"
    const description2 = "Stuff is going good"
    const description3 = "Stuff is going good"

    return (
        <div className="row mt-4 mb-5">
            <LandingCard title="hey" image="https://www.coderus.com/wp-content/uploads/2020/11/different-types-of-software-coderus-branded-image.jpg" description={description1} />
            <LandingCard title="There" image="https://www.coderus.com/wp-content/uploads/2020/11/different-types-of-software-coderus-branded-image.jpg" description={description2} />
            <LandingCard title="dude" image="https://www.coderus.com/wp-content/uploads/2020/11/different-types-of-software-coderus-branded-image.jpg" description={description3} />
        </div>
    )
}