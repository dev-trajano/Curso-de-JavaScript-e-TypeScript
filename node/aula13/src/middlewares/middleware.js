// module.exports = (req, res, next) => {
    
//     if(req.body.cliente){
//         req.body.cliente = req.body.cliente.replace("trajano", "não use trajano")
//       console.log()
//       console.log(`vi que você postou ${req.body.cliente}`)
//       console.log()
//     }

//   next();
// }

exports.middlewareGlobal = (req, res, next) => {
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro Middleware')
    next();
}
