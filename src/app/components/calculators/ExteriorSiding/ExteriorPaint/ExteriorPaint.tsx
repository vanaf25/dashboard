"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";
const Corners = () => {
    const inputFields = [
        { label: "Trim Length", name: "trimLength", id: "outlined-basic3" },
        { label: "Trim Width", name: "trimWidth", id: "outlined-basic2" },
    ];
    return (
        <div>
            <FormCreator inputFields={inputFields} url={'exteriorSiding/exteriorPaint'}/>
        </div>
    );
};

export default Corners;
