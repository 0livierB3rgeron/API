import mongoose, { Schema, model } from 'mongoose';

// **** Types **** //

const ContinentTypes = ['Amérique du nord', 'Amérique du sud', 'Europe', 'Asie', 'Afrique', 'Océanie'];

export interface IVilles {
  nom: string;
  surnoms: [string];
  pays: string;
  longitude: string;
  lattitude: string;
  climat: string;
  continent: string;
  population: number
  superficie: number;
  elevation: number;
  infraImportante: [{
    nom: string;
    adresse: string;
  }];
  anneeFondation: string;
  dangereux: boolean;
  image: string;
  _id?: string;
}

// **** Schema **** //
const VilleSchema = new Schema<IVilles>({
  nom: { type: String, required: [true, "Il doit y avoir au moins un nom"]},
  surnoms: {
    type: [String],
    required: [true, "Il doit y avoir au moins un surnom"]
  },
  pays: {
    type: String,
    required: [true, 'Le pays est obligatoire']
  },
  longitude: {
    type: String,
    required: [true, 'La longitude est obligatoire'],
  },
  lattitude: {
    type: String,
    required: [true, 'La lattitude est obligatoire']
  },
  climat: {
    type: String,
    required: [true, 'Le climat est obligatoire']
  },
  continent:{
    type: String,
    required: [true, 'Le continent est obligatoire'],
    enum:{
        values: ContinentTypes,
        message: 'Le continent doit être existant (Amérique du nord, Amérique du sud, Europe, Asie, Océanie, Afrique)'
    }
  },
  population: {
    type:  Number,
    required: [true, 'La population est obligatoire']
  },
  superficie: {
    type: Number,
    required: [true, 'La superficie est obligatoire']
  },
  elevation: {
    type: Number,
    required: [true, 'La donnée élévation est obligatoire']
  },
  infraImportante: [{nom: String, adresse: String}],
  anneeFondation: {
    type: String,
    required: [true, 'Année de fondation est obligatoire'],
    validate: {
        // Code inspiré de la documentation de Mongoose sur les validateurs personnalisés
        // https://mongoosejs.com/docs/validation.html#custom-validators
        validator: function (v: string) {
          return /\d{1,2}\/\d{1,2}\/\d{2,4}/.test(
            v
          );
        },
        message: (props) =>
          `${props.value} n'est pas une date valide! Le format doit être JJ/MM/AAAA`,
      },
  },
  dangereux: {
    type: Boolean,
    required: [true, 'Attribut dangereux est obligatoire']
  },
  image: {
    type: String,
    required: [true, 'Attribut image est obligatoire']
  }
});

// **** Export **** //
mongoose.pluralize(null);
export default model<IVilles>('Villes', VilleSchema);