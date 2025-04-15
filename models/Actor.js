const mongoose = require("mongoose");
const { OFFRE_TYPES } = require("../Enums/Enum");

const ActorSchema = new mongoose.Schema({
  nom: {
    type: String,
    require: true,
  },
  prenom: {
    type: String,
    require: true,
  },
  telephone: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  willaya: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  dataPdf: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  adresse: {
    type: String,
    require: false,
  },
  logo: {
    // New Field
    type: String,
    required: false, // Make it required if necessary
  },
  nomSociete: {
    // New Field
    type: String,
    required: false,
  },
  offre: {
    // New Field with default
    type: String,
    enum: OFFRE_TYPES,
    default: OFFRE_TYPES[0], // Default value is Bronze
    required: true,
  },
  subscribes: {
    type: Date,
    default: () => {
      const now = new Date();
      now.setDate(now.getDate() + 7);
      return now;
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("actor", ActorSchema);
