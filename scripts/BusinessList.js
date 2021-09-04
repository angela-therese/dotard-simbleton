import { useBusinesses } from "./BusinessProvider.js";
import { business, agents } from "./Business.js";

const contentTarget = document.querySelector(".business-list")
const contentTargetTwo = document.querySelector(".manufacturing-list")
const contentTargetThree = document.querySelector(".agents")


// export const BusinessList = () => {
//     const businessArray = useBusinesses()

//     businessArray.forEach(
//         (businessObject) => {
//             contentTarget.innerHTML += business(businessObject)
//         }
//     );
// }

export const nyBusinessList = () => {
    const businessArray = useBusinesses()

     const nyBusinesses= businessArray.filter(businessObject => {
         if(businessObject.addressStateCode == "NY"){
             return true
         }
     return false
        });

     nyBusinesses.forEach(
         (businessObject) => {
             contentTarget.innerHTML += business(businessObject)
         }
     )
};

export const manufacturingList = ()=> {
    const businessArray = useBusinesses();

    const manufacturingBusinesses = businessArray.filter(businessObject => {
        if(businessObject.companyIndustry == "Manufacturing") {
            return true
        }
        return false
        
    });

    manufacturingBusinesses.forEach(
       (businessObject) => {
           contentTargetTwo.innerHTML += business(businessObject)
       }
    )
};

export const agentList = () => {
    const businessArray = useBusinesses();

    const agentArray = businessArray.map(businessObject => {
        return {
            "name" : businessObject.purchasingAgent,
            "phone" : businessObject.phoneWork,
            "company" : businessObject.companyName
    }});

    console.log(agentArray)

    agentArray.forEach(
        (agentObject) => {
            contentTargetThree.innerHTML += agents(agentObject)
        }
    )
        

}