let subs = '1M';
let apistatus = 'pending';
// = pending -> initial state (default)
apistatus = 'error';
const orders = ['12', '20', '28', '32'];
let currentorder; // avoid 'any'
for (let order of orders) {
    if (order === '28') {
        currentorder = order;
        break;
    }
}
// currentorder = 2;
console.log(currentorder);
export {};
//# sourceMappingURL=unionandany.js.map