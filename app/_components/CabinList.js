import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

const CabinList = async ({ filter }) => {
    const cabins = await getCabins();
    let displayedCabins;
    if (filter === "all") displayedCabins = cabins;
    else if (filter === "small")
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
    else if (filter === "medium")
        displayedCabins = cabins.filter(
            (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 5
        );
    else if (filter === "large")
        displayedCabins = cabins.filter(
            (cabin) => cabin.maxCapacity >= 6 && cabin.maxCapacity <= 9
        );
    else if (filter === "bunglow")
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 10);
    //console.log(filter, displayedCabins);
    return (
        <>
            {cabins.length > 0 && (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
                    {displayedCabins.map((cabin) => (
                        <CabinCard cabin={cabin} key={cabin.id} />
                    ))}
                </div>
            )}
        </>
    );
};
export default CabinList;
