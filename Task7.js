// Use this API:
// https://fakestoreapi.com/products
// Requirements:
// Fetch all products.
// Convert response using .json().
// Display:
// Product title
// Price
// Category
// Use map() to create a new array containing only:
// title
// price
// Use filter() to find products with price greater than $100.
// Use find() to find the first product in the "electronics" category.
// Use reduce() to calculate the total price.
// Use sort() to arrange products from highest price to lowest.
// Handle API errors using .catch().
// Display a completion message using .finally().
// A.
let apiLink = 'https://fakestoreapi.com/products'
fetch(apiLink).then((data)=>{
    console.log(data);
    return data.json()
})
.then((jsData)=>{    
    jsData.forEach((c,i,t) => {
        console.log("Title:",c.title);
        console.log("Price:",c.price);
        console.log("Category:",c.category);
    });
    let arr=jsData.map((c,i,t)=>({
            title: c.title,
            price: c.price
    }));
    console.log("New Array containg Title and Price is:");
    console.log(arr);
    let progreater100=jsData.filter((c,i,t)=>{
        return c.price > 100;
    });
    console.log("Products Greater than 100 are:");
    console.log(progreater100);
    let electronics=jsData.find((c,i,t)=>{
        return c.category === "electronics";
    });
    console.log("First Electronic Product is:");
    console.log(electronics);
    let total=jsData.reduce((acc,c,i,t)=>{
        return acc + c.price;
    },0);
    console.log("Price of all products is:",total);
    let sorted=jsData.sort((a,b)=>{
        return b.price - a.price
    })
    console.log("Sorted array according to highest price to lowest price is:");
    console.log(sorted);
})
.catch((error)=>{
    console.warn(error.message);
})
.finally(()=>{
    console.log("Api process completed");
})

// Task 2 — Product Category Dashboard
// Use:
// https://fakestoreapi.com/products
// Create a console-based dashboard.
// Expected output:
// ===== PRODUCT DASHBOARD =====

// Total Products: 20

// Electronics: 6
// Jewelery: 4
// Men's Clothing: 6
// Women's Clothing: 4

// Highest Price: $999.99
// Lowest Price: $5.99
// Average Price: $XXX
// Students must use:
// fetch()
// map()
// filter()
// reduce()
// sort()
// Functions
// Template 
let apilink='https://fakestoreapi.com/products'
fetch(apilink).then((data1)=>{
    return data1.json();
})
.then((jsData)=>{
    function Categorycount(category)
    {
        return jsData.filter((c,i,t)=>{
            return c.category === category;
        }).length;
    }
    let price = jsData.map((c,i,t)=>{
        return c.price;
    });
    let sorted=[... price].sort((a,b)=>{
        return a - b;
    });
    let totalprice = price.reduce((acc,c,i,t)=>{
        return acc + c;
    },0);
    let Average = totalprice / jsData.length;
    let highestprice = sorted[sorted.length - 1];
    let leastprice = sorted[0]
    console.log("===== PRODUCT DASHBOARD =====");
    console.log(
        `Total Products: ${jsData.length}
        
Electronics: ${Categorycount("electronics")}
Jewelery: ${Categorycount("jewelery")}
Men's Clothing: ${Categorycount("men's clothing")}
Women's Clothing: ${Categorycount("women's clothing")}

Highest Price: $${highestprice.toFixed(2)}
Lowest Price: $${leastprice.toFixed(2)}
Average Price: $${Average.toFixed(2)}`
);
})
.catch((error)=>{
    console.warn(error.message);
})
.finally(()=>{
    console.log("Api Processed Sucessfully");
})


