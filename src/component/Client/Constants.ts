const products =[
    {
        "productId": 1,
        "productName": "Classic White Shirt",
        "color": "White",
        "size": "M",
        "price": 29.99,
        "discount": 10,
        "category": "shirt",
        "description": "A timeless classic white shirt, perfect for formal and casual occasions.",
        "dateAdded": "2024-10-01",
        "stock": 50,
        "images": [
            "/1/1.webp",
            "/1/2.webp",
            "/1/3.webp"
        ]
    },
    {
        "productId": 2,
        "productName": "Casual Blue Shirt",
        "color": "Blue",
        "size": "L",
        "price": 24.99,
        "discount": 15,
        "category": "shirt",
        "description": "Soft and comfortable blue shirt, great for casual outings and daily wear.",
        "dateAdded": "2024-10-02",
        "stock": 0,
        "images": [
            "/2/1.webp",
            "/2/2.webp",
            "/2/3.webp",
            "/2/4.webp",
            "/2/5.webp"
        ]
    },
    {
        "productId": 3,
        "productName": "Formal Black Shirt",
        "color": "Black",
        "size": "S",
        "price": 34.99,
        "discount": 5,
        "category": "shirt",
        "description": "Elegant black shirt suitable for office wear or formal events.",
        "dateAdded": "2024-10-03",
        "stock": 25,
        "images": [
            "/3/1.webp",
            "/3/2.webp",
            "/3/3.webp",
            "/3/4.webp"            
        ]
    },
    {
        "productId": 4,
        "productName": "Slim Fit Red Shirt",
        "color": "Red",
        "size": "XL",
        "price": 39.99,
        "discount": 20,
        "category": "shirt",
        "description": "A bold red slim-fit shirt, making a statement for your casual wear.",
        "dateAdded": "2024-10-04",
        "stock": 0,
        "images": [
            "/4/1.webp",
            "/4/2.webp",
            "/4/3.webp",
            "/4/4.webp"  
        ]
    },
    {
        "productId": 5,
        "productName": "Checked Green Shirt",
        "color": "Green",
        "size": "XXL",
        "price": 29.99,
        "discount": 0,
        "category": "shirt",
        "description": "A casual green checkered shirt, perfect for weekends and outdoor activities.",
        "dateAdded": "2024-10-05",
        "stock": 40,
        "images": [
            "/5/1.webp",
            "/5/2.webp",
            "/5/3.webp",            
        ]
    },
    {
        "productId": 6,
        "productName": "Classic Blue Jeans",
        "color": "Blue",
        "size": "32",
        "price": 49.99,
        "discount": 15,
        "category": "pant",
        "description": "Classic blue jeans with a comfortable fit for daily use.",
        "dateAdded": "2024-10-06",
        "stock": 0,
        "images": [
            "/6/1.webp",
            "/6/2.webp",
            "/6/3.webp",
            "/6/4.webp" 
        ]
    },
    {
        "productId": 7,
        "productName": "Faded Black Jeans",
        "color": "Black",
        "size": "34",
        "price": 44.99,
        "discount": 10,
        "category": "pant",
        "description": "Faded black jeans with a stylish worn-out look.",
        "dateAdded": "2024-10-07",
        "stock": 35,
        "images": [
            "/7/1.webp",
            "/7/2.webp",
            "/7/3.webp",
            "/7/4.webp" 
        ]
    },
    {
        "productId": 8,
        "productName": "Ripped Denim Jeans",
        "color": "Dark Blue",
        "size": "30",
        "price": 59.99,
        "discount": 5,
        "category": "pant",
        "description": "Trendy ripped denim jeans for a casual and edgy style.",
        "dateAdded": "2024-10-08",
        "stock": 10,
        "images": [
            "/8/1.webp",
            "/8/2.webp",
            "/8/3.webp",
        ]
    },
    {
        "productId": 9,
        "productName": "Khaki Chinos",
        "color": "Khaki",
        "size": "36",
        "price": 39.99,
        "discount": 20,
        "category": "pant",
        "description": "Stylish khaki chinos, perfect for casual and semi-formal occasions.",
        "dateAdded": "2024-10-09",
        "stock": 25,
        "images": [
            "/9/1.webp",
            "/9/2.webp",
            "/9/3.webp",
            "/9/4.webp"
        ]
    },
    {
        "productId": 10,
        "productName": "Camo Cargo Pants",
        "color": "Camouflage",
        "size": "38",
        "price": 54.99,
        "discount": 15,
        "category": "pant",
        "description": "Camo cargo pants with multiple pockets, great for outdoor activities.",
        "dateAdded": "2024-10-10",
        "stock": 0,
        "images": [
            "/10/1.webp",
            "/10/2.webp",
            "/10/3.webp"
        ]
    },
    {
        "productId": 11,
        "productName": "Casual Yellow Shirt",
        "color": "Yellow",
        "size": "L",
        "price": 27.99,
        "discount": 10,
        "category": "shirt",
        "description": "Bright yellow shirt for a fun and vibrant look.",
        "dateAdded": "2024-10-11",
        "stock": 50,
        "images": [
            "/11/1.webp",
            "/11/2.webp",
            "/11/3.webp",
            "/11/4.webp",
        ]
    },
    {
        "productId": 12,
        "productName": "Stylish Gray Shirt",
        "color": "Gray",
        "size": "S",
        "price": 31.99,
        "discount": 5,
        "category": "shirt",
        "description": "Stylish gray shirt with a comfortable fit, suitable for any casual event.",
        "dateAdded": "2024-10-12",
        "stock": 30,
        "images": [
            "/12/1.webp",
            "/12/2.webp",
            "/12/3.webp"            
        ]
    },
    {
        "productId": 13,
        "productName": "Linen White Shirt",
        "color": "White",
        "size": "XXL",
        "price": 37.99,
        "discount": 15,
        "category": "shirt",
        "description": "A lightweight linen shirt, perfect for summer days.",
        "dateAdded": "2024-10-13",
        "stock": 20,
        "images": [
            "/13/1.webp",
            "/13/2.webp",
            "/13/3.webp",  
            "/13/4.webp",  
            "/13/5.webp",  
        ]
    },
    {
        "productId": 14,
        "productName": "Leather Jacket",
        "color": "Black",
        "size": "L",
        "price": 129.99,
        "discount": 10,
        "category": "jacket",
        "description": "A sleek black leather jacket with a stylish and modern look.",
        "dateAdded": "2024-10-14",
        "stock": 15,
        "images": [
            "/14/1.webp",
            "/14/2.webp",
            "/14/3.webp",        
            "/14/4.webp"              
        ]
    },
    {
        "productId": 15,
        "productName": "Winter Parka",
        "color": "Navy Blue",
        "size": "M",
        "price": 89.99,
        "discount": 20,
        "category": "jacket",
        "description": "Warm and cozy winter parka, ideal for cold climates.",
        "dateAdded": "2024-10-15",
        "stock": 10,
        "images": [
            "/15/1.webp",
            "/15/2.webp",
            "/15/3.webp"      
            
        ]
    }
]

export default products