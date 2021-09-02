import { useBusinesses } from "./BusinessProvider.js";
import { business } from "./Business.js";

const contentTarget = document.querySelector(".business-container")


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
}
     );

     nyBusinesses.forEach(
         (businessObject) => {
             contentTarget.innerHTML += business(businessObject)
         }
     )
};