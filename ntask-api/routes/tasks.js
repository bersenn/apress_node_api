module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
    .all((req, res) => {
        
    })
    .get( (req, res) => {
        Tasks.findAll({})
        .then( result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .post((req, res) => {

    });

    app.route("/routes/:id")
    .all((req, res) => {

    })
    .get((req, res) => {

    })
    .post((req, res) => {

    });
};