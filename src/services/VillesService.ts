import VillesRepo from '@src/repos/VillesRepo';
import { IVilles } from '@src/models/Villes';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

export const VILLE_NOT_FOUND_ERR = 'ville non trouvé';

// **** Functions **** //

/**
 * Lire tous les animaux.
 */
function getAll(): Promise<IVilles[]> {
  return VillesRepo.getAll();
}

function getOne(nom: string): Promise<IVilles | null>{
    return VillesRepo.getOne(nom);
}

/**
 * Ajouter un ville.
 */
function addOne(ville: IVilles): Promise<IVilles> {
  return VillesRepo.add(ville);
}

/**
 * Mise à jour d'un ville.
 */
async function update(ville: IVilles): Promise<IVilles> {
  const persists = await VillesRepo.persists(ville._id!);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, VILLE_NOT_FOUND_ERR);
  }
  
  return VillesRepo.update(ville);
}

/**
 * Supprimer un ville par son ID.
 */
async function _delete(id: string): Promise<void> {
  const persists = await VillesRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, VILLE_NOT_FOUND_ERR);
  }
  // Supprimer la ville
  return VillesRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  addOne,
  update,
  delete: _delete,
} as const;