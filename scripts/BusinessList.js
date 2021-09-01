import { useBusinesses } from "./BusinessProvider.js";
import { business } from "./Business.js";

const contentTarget = document.querySelector(".business-container")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += business(businessObject)
        }
    );
}