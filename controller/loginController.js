module.exports ={
  homeLogin:function(req,res){
    res.redirect('/login')
  },
  loginPage:function(req,res){
    res.render("login",{
      title:"Coffee loop"
    })
  },
  homePage:function(req,res){
    res.render("home",{
      title:"Coffee loop"
    })
  },
  userPage:function(req,res){
    res.render("profile",{
      title:"Coffee loop"
    })
  }
}
