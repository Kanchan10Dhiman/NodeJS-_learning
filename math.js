const add=(a,b)=>{
    return a+b;
};
// module.exports=add;
const mult=(a,b)=>{
    return a*b;
};
const sub=(a,b)=>{
    return a-b;
};
const div=(a,b)=>{
    return a/b;
};
const pi=3.124;
// module.exports=add;
// module.exports=mult;
//----------------------------------------------
//iNDIVIDUALLY EXPORT & REQUIRE MULTIPLE FUNCTIONS
// module.exports.add=add;
// module.exports.mult=mult;
//---------------------------------------

//EXPORTING AND REQUIRING MUTLIPLE FUNCTIONS AT ONCE
module.exports={ add,mult,sub,div,pi};






