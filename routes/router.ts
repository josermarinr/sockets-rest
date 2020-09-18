import {Router, Request, Response} from 'express'

const router = Router();


router.get('/msg', (req: Request, res: Response) =>{
    res.json({
        ok: true,
        message:'quelquun est connecté!'
    })
})

router.post('/msg', (req: Request, res: Response) =>{
    const user      = req.body.user;
    const action    = req.body.action;

    res.json({
        ok: true,
        message:'post pret',
        user,
        action
    })
})


router.post('/msg/:id', (req: Request, res: Response) =>{
    
    const user      = req.body.user;
    const action    = req.body.action;
    const id = req.params.id;
    
    res.json({
        ok: true,
        message:'post pret',
        user,
        action,
        id
    })
})



export default router