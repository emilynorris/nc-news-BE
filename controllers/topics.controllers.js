const {fetchAllTopics} = require ("../models/topics.models")

function getAllTopics (req,res) {
    fetchAllTopics().then((topics) => {
        res.status(200). send ({topics})
    })
}

module.exports = {getAllTopics}