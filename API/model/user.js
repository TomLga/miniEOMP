// query user

class Users{
    fetchUsers(req, res){ //to fetch all users
        const query = ` 
        SELECT userID, firstName,lastName, gender, userDOB,emailAdd, profileUrl
        FROM users
        ` 
        db.query(query, (err, results) =>{
          
            if(err) throw err
            res.json( { 
            status:res.statusCode,
            results:results
            })         
        })
    }
    fetchUser(req, res){
        const query =  ` 
        SELECT userID, firstName,lastName, gender, userDOB,emailAdd, profileUrl
        FROM users
        WHERE userID =?;
        `
        db.query(query, (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
   
    addUser(req, res) {
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
    



    updateUser(req, res){
        const data = req.body
        if(data.userPass){
          data.userPass =
          hashSync(data.userPass) //encrp when user changes password
        }
        db.query(query,
          [req.body, req.params.id],
          (err) => {
              if(err) throw err
              res.json({
              status: res.statusCode,
              msg: "THE USER RECORD WAS UPDATED"
             })
          }
      )
      }
    deleteUser(req, res){
        const query = `
        DELETE FROM users
        WHERE UserID = ${req.params.id}
        `
        dbConfig.query(query,(err) =>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "USER SUCCESFULLY DELETED"
            })
        })

    }

}
module.exports = Users