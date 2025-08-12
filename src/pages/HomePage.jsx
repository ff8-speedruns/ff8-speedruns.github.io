import HomeHeader from "../features/home/components/homeHeader";
import HomeToolsList from "../features/home/components/homeToolsList";
import HomeCredits from "../features/home/components/homeCredits";

export default function Root() {
    return (
        <>
            <HomeHeader />
            <HomeToolsList />
            <HomeCredits />
        </>
    );
}