export function auth(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        console.log(req.isAuthenticated());
        res.redirect("/login");
    }
}