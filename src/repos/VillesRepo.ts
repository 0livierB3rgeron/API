import Villes, { IVilles } from '@src/models/Villes';
import { connect } from 'mongoose';

// **** Functions **** //


async function getOne(nom: string): Promise<IVilles | null> {
  await connect(process.env.MONGODB_URI!, {dbName:'ProjetFinalWeb'});
  const ville = await Villes.findOne({nom: nom});
  return ville;
}

/**
 * Vérifie si une villes existe.
 */
async function persists(id: string): Promise<boolean> {
  await connect(process.env.MONGODB_URI!, {dbName:'ProjetFinalWeb'});
  const ville = Villes.findById(id);

  return ville !== null;
}

/**
 * Lire tous les villes.
 */
async function getAll(): Promise<IVilles[]> {
  await connect(process.env.MONGODB_URI!, {dbName:'ProjetFinalWeb'});
  const ville = Villes.find();
  return ville;
}

/**
 * Ajoute d'une ville.
 */
async function add(ville: IVilles): Promise<IVilles> {
  await connect(process.env.MONGODB_URI!, {dbName:'ProjetFinalWeb'});
  const nouvelVille = new Villes(ville);
  await nouvelVille.save();
  return nouvelVille;
}

/**
 * Mets à jour d'une ville.
 */
async function update(ville: IVilles): Promise<IVilles> {
  await connect(process.env.MONGODB_URI!, {dbName:'ProjetFinalWeb'});
  const villeToUpdate = await Villes.findByIdAndUpdate(ville._id, ville);
  if (villeToUpdate === null) {
    throw new Error('Ville non trouvée');
  }
  return villeToUpdate;
}

/**
 * Supprimer d'une ville.
 */
async function delete_(id: string): Promise<void> {
  await connect(process.env.MONGODB_URI!, {dbName:'ProjetFinalWeb'});
  await Villes.findByIdAndDelete(id);
}

// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;