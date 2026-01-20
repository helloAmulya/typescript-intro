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
    return `chair order ${size}`;
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
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function servingChai(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving ${item}`;
}
function makingChai(order) {
    switch (order.type) {
        case "masala":
            console.log("brewing masala...");
            break;
        case "ginger":
            console.log("brewing ginger...");
            break;
        case "elaichi":
            console.log("brewing elaichi...");
            break;
        default:
            const _exhaustiveCheck = order;
            return _exhaustiveCheck;
    }
}
makingChai({ type: "masala", spicelevel: 2 });
export {};
//# sourceMappingURL=typeNarrowing.js.map