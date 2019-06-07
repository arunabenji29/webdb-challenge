const router = require('express').Router();

const Projects = require('./project-model.js')

router.get('/', (req,res) => {
    console.log(req.body)
    Projects.getProjects()
    .then(project => {
        console.log(project)
        res.status(200).json(project);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.get('/:id', (req,res) => {
    Projects.getProjectById(req.params.id)
    .then(project => {
        if(project)
        {
            res.status(200).json(project);
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
    Projects
    .addProject(req.body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.put('/:id', (req,res) => {
    Projects
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
    
    Projects
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