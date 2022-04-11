const { check, validationResult } = require("express-validator");
const res = require("express/lib/response");




exports.SignUpRules=()=>[
    check("fullName","this field is required").notEmpty(),
    check("email","this field should be a valid email").isEmail(),
    check("password","the length should be at least 5 digits ").isLength({min:5}),
];


exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    return errors.isEmpty()?next():res.status(400).json({error:errors.array()})
}