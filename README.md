<aside>
The goal of this project is to provide you with extensive practice in debugging JavaScript code. By working through this project, you'll achieve the following:

- **Enhance Debugging Skills**: Improve your ability to identify and fix errors in JavaScript code, including logical errors, syntax errors, and runtime errors.
- **Understand Common Mistakes**: Gain insights into common coding mistakes and learn strategies to avoid them in the future.
- **Strengthen Problem-Solving Abilities**: Develop problem-solving skills by analyzing code and determining the best way to resolve issues.
- **Improve Code Quality**: Learn best practices for writing clean, maintainable, and error-free code.
- **Boost Confidence**: Build confidence in your ability to debug complex JavaScript code and improve the reliability of your applications.
</aside>

# **Project Overview: Script Debug**

In this project, you will debug a set of JavaScript functions designed to process client data. The functions have various intentional bugs that you need to identify and fix. The goal is to ensure that all functions work correctly and produce accurate results.

## **Features**

1. **Calculate Average Age**:
    - Function to calculate the average age of clients.
2. **Get Active Clients**:
    - Function to filter and return active clients.
3. **Calculate Total Amount Spent**:
    - Function to calculate the total amount spent by each client.
4. **Calculate Total Income**:
    - Function to calculate the total income from all clients.
5. **Count Clients by State**:
    - Function to count the number of clients by their state of residence.
6. **Find Client with Most Purchases**:
    - Function to find the client with the most purchases.
7. **Create Data Snapshot**:
    - Function to create a snapshot of various statistics about the clients.

# **Project Requirements**

## **Setup**

1. **Clone the Repository**:
    - Clone the project repository from GitHub:
        
        ```bash
        git clone https://github.com/jordanburger22/script-debug.git
        
        ```
        
    - Navigate into the project directory:
        
        ```bash
        cd script-debug
        
        ```
        
    - Remove the existing `.git` directory:
        
        ```bash
        rm -rf .git
        
        ```
        
2. **Code Structure**:
    - `faker.js`: Contains the array of client data.
    - `client-stats.js`: Contains the functions you need to debug.
    - `index.js`: Script to run the functions and log results.

## **Debugging Tasks**

1. **Calculate Average Age**:
    - Review the `calculateAverageAge` function in `client-stats.js` and ensure it calculates the average age correctly, rounding to the nearest whole number.
    - Handle cases where the client list is empty.
2. **Get Active Clients**:
    - Debug the `getActiveClients` function to correctly filter and return active clients.
    - Ensure the function handles edge cases properly.
3. **Calculate Total Amount Spent**:
    - Fix any issues in the `calculateTotalAmountSpent` function to accurately compute the total amount spent by each client.
    - Validate the results with different client data sets.
4. **Calculate Total Income**:
    - Debug the `calculateTotalIncome` function to ensure it calculates the total income from all clients correctly.
    - Check for errors in the calculation logic.
5. **Count Clients by State**:
    - Ensure the `countClientsByState` function correctly counts clients by their state.
    - Handle cases where clients may not have a state specified.
6. **Find Client with Most Purchases**:
    - Review and fix the `clientWithMostPurchases` function to correctly identify the client with the most purchases.
    - Test the function with various client data sets to ensure accuracy.
7. **Create Data Snapshot**:
    - Debug the `createDataSnapshot` function to ensure it creates an accurate snapshot of client statistics.
    - Verify that all calculated fields are correct and handle edge cases properly.

## **Testing**

1. **Provided Array of Data**:
    - Use the provided array of client data in `faker.js` to test your functions.
    - Run the functions in `index.js` and compare your results with the expected results, which are commented out underneath each function call.

By completing this project, you will gain valuable experience in debugging JavaScript code and enhance your problem-solving skills. Good luck, and happy debugging!
