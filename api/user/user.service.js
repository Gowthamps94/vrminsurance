// const connection = require('./../../config/database');
const pool = require("./db")



module.exports = {

    getPolicyHolderList: callBack => {
        console.log("insidethe user servo")
        pool.query("SELECT * From policylist", (err, results) => {
            console.log("error, res", err, results);
            if (err) throw err;
            else return callBack(null, results.rows);
        })
    },

    createPolicyHolder: (data, callBack) => { 
        let body =  `12, '${data.fname}', '${data.lname}', '${data.group}', '${data.contactNo}', '${data.altContactNo}', '${data.address}', '${data.reference}', '${data.emailId}',  '${data.vehicleType}', '${data.vehicleName}', '${data.vehicleNo}', '${data.modelNo}', '${data.purpose}', '${data.capacity}', '${data.policyType}', '${data.idv}', '${data.insCompany}', '${data.createDate}', '${data.renewalDate}', '${data.policyAmount}', '${data.paidAmount}'`;
        let sqlQuery = "INSERT INTO policylist VALUES(" + body + ")";
        pool.query(
            sqlQuery,
            (err, results) => {
                if (err) callBack(err);
                else return callBack(null, results);
            pool.end();
            }
        );
    },

    //   getById : callBack => {
    //     let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
    //     connection.query(sql, (err, results) => {
    //       if(err) throw err;
    //       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    //     })
    // },

    //update product
    //   updateBill('/api/products/:id',(req, res) => {
    //     let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
    //     let query = conn.query(sql, (err, results) => {
    //       if(err) throw err;
    //       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    //     });
    //   });

    //Delete product
    //   app.delete('/api/products/:id',(req, res) => {
    //     let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
    //     let query = conn.query(sql, (err, results) => {
    //       if(err) throw err;
    //         res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    //     });
    //   });
}

