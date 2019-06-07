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
    Actions.getActionsAndContextById(req.params.id)
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

router.put('/:id', (req,res) => {
    Actions
    .update(req.params.id,req.body)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
});

router.delete('/:id', (req,res) => {
    
    Actions
    .remove(req.params.id)
    .then(count => {
        console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        console.log('update error ',error)
        res.status(500).json(error);
    }

    )
})

module.exports = router;