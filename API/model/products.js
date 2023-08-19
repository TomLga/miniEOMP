const dbConfig = require('../config')

class Products{

    fetchProducts(req,res){
        const query = `
        SELECT productID, prodName, prodDesc, catergory, prodPrice
        FROM products
        `
        dbConfig.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                data:results 
            })
        })
    }
    fetchProduct(req,res){
        const query = `
        SELECT productID, prodName, prodDesc, catergory, prodPrice
        FROM products
        WHERE productID = ?
        `
        dbConfig.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                data:results 
            })
        })

    }
   
    addProduct(req, res) {
        const { productID, prodName, prodDesc, category, prodPrice } = req.body;
    
        if (!productID || !prodName || !prodDesc || !category || !prodPrice) {
            res.json({ 
                status: res.statusCode,
                msg: 'Missing info' 
            });
        }
    
        const query = `
            INSERT INTO products (productID, prodName, prodDesc, category, prodPrice)
            VALUES (?, ?, ?, ?, ?)
        `;
    
        const productData = [productID, prodName, prodDesc, category, prodPrice];
    
        dbConfig.query(query, productData, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Product added successfully'
            });
        });
    }
    



    updateProduct(req, res){
        const query = `
        SELECT productID, prodName, prodDesc, catergory, prodPrice
        FROM products
        SET ? ? ? ? ?
        WHERE productID = ?
        `
        dbConfig.query(query, [req.body, res.params.id],(err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "THE PRODUCT WAS UPDATED"
            })}
            )

    }
    deleteProduct(req, res){
        const query = `
        DELETE FROM products
        WHERE productID = ${req.params.id}
        `
        dbConfig.query(query,(err) =>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "PRODUCT SUCCESFULLY DELETED"
            })
        })

    }
}

module.exports = Products