
// type guarding
function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making chai ${kind} ...`
    }
    return `chai order : ${kind} `
}
function serveChai(msg: string) {
    if (msg) {
        return `Serving chai ${msg}`
    }
    return `Serving default masala chai `
}


function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai`
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`
    }
    return `chair order ${size}`
}

class KulhadChai {
    serve() { return `Serving kulhad chai` }
}

class CuttingChai {
    serve() { return `Serving Cutting chai` }
}


function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        // check it was created from kulhadchai or not then serve
        return chai.serve()
    }
    // if not kulhad it is cuttingchai
    return chai.serve();
}


type chaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function servingChai(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving ${item}`
}
 

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makingChai(order: Chai) {
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
            const _exhaustiveCheck: never = order;
            return _exhaustiveCheck;
    }
}

makingChai({ type: "masala", spicelevel: 2 });

