import React from 'react';
import GlobalFormCreator from "@/app/components/GlobalFormCreator/GlobalFormCreator";
import SquareFootage from "@/app/(DashboardLayout)/formLetters/System99Calculator/Messurments/SquareFootage";

const Page = () => {
    return (
        <div>
            <SquareFootage/>
           {/*<GlobalFormCreator inputFields={
               [{label:"Provide Wall Length",name:"wallLength"},
                   {label:"Provide Wall Height",name:"wallHeight"}]
           } url={"ExteriorSiding"} />*/}
        </div>
    );
};

export default Page;