const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
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
//Eliminar cliente
app.get('/eliminarCelular/:id', async(req,res)=>{
    await celular.findOneAndDelete({idCelular:req.params.id});
    res.redirect("/celular")
})

//Actualizar celular
app.post('/actualizarCelular/:id', async(req,res)=>{
    await celular.findOneAndUpdate({idCelular:req.params.id},req.body);
    res.redirect("/celular")
})
//Consulta individual celular
app.get('/consultaCliente/:id', async(req,res)=>{
    const celular1 = await celular.findOne({idCelular:req.params.id});
    res.render('editarCelular',{celular1}) 
})

app.listen(app.get('port'),()=>{
    console.log('Server on port: ' + app.get('port'));
});
