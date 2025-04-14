const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { COMMANDE_STATUS } = require("./../Enums/Enum"); // Import the enum

const CommandOfferSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "actor",
      required: true,
    },
    offers: [
      {
        type: Schema.Types.ObjectId,
        ref: "offre",
        required: true,
      },
    ],
    status: {
      type: String,
      enum: COMMANDE_STATUS,
      default: COMMANDE_STATUS[1],
    },
    rank: {
      type: String,
      enum: ["Or", "Argent", "Bronze", "None"], // allowed values
      default: "None", // default when user is created
    },
  },
  { timestamps: true }
);

// Creating indexes
CommandOfferSchema.index({ user: 1 }); // Index on 'user' field
CommandOfferSchema.index({ offre: 1 }); // Index on 'offers' field

module.exports = mongoose.model("CommandOffer", CommandOfferSchema);
