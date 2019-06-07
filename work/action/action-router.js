const router = require('express').Router();

const Actions = require('./action-model.js')

router.get('/', (req,res) => {
    console.log(req.body)
    Actions.getActions()
    .then(action => {
        console.log(action)
        res.status(200).json(action);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.get('/:id', (req,res) => {
    Actions.getActionById(req.params.id)
    .then(action => {
        if(action)
        {
            res.status(200).json(action);
        }
        else {
            res.status(404).json({message:'project id not found'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})


router.post('/', (req,res) => {
    Actions
    .addAction(req.body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

module.exports = router;