const add=(a,b)=>{
    return a+b;
};
// module.exports=add;
const mult=(a,b)=>{
    return a*b;
};
// module.exports=add;
// module.exports=mult;

//iNDIVIDUALLY EXPORT & REQUIRE MULTIPLE FUNCTIONS
module.exports.add=add;
module.exports.mult=mult;




