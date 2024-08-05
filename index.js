import { clients } from "./faker-data.js";
import {
    calculateAverageAge,
    calculateTotalAmountSpent,
    countClientsByState,
    clientWithMostPurchases,
    getActiveClients,
    calculateTotalIncome,
    createDataSnapshot
} from './client-stats.js'



const averageAge = calculateAverageAge(clients);
console.log(averageAge);

// Expected Outcome: 
// 37


const spendingByClient = calculateTotalAmountSpent(clients);
console.log(spendingByClient);

// Expected Outcome: 
// [
//   { name: 'Alice Johnson', totalAmount: 2000 },
//   { name: 'Bob Smith', totalAmount: 600 },
//   { name: 'Carol White', totalAmount: 2400 },
//   { name: 'David Brown', totalAmount: 300 },
//   { name: 'Eve Davis', totalAmount: 0 },
//   { name: 'Frank Green', totalAmount: 150 },
//   { name: 'Grace Hall', totalAmount: 200 },
//   { name: 'Hank King', totalAmount: 150 },
//   { name: 'Ivy Lewis', totalAmount: 80 },
//   { name: 'Jack Miller', totalAmount: 900 },
//   { name: 'Kate Nelson', totalAmount: 1600 },
//   { name: 'Leo Owens', totalAmount: 1200 },
//   { name: 'Mia Parker', totalAmount: 300 },
//   { name: 'Noah Quinn', totalAmount: 150 },
//   { name: 'Olivia Ross', totalAmount: 100 },
//   { name: 'Paul Scott', totalAmount: 400 },
//   { name: 'Quinn Taylor', totalAmount: 500 },
//   { name: 'Ryan Underwood', totalAmount: 1200 },
//   { name: 'Sara Van', totalAmount: 800 },
//   { name: 'Tom Walker', totalAmount: 600 },
//   { name: 'Uma Xavier', totalAmount: 900 },
//   { name: 'Vince Young', totalAmount: 1450 }
// ]


const clientStates = countClientsByState(clients);
console.log(clientStates);

// Expected Outcome: 
// { NC: 2, OR: 2, TX: 5, MI: 4, FL: 2, OH: 4, AZ: 1, NV: 1, CA: 1 }


const topClient = clientWithMostPurchases(clients);
console.log(topClient);

// Expected Outcome: 
// { 
//   id: 789,
//   name: 'Carol White',
//   email: 'carol.white@example.com',
//   age: 45,
//   isActive: false,
//   purchases: [
//     { item: 'Camera', amount: 900, date: '2023-07-21' },
//     { item: 'Laptop', amount: 1300, date: '2023-02-10' },
//     { item: 'Headphones', amount: 200, date: '2023-06-15' }
//   ],
//   address: {
//     street: '789 Pine Road',
//     city: 'Madison',
//     state: 'TX',
//     zipCode: '53701'
//   }
//  }


const activeClients = getActiveClients(clients);
console.log(activeClients);

// Expected Outcome: 
// [
//   { id: 110, name: 'Mia Parker', email: 'mia.parker@example.com', age: 31, isActive: true, purchases: [...], address: {...} },
//   { id: 117, name: 'Tom Walker', email: 'tom.walker@example.com', age: 39, isActive: true, purchases: [...], address: {...} },
//   { id: 119, name: 'Vince Young', email: 'vince.young@example.com', age: 43, isActive: true, purchases: [...], address: {...} }
// ]


const totalIncome = calculateTotalIncome(clients);
console.log(totalIncome);

// Expected Outcome: 
// 15980


const dataSnapShot = createDataSnapshot(clients);
console.log(dataSnapShot);

// Expected Outcome: 
// {
//   totalClients: 22,
//   totalSpending: 15980,
//   avgSpending: 726.3636363636364,
//   stateCount: { NC: 2, OR: 2, TX: 5, MI: 4, FL: 2, OH: 4, AZ: 1, NV: 1, CA: 1 },
//   totalIncome: 15980,
//   averageAge: 37,
//   bestState: 'TX'
// }
