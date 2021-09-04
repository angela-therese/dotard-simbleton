export const business = (businessObject) => {
    return `
    <div class="business">
    <h3>${businessObject.companyName}</h3>
    <p>${businessObject.addressFullStreet}</p>
    <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
    </div>
    `
}

export const agents = (agentObject) => {
    return `
    <div class = "agents"> 
    <h3>${agentObject.name.nameFirst} ${agentObject.name.nameLast}</h3>
    <h5>${agentObject.company}</h5>
    <h5>${agentObject.phone}</h5>
    </div>
    `
}