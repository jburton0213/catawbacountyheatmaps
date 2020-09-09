import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'

class APIController implements IControllerBase {
    public path = '/api'
    public router = express.Router()    

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/api', this.index)
    }

    index = (req: Request, res: Response) => {
        console.log('api controller!')
        const users = [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ]
        res.send(users);
        
    }
}

export default APIController