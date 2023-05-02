const{Schema, model}=require ('mongoose');

const clienteSchema = new Schema({
    idCliente : {
        type : String,
        require : true,
        unique : true
    },
    nombre : String, 
    apellidos : String,
    domicilio : String,
    telefono : Number 
},{
    versionKey : false, 
    timestamps : true //agrega atributos con fecha y hora
});
module.exports = model('cliente',clienteSchema)