db.produtos
.find({ "valoresNutricionais.3.percentual": { $gte: 30, $lte: 40 } }, { _id: 0, nome: 1 });