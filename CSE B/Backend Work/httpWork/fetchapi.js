const http = require('http');

http.createServer(async (req, res) => { 
    try {
        res.setHeader('Content-Type', 'text/html');

        // Fetch data from API
        const response = await fetch('https://fakestoreapi.com/products');
        const jsdata = await response.json(); 

        console.log("Fetched products successfully");

        // Generate HTML for all products
        let productsHtml = jsdata.map(product => {
            return `
                <div style="border: 2px solid black; padding: 15px; margin: 10px; text-align: center; width: 200px; display: inline-block; background-color: #f8f8f8;">
                    <h3 style="color: darkblue;">${product.title}</h3>
                    <img src="${product.image}" style="width: 150px; height: 150px; border: 1px solid #ddd; padding: 5px; background-color: white;" />
                </div>
            `;
        }).join(''); // Join all product divs into one string

        // HTML Template
        const htmltemplate = `
            <h2 style='background-color:brown;color:white;padding: 10px; text-align: center;'>
                Welcome to Online Store
            </h2>
            <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                ${productsHtml}
            </div>
        `;

        // Send response    
        res.end(htmltemplate);

        // res.end(`
        //     <h2 style="background-color:red; color:white; padding:10px;">
        //         Welcome to Online Store for Shopping
        //     </h2>
        //     <p>We have ${data.length} products available.</p>
        //     <p>Here are some of our products:</p>
        //     <ul>
        //     ${data.map((product, index) => {
        //         return `<li>${product.title}</li>`;
        //     }).join('')}
        //     </ul>
        // `);
        
    } catch (error) {
        console.error("Error fetching data:", error);
        res.statusCode = 500;
        res.end("<h2>Internal Server Error</h2>");
    }
})
.listen(3000, () => {
    console.log("Server is running on port 3000");
});
