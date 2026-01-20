
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
    return `chai order ${size}`
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

// to check chai type
console.log(`this is ${serve(new KulhadChai())}`)


// Type Narrowing
type chaiOrder = {
    type: string,
    sugar: number
}
// isChaiOrder here is the type gaurd
function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
    // or , this is more cleaner and production grade
    // return (
    //     typeof obj?.type === "string" && 
    //     typeof obj?.sugar === "number"
    // );
}

function servingChai(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving ${item}`
}

// execution
console.log(`Order - ${servingChai({ type: 'masala', sugar: 2 })}`)


// we defined the separate chai types them called those in a single type names as Chai (union)
type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };
// type lemonChai = { type: "lemon"; flavour: number };

type Chai = MasalaChai | GingerChai | ElaichiChai

function makingChai(order: Chai) {
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
            const _exhaustiveCheck: never = order;
            return _exhaustiveCheck;
        //  so if i add a new chai type and forgot to add that in switch case, then red line will appear below '_exhaustiveCheck'
    }
}

makingChai({ type: "masala", spicelevel: 2 });

