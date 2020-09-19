import {Router, Request, Response} from 'express'
import Server from '../classes/server';

const router = Router();


router.get('/msg', (req: Request, res: Response) =>{
    res.json({
        ok: true,
        message:'quelquun est connecté!'
    })
})

router.post('/msg', (req: Request, res: Response) =>{
    const to      = req.body.user;
    const body    = req.body.action;
    
    const server = Server.instance;
    const payload = {
        to,
        body
    }

    server.io.emit('msg-new', payload)

    res.json({
        ok: true,
        message:'post pret',
        to,
        body
    })
})


router.post('/msg/:id', (req: Request, res: Response) =>{
    
    const user      = req.body.user;
    const action    = req.body.action;
    const id = req.params.id;
    
    const payload = {
        user,
        action
    }

    const server = Server.instance;

    server.io.in(id).emit('private-message', payload)

    res.json({
        ok: true,
        message:'post pret',
        user,
        action,
        id
    })
})



export default router