// Task 3 — User & Post API
// Use these APIs:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// Requirements:
// Fetch users.
// Display all user names.
// Display user name + email.
// Find the user with ID 5.
// Filter users from a particular city.
// Fetch posts.
// Display posts written by user ID 1.
// Count how many posts user ID 1 has created.
// Find the first post with more than 50 characters in the title.
let apilink1='https://jsonplaceholder.typicode.com/users'
let apilink2='https://jsonplaceholder.typicode.com/posts'
fetch(apilink1).then((data2)=>
{
    return data2.json()
})
.then((jsData1)=>{
    // console.log(jsData1);
    let username=jsData1.map((c,i,t)=>{
        return c.username;
    });
    console.log("All User Names are:");
    console.log(username);
    let usemail=jsData1.map((c,i,t)=>({
        username: c.username,
        email : c.email
    }));
    console.log("USerName And Email are:");
    console.log(usemail);
    let id5=jsData1.find((c,i,t)=>{
        return c.id === 5;
    });
    console.log("User with ID 5 is:",id5);
    let cityusers=jsData1.filter((c,i,t)=>{
        return c.address.city === "Gwenborough";
    });
    console.log("Users From Gwenborough city are:");
    console.log(cityusers);
})
.catch((error)=>{
    console.warn(error.message);
})
.finally(()=>{
    console.log("Api1 Sucessfully processed");
})
fetch(apilink2).then((data3)=>{
    return data3.json()
})
.then((jsData2)=>{
    // console.log(jsData2);
    let id1=jsData2.filter((c,i,t)=>{
        return c.userId === 1;
    });
    console.log("Post written by userId 1 are:");
    console.log(id1);
    console.log("No of post created by userId 1 are:",id1.length);
    let titlecar50 = jsData2.find((c,i,t)=>{
        return c.title.length > 50
    });
    console.log("First Post with title more than 50 characters is:");
    console.log(titlecar50);
    
})
.catch((error)=>{
    console.warn(error.message);
})
.finally(()=>{
    console.log("Api2 Sucessfully processed");
})


// Task 4 — API + Search
// Use:
// https://fakestoreapi.com/products
// Ask the user:
// Enter product category:
// Example:
// electronics
// Then display only products belonging to that category.
// Also ask:
// Enter maximum price:
// Example:
// 500
// Display products matching both conditions:
// Category = electronics
// Price <= 500
// Concepts: prompt(), fetch(), filter(), conditions, functions.
let apisearch = 'https://fakestoreapi.com/products'
fetch(apisearch).then((Data)=>{
    return Data.json()
})
.then((jsData)=>{
    function Searchcategory(category)
    {
        return jsData.filter((c,i,t)=>{
            return c.category === category
        });
    }
    function Searchitem(category,price)
    {
        return jsData.filter((c,i,t)=>{
            return c.category === category && c.price <= price;
        });
    }
    let cat=prompt("Enter product Category:");
    let price=Number(prompt("Enter maximum price:"));
    console.log("Products belonging to user required category are:",Searchcategory(cat));
    console.log("Products belonging to users price and category are: ",Searchitem(cat,price))
})


// Task 5 — API Shopping Cart
// Use:
// https://fakestoreapi.com/products
// Fetch the products and create a shopping cart.
// The student should:
// Display available products.
// Select products using their IDs.
// Add selected products to an array.
// Calculate cart total using reduce().
// Apply discount:
// Above $100 → 10%
// Above $200 → 20%
// Display final amount.
// Example:
// ===== CART =====

// Product 1: Laptop
// Price: $999

// Product 2: Mouse
// Price: $50

