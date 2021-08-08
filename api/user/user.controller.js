const { getPolicyHolderList, createPolicyHolder } = require('./user.service')

module.exports = {
    getPolicyHolderList: (req, res) => {
        console.log("inside the getpolicy controller", req.body)
        getPolicyHolderList((err, results) => {
            if (err) { console.log("error in controller", err); return; }
            else {
                return res.json({
                    success: 1,
                    data: results
                })
            }
        })
    },

    createPolicyHolder: (req, res) => {
        const body = req.body;
        console.log("inside the createpolicy controller", req.body)
        createPolicyHolder(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            else return res.status(200).json({
                success: 1,
                data: results
            })
        })
    }
}
