import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
interface PageProps {
    searchParams: Record<string, string | string[]>; // Explicitly typing searchParams
}

const fetchData = async (queryParams: Record<string, string | string[]>) => {
    const queryString = new URLSearchParams(queryParams as Record<string, string>).toString(); // Convert object to URL query string
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}exteriorSiding?${queryString}`;
    console.log(url);
    const response = await fetch(url, {
        method: "GET",
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
};

const Page = async ({ searchParams }: PageProps) => {
    const data = await fetchData(searchParams);
    console.log('data:', data);

    const calculators = [
        "Plank siding",
        "Sheet siding",
        "Home wrap",
        "Vinyl siding",
        "Corners",
        "Brick Wall Covering",
        "Stucco wall covering",
    ];


    return (
        <>
            <DefaultCalculationValues additionalValues={data.basicValues} />
            <DefaultCalculators calculators={data.calculators}/>
        </>
    );
};

export default Page;
