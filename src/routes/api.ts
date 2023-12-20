import { NextFunction, Request, Response, Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Villes, {IVilles} from '@src/models/Villes';
import VillesRoutes from './VillesRoutes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

/**
 * Valide le corp d'une requète lors des insertions et 
 * des modifications dans la bd
 */

const apiRouter = Router(),
  validate = jetValidator();

// ** Validation d'un Villes ** //
function validateVilles(req: Request, res: Response, next: NextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nouvelVilles = new Villes(req.body.ville);
  const error = nouvelVilles.validateSync();
  if (error !== null && error !== undefined) {
    res.status(HttpStatusCodes.BAD_REQUEST).send(error).end();
  } else {
    next();
  }
}

// ** Ajoute VillesRouter ** //

const VillesRouter = Router();

// Lire tous les Villes
VillesRouter.get(Paths.Villes.Get, VillesRoutes.getAll);

VillesRouter.get(Paths.Villes.GetOne, VillesRoutes.getOne);

// Ajouter un Villes
VillesRouter.post(Paths.Villes.Add, validateVilles, VillesRoutes.add);

// Mettre à jour un Villes
VillesRouter.put(Paths.Villes.Update, validateVilles, VillesRoutes.update);

// Supprimer un Villes
VillesRouter.delete(Paths.Villes.Delete,VillesRoutes.delete);

// Add VillesRouter
apiRouter.use(Paths.Villes.Base, VillesRouter);

// **** Export default **** //

export default apiRouter;