// Total: $1049
// Discount: 20%
// Final Amount: $839.20
// let shopapi = 'https://fakestoreapi.com/products'
// fetch(shopapi).then((Data)=>{
//     return Data.json();
// })
// .then((jsData)=>{
//     console.log("========== AVAILABLE PRODUCTS ==========");
//     jsData.array.forEach((c,i,t) => {
//         console.log("ID:",c.id);
//         console.log("Title:",c.title);
//         console.log("Price: $"+c.price);
//     });
// })
// .catch((error)=>{
//     console.warn(error.message);
// })
// .finally(()=>{
//     console.log("Api Processed Sucessfully");
// })
// Task 5 — API Shopping Cart
let shopapi = 'https://fakestoreapi.com/products';
fetch(shopapi).then((Data) => {
    return Data.json();
})
.then((jsData) => {
    console.log("========== AVAILABLE PRODUCTS ==========");
    jsData.forEach((product) => {
        console.log(
            "ID:", product.id,
            "| Title:", product.title,
            "| Price: $" + product.price
        );
    });
    let selectedIds = prompt("Enter product IDs separated by commas(1-20):");
    selectedIds = selectedIds.split(",").map(Number);
    let cart = jsData.filter((product) => {
        return selectedIds.includes(product.id);
    });
    console.log("\n========== CART ==========");
    cart.forEach((c,i,t) => {
        console.log("Product " + (i + 1) + ": " + c.title);
        console.log("Price: $" + c.price);
    });
    let total = cart.reduce((acc,c,i,t) => {
        return acc + c.price;
    }, 0);
    console.log("\nTotal: $" + total.toFixed(2));
    let discount = 0;
    if (total > 200) {
        discount = 20;
    }
    else if (total > 100) {
        discount = 10;
    }
    console.log("Discount: " + discount + "%");
    let discountAmount = total * discount / 100;
    let finalAmount = total - discountAmount;
    console.log("Final Amount: $" + finalAmount.toFixed(2));
})
.catch((error) => {
    console.warn(error.message);
})
.finally(() => {
    console.log("API Processed Successfully");
});


// Task 6 — FakeStore Product Report
// This is the best intermediate assignment for your current syllabus.
// API:
// https://fakestoreapi.com/products
// Create a complete product report.
// Students must implement:
// 1. Fetch API
// fetch(apiLink)
// 2. Convert response
// response.json()
// 3. Display all products
// Use:
// forEach()
// 4. Create product names array
// Use:
// map()
// 5. Filter expensive products
// price > 100
// Use:
// filter()
// 6. Find electronics product
// Use:
// find()
// 7. Calculate total price
// Use:
// reduce()
// 8. Check products
// Use:
// some()
// every()
// 9. Sort
// Highest price → lowest price.
// 10. Error handling
// Use:
// .catch()
// .finally()
// Expected final output
// ========== PRODUCT REPORT ==========

// Total Products: 20

// Product Names:
// - Fjallraven Backpack
// - Mens Casual Premium Slim Fit T-Shirts
// - Mens Cotton Jacket
// ...

// Products Above $100:
// ...

// Electronics Product:
// ...

// Total Product Value:
// $XXXX

// Any Product Above $500:
// true

// All Products Above $1:
// true

// Highest → Lowest:
// ...
// This stays within the concepts actually present in your student's code, especially the API flow using fetch(), .json(), .then(), .catch() and .finally().
let proapi='https://fakestoreapi.com/products'
fetch(proapi).then((data)=>{
    return data.json()
})
.then((jsData)=>{
    // jsData.forEach((c,i,t) => {
        // console.log(c);
    // });
    let names=jsData.map((c,i,t)=>{
        return c.title
    });
    let pro100=jsData.filter((c,i,t)=>{
        return c.price > 100
    });
    let electronics=jsData.find((c,i,t)=>{
        return c.category === "electronics"
    });
    let total = jsData.reduce((acc,c,i,t)=>{
        return acc + c.price
    },0);
    let proabo500 = jsData.some((c,i,t)=>{
        return c.price > 500
    });
    let proabo1 = jsData.every((c,i,t)=>{
        return c.price >1
    })
    let sorted=[... jsData].sort((a,b)=>{
        return b.price - a.price
    })
    console.log("========== PRODUCT REPORT ==========");
    console.log(`
Total Products: ${jsData.length}
    
Product Names: 
${names.join("\n")}

Products Above $100:
${pro100.map(c => c.title).join("\n")};

Electronic Product:
${electronics.title}

Total Product Value:
$${total.toFixed(4)}

Any Product above $500:
${proabo500}

All Products above $1:
${proabo1}

Highest → Lowest:
${sorted.map(c=>c.title).join("\n")}`);
})

.catch((error)=>{
    console.warn(error.message);
})
.finally(()=>{
    console.log("Api Worked Sucessfully");
})
