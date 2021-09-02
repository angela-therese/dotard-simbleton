export const business = (businessObject) => {
    return `
    <div class="business">
    <h3>${businessObject.companyName}</h3>
    <p>${businessObject.addressFullStreet}</p>
    <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
    </div>
    `
}