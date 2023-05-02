const{Schema, model}=require ('mongoose');

const vendedorSchema = new Schema({
    clave : {
        type : String,
        require : true,
        unique : true
    },
    nombre : String, 
    apellidos : String,
    sucursal : String,
    telefono : Number
},{
    versionKey : false, 
    timestamps : true //agrega atributos con fecha y hora
});
module.exports = model('vendedor',vendedorSchema)