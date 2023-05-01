const{Schema, model}=require ('mongoose');

const telefonoSchema = new Schema({
    codigo : {
        type : String,
        require : true,
        unique : true
    },
    nombre : String, 
    color : String,
    precioCompra : Number,
    precioVenta : Number,
    garantia : String,
    existencias: Number 
},{
    versionKey : false, 
    timestamps : true //agrega atributos con fecha y hora
});
module.exports = model('telefono',telefonoSchema)