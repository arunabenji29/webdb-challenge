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

module.exports = router;