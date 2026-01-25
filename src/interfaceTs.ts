
type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

type tearecipe = {
    water: number;
    milk: number
}

interface newtearecipe {
    water: number;
    milk: number
}

// function makechai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order)
// }
// function serve(order: chaiOrder) {
//     console.log(order)
// }

class Masalachai implements tearecipe {
    water = 100;
    milk = 10;
}
// type cupsize = "small" | "large" // this will not work
// we need 

interface cupsize {
    size: "small" | "large"
}

class Chai implements cupsize {
    size: "small" | "large" = "large"
}


//  types of type

type teas = "masala" | "elaichi" | "ginger" // literal type or union type

type basechai = { tealeaves: number }
type extra = { masala: number }

type MoreChai = basechai & extra // intersection type

type user = {
    username: string;
    bio?: string // optional
}

const u1: user = { username: "amulya" }
const u2: user = { username: "ratna", bio: "programmer" }

// readonly keyword 
type config = {
    readonly appName: string
    version: number
}

const conf: config = {
    appName: "daddyapp",
    version: 1
}

// conf.appName = "daddyapp" // now we cannot change the value again. very useful