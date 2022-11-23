import { Request, Response } from "express";


export const home = (req: Request, res: Response) => {
    let age: number = 58;
    let showOld: boolean = false;

    if (age > 35) {
        showOld = true;
    }

    res.render('pages/home', {
        firstName: 'Marcus',
        lastName: 'Gama',
        showOld
    });

}