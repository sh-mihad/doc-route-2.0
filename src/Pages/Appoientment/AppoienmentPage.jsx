import { useState } from "react";
import ApoHeader from "../../compontents/AppoienmentPageCompo/ApoHeader";
import ApoSlots from "../../compontents/AppoienmentPageCompo/ApoSlots";

const AppoienmentPage = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div  className="w-full lg:w-11/12 lg:mx-auto mx-5 my-5 ">
           <ApoHeader
           selected={selected}
           setSelected={setSelected}
           />
           <ApoSlots 
           selected={selected}
           />
        </div>
    );
};

export default AppoienmentPage;