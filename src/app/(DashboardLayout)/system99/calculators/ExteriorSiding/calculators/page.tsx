import { Metadata } from "next";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
import CalculatorsLayout from "@/app/components/CalculatorsLayout/CalculatorsLayout";
interface PageProps {
    searchParams: Record<string, string | string[]>; // Explicitly typing searchParams
}

const fetchData = async (queryParams: Record<string, string | string[]>) => {
    const queryString = new URLSearchParams(queryParams as Record<string, string>).toString(); // Convert object to URL query string
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}exteriorSiding?${queryString}`;
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
    return (
        <>
            <DefaultCalculationValues additionalValues={data.basicValues} />
         <DefaultCalculators calculators={data.calculators}/>
          <CalculatorsLayout/>
        </>
    );
};

export default Page;
