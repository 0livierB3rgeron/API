import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import VillesService from '@src/services/VillesService';
import { IVilles } from '@src/models/Villes';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Lire tous les Villes.
 */
async function getAll(_: IReq, res: IRes) {
  const Villes = await VillesService.getAll();
  return res.status(HttpStatusCodes.OK).json({ Villes });
}

/**
 * Lire seulement une ville selon son nom
 */

async function getOne(req: IReq, res: IRes){
    const nom = req.params.nom;
    const ville = await VillesService.getOne(nom);
    return res.status(HttpStatusCodes.OK).json({ville})
}

/**
 * Ajoute une ville.
 */
async function add(req: IReq<{ ville: IVilles }>, res: IRes) {
  let { ville } = req.body;
  ville = await VillesService.addOne(ville);
  return res.status(HttpStatusCodes.CREATED).json({ ville });
}

/**
 * Mise à jour d'une ville.
 */
async function update(req: IReq<{ ville: IVilles }>, res: IRes) {
  const { ville } = req.body;
  await VillesService.update(ville)
  return res.status(HttpStatusCodes.OK).json({ ville });
}

/**
 * Supprimer une ville.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await VillesService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  getOne,
  update,
  delete: delete_,
} as const;