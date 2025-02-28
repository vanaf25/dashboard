import React from 'react';
import GlobalFormCreator from "@/app/components/GlobalFormCreator/GlobalFormCreator";

const Page = () => {
    return (
        <div>
           <GlobalFormCreator inputFields={
               [{label:"Provide Wall Length",name:"WallLength"},
                   {label:"Provide Wall Height",name:"WallHeight"}]
           } url={"ExteriorSiding"} />
        </div>
    );
};

export default Page;