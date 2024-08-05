const clients = [
    {
      "id": 123,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "age": 34,
      "isActive": false,
      "purchases": [
        { "item": "Laptop", "amount": 1200, "date": "2023-01-15" },
        { "item": "Phone", "amount": 800, "date": "2023-05-23" }
      ],
      "address": {
        "street": "123 Maple Street",
        "city": "Springfield",
        "state": "NC",
        "zipCode": "62701"
      }
    },
    {
      "id": 456,
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "age": 28,
      "isActive": false,
      "purchases": [
        { "item": "Tablet", "amount": 600, "date": "2023-03-10" }
      ],
      "address": {
        "street": "456 Oak Avenue",
        "city": "Lincoln",
        "state": "OR",
        "zipCode": "68501"
      }
    },
    {
      "id": 789,
      "name": "Carol White",
      "email": "carol.white@example.com",
      "age": 45,
      "isActive": false,
      "purchases": [
        { "item": "Camera", "amount": 900, "date": "2023-07-21" },
        { "item": "Laptop", "amount": 1300, "date": "2023-02-10" },
        { "item": "Headphones", "amount": 200, "date": "2023-06-15" }
      ],
      "address": {
        "street": "789 Pine Road",
        "city": "Madison",
        "state": "TX",
        "zipCode": "53701"
      }
    },
    {
      "id": 101,
      "name": "David Brown",
      "email": "david.brown@example.com",
      "age": 38,
      "isActive": false,
      "purchases": [
        { "item": "Monitor", "amount": 300, "date": "2023-08-12" }
      ],
      "address": {
        "street": "101 Birch Street",
        "city": "Reno",
        "state": "MI",
        "zipCode": "89501"
      }
    },
    {
      "id": 102,
      "name": "Eve Davis",
      "email": "eve.davis@example.com",
      "age": 30,
      "isActive": false,
      "purchases": [],
      "address": {
        "street": "202 Cedar Lane",
        "city": "Boise",
        "state": "FL",
        "zipCode": "83701"
      }
    },
    {
      "id": 103,
      "name": "Frank Green",
      "email": "frank.green@example.com",
      "age": 50,
      "isActive": false,
      "purchases": [
        { "item": "Keyboard", "amount": 100, "date": "2023-04-22" },
        { "item": "Mouse", "amount": 50, "date": "2023-02-18" }
      ],
      "address": {
        "street": "303 Birch Street",
        "city": "Denver",
        "state": "TX",
        "zipCode": "80203"
      }
    },
    {
      "id": 104,
      "name": "Grace Hall",
      "email": "grace.hall@example.com",
      "age": 42,
      "isActive": false,
      "purchases": [
        { "item": "Monitor", "amount": 200, "date": "2023-07-09" }
      ],
      "address": {
        "street": "404 Pine Road",
        "city": "Seattle",
        "state": "OH",
        "zipCode": "98101"
      }
    },
    {
      "id": 105,
      "name": "Hank King",
      "email": "hank.king@example.com",
      "age": 36,
      "isActive": false,
      "purchases": [
        { "item": "Desk Chair", "amount": 150, "date": "2023-05-06" }
      ],
      "address": {
        "street": "505 Oak Avenue",
        "city": "Boston",
        "state": "FL",
        "zipCode": "02108"
      }
    },
    {
      "id": 106,
      "name": "Ivy Lewis",
      "email": "ivy.lewis@example.com",
      "age": 29,
      "isActive": false,
      "purchases": [
        { "item": "Desk Lamp", "amount": 80, "date": "2023-06-14" }
      ],
      "address": {
        "street": "606 Maple Street",
        "city": "Phoenix",
        "state": "AZ",
        "zipCode": "85001"
      }
    },
    {
      "id": 107,
      "name": "Jack Miller",
      "email": "jack.miller@example.com",
      "age": 40,
      "isActive": false,
      "purchases": [
        { "item": "Smartphone", "amount": 900, "date": "2023-02-01" }
      ],
      "address": {
        "street": "707 Cedar Lane",
        "city": "Las Vegas",
        "state": "NV",
        "zipCode": "89101"
      }
    },
    {
      "id": 108,
      "name": "Kate Nelson",
      "email": "kate.nelson@example.com",
      "age": 55,
      "isActive": false,
      "purchases": [
        { "item": "Tablet", "amount": 500, "date": "2023-03-20" },
        { "item": "Laptop", "amount": 1100, "date": "2023-08-03" }
      ],
      "address": {
        "street": "808 Birch Street",
        "city": "San Francisco",
        "state": "CA",
        "zipCode": "94101"
      }
    },
    {
      "id": 109,
      "name": "Leo Owens",
      "email": "leo.owens@example.com",
      "age": 23,
      "isActive": false,
      "purchases": [
        { "item": "Camera", "amount": 1200, "date": "2023-04-11" }
      ],
      "address": {
        "street": "909 Oak Avenue",
        "city": "Los Angeles",
        "state": "OH",
        "zipCode": "90001"
      }
    },
    {
      "id": 110,
      "name": "Mia Parker",
      "email": "mia.parker@example.com",
      "age": 31,
      "isActive": true,
      "purchases": [
        { "item": "Smartwatch", "amount": 300, "date": "2023-03-30" }
      ],
      "address": {
        "street": "1010 Maple Street",
        "city": "Houston",
        "state": "TX",
        "zipCode": "77001"
      }
    },
    {
      "id": 111,
      "name": "Noah Quinn",
      "email": "noah.quinn@example.com",
      "age": 48,
      "isActive": false,
      "purchases": [
        { "item": "Bluetooth Speaker", "amount": 150, "date": "2023-06-08" }
      ],
      "address": {
        "street": "1111 Cedar Lane",
        "city": "Miami",
        "state": "MI",
        "zipCode": "33101"
      }
    },
    {
      "id": 112,
      "name": "Olivia Ross",
      "email": "olivia.ross@example.com",
      "age": 27,
      "isActive": false,
      "purchases": [
        { "item": "E-reader", "amount": 100, "date": "2023-05-17" }
      ],
      "address": {
        "street": "1212 Birch Street",
        "city": "New York",
        "state": "MI",
        "zipCode": "10001"
      }
    },
    {
      "id": 113,
      "name": "Paul Scott",
      "email": "paul.scott@example.com",
      "age": 35,
      "isActive": false,
      "purchases": [
        { "item": "Gaming Console", "amount": 400, "date": "2023-02-28" }
      ],
      "address": {
        "street": "1313 Pine Road",
        "city": "Chicago",
        "state": "OH",
        "zipCode": "60601"
      }
    },
    {
      "id": 114,
      "name": "Quinn Taylor",
      "email": "quinn.taylor@example.com",
      "age": 60,
      "isActive": false,
      "purchases": [
        { "item": "Digital Camera", "amount": 500, "date": "2023-01-22" }
      ],
      "address": {
        "street": "1414 Oak Avenue",
        "city": "Philadelphia",
        "state": "TX",
        "zipCode": "19101"
      }
    },
    {
      "id": 115,
      "name": "Ryan Underwood",
      "email": "ryan.underwood@example.com",
      "age": 22,
      "isActive": false,
      "purchases": [
        { "item": "Laptop", "amount": 1000, "date": "2023-07-01" },
        { "item": "Headphones", "amount": 200, "date": "2023-07-20" }
      ],
      "address": {
        "street": "1515 Maple Street",
        "city": "Austin",
        "state": "TX",
        "zipCode": "78701"
      }
    },
    {
      "id": 116,
      "name": "Sara Van",
      "email": "sara.van@example.com",
      "age": 33,
      "isActive": false,
      "purchases": [
        { "item": "Phone", "amount": 800, "date": "2023-08-15" }
      ],
      "address": {
        "street": "1616 Birch Street",
        "city": "Columbus",
        "state": "OH",
        "zipCode": "43201"
      }
    },
    {
      "id": 117,
      "name": "Tom Walker",
      "email": "tom.walker@example.com",
      "age": 39,
      "isActive": true,
      "purchases": [
        { "item": "Tablet", "amount": 600, "date": "2023-03-15" }
      ],
      "address": {
        "street": "1717 Cedar Lane",
        "city": "Charlotte",
        "state": "NC",
        "zipCode": "28201"
      }
    },
    {
      "id": 118,
      "name": "Uma Xavier",
      "email": "uma.xavier@example.com",
      "age": 26,
      "isActive": false,
      "purchases": [
        { "item": "Smartphone", "amount": 900, "date": "2023-02-12" }
      ],
      "address": {
        "street": "1818 Oak Avenue",
        "city": "Detroit",
        "state": "MI",
        "zipCode": "48201"
      }
    },
    {
      "id": 119,
      "name": "Vince Young",
      "email": "vince.young@example.com",
      "age": 43,
      "isActive": true,
      "purchases": [
        { "item": "Laptop", "amount": 1300, "date": "2023-01-30" },
        { "item": "Desk Chair", "amount": 150, "date": "2023-07-11" }
      ],
      "address": {
        "street": "1919 Birch Street",
        "city": "Portland",
        "state": "OR",
        "zipCode": "97201"
      }
    }
  ]
  

export { clients }