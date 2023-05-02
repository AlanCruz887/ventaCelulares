const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const Celular=require('./Celular');
const cliente=require('./cliente');
const Vendedor = require('./Vendedor');
const app=express();

app.set('port',process.env.PORT||3600);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.use(morgan('dev'));
app.use(express.json()); 

mongoose.connect("")
.then(db=> console.log("Mongodb atlas connected"))
.catch(err=> console.error(err));


//Consulta general celular
app.get('/celulares', async(req,res)=>{
    const celulares = await cliente.find();
    res.render('celular',{celulares})
})

//Insertar celular
app.post('/insertarCelular', async(req,res)=>{
    const celularInsertardo = new celular(req.body);
    await celularInsertardo.save();
    res.redirect("/celular")
})
//Eliminar celular
app.get('/eliminarCelular/:id', async(req,res)=>{
    await celular.findOneAndDelete({codigo:req.params.id});
    res.redirect("/celular")
})

//Actualizar celular
app.post('/actualizarCelular/:id', async(req,res)=>{
    await celular.findOneAndUpdate({codigo:req.params.id},req.body);
    res.redirect("/celular")
})
//Consulta individual celular
app.get('/consultaCelular/:id', async(req,res)=>{
    const celular1 = await Celular.findOne({codigo:req.params.id});
    res.render('editarCelular',{celular1}) 
})


//Consulta general cliente
app.get('/cliente', async(req,res)=>{
    const clientes = await cliente.find();
    res.render('cliente',{clientes})
})

//Insertar cliente
app.post('/insertarCliente', async(req,res)=>{
    const clienteInsertardo = new cliente(req.body);
    await clienteInsertardo.save();
    res.redirect("/cliente")
})
//Eliminar cliente
app.get('/eliminarCliente/:id', async(req,res)=>{
    await cliente.findOneAndDelete({idCliente:req.params.id});
    res.redirect("/cliente")
})

//Actualizar cliente
app.post('/actualizarCliente/:id', async(req,res)=>{
    await cliente.findOneAndUpdate({idCliente:req.params.id},req.body);
    res.redirect("/cliente")
})
//Consulta individual cliente
app.get('/consultaCliente/:id', async(req,res)=>{
    const cliente1 = await cliente.findOne({idCliente:req.params.id});
    res.render('editarCliente',{cliente1}) 
})


//Consulta general Vendedor
app.get('/vendedor', async(req,res)=>{
    const Vendedores = await Vendedor.find();
    res.render('vendedor',{Vendedores})
})

//Insertar Vendedor
app.post('/insertarVendedor', async(req,res)=>{
    const VendedorInsertardo = new Vendedor(req.body);
    await VendedorInsertardo.save();
    res.redirect("/Vendedor")
})
//Eliminar Vendedor
app.get('/eliminarVendedor/:id', async(req,res)=>{
    await Vendedor.findOneAndDelete({clave:req.params.id});
    res.redirect("/Vendedor")
})

//Actualizar Vendedor
app.post('/actualizarVendedor/:id', async(req,res)=>{
    await Vendedor.findOneAndUpdate({clave:req.params.id},req.body);
    res.redirect("/Vendedor")
})
//Consulta individual Vendedor
app.get('/consultaVendedor/:id', async(req,res)=>{
    const vendedor1 = await Vendedor.findOne({clave:req.params.id});
    res.render('editarVendedor',{vendedor1}) 
})

app.listen(app.get('port'),()=>{
    console.log('Server on port: ' + app.get('port'));
});
