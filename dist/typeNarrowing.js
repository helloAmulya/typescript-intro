// type guarding
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making chai ${kind} ...`;
    }
    return `chai order : ${kind} `;
}
function serveChai(msg) {
    if (msg) {
        return `Serving chai ${msg}`;
    }
    return `Serving default masala chai `;
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai order ${size}`;
}
class KulhadChai {
    serve() { return `Serving kulhad chai`; }
}
class CuttingChai {
    serve() { return `Serving Cutting chai`; }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        // check it was created from kulhadchai or not then serve
        return chai.serve();
    }
    // if not kulhad it is cuttingchai
    return chai.serve();
}
// to check chai type
console.log(`this is ${serve(new KulhadChai())}`);
// isChaiOrder here is the type gaurd
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
    // or , this is more cleaner and production grade
    // return (
    //     typeof obj?.type === "string" && 
    //     typeof obj?.sugar === "number"
    // );
}
function servingChai(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving ${item}`;
}
// execution
console.log(`Order - ${servingChai({ type: 'masala', sugar: 2 })}`);
function makingChai(order) {
    switch (order.type) {
        case "masala":
            console.log(`brewing masala with ${order.spicelevel}`);
            break;
        case "ginger":
            console.log(`brewing ginger with ${order.amount}`);
            break;
        case "elaichi":
            console.log(`brewing elaichi with ${order.aroma}`);
            break;
        default:
            const _exhaustiveCheck = order;
            return _exhaustiveCheck;
        //  so if i add a new chai type and forgot to add that in switch case, then red line will appear below '_exhaustiveCheck'
    }
}
makingChai({ type: "masala", spicelevel: 2 });
export {};
//# sourceMappingURL=typeNarrowing.js.map