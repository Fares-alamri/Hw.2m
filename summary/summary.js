////////////////////////////////

let str_1="Fares Essam Saleh Al-amri";
console.log(str_1.length);                     //length property

////////////////////////////////

let str_2="Fares Essam Saleh Al-amri"
console.log(str_2.charAt(3));                  // charAt property

////////////////////////////////

let str_3="Fares Essam Saleh Al-amri" 
console.log(str_3.slice(0,11));                // slice property

///////////////////////////////

let str_4="Fares Essam Saleh Al-amri";
console.log(str.split(""));                    // split property

///////////////////////////////

let num=10;
console.log(num);                              // number(integer)

////////////////////////////////

let num_2=5.5;
console.log(num_2);                            // number(double)

////////////////////////////////

let bool=true;
console.log(`${bool}`);                        // boolean

////////////////////////////////

let nu=null;
console.log(`${nu}`);                         // null

////////////////////////////////

let undif=undefined;
console.log(undif);                          // undefined
  
////////////////////////////////

let id=Symbol
console.log(`${id}`);                       // symbol
  
////////////////////////////////

let bignum=1273627372633878473n
console.log(`${bignum}`);                   // big int

////////////////////////////////


//Conversion types

let str13=String();
let number=Number();
let boolean=Boolean();

//String to String

const str1="text";
const str1ToStr=String("text");

console.log(`${typeof str}: ${str}`);
console.log(`${typeof str1ToStr}: ${str1ToStr}`);

//number to string

const num_1=20;
const numToStr=String(num_1);

console.log(`${typeof num_1}: ${num_1}`);
console.log(`${typeof numToStr}: ${numToStr}`);

//boolean to string

const bool_1=true;
const boolToStr=String(bool_1);

console.log(`${typeof bool_1}: ${bool_1}`);
console.log(`${typeof boolToStr}: ${boolToStr}`);

//undefined to string

const Un=undefined;
const UnToStr=String(Un);

console.log(`${typeof Un}: ${Un}`);
console.log(`${typeof UnToStr} ${UnToStr}`);

//null to string

const null_1=null;
const nullToStr=String(null_1);

console.log(`${typeof null_1}: ${null_1}`);
console.log(`${typeof nullToStr}: ${nullToStr}`);

//bigint to string

const bigint_1=122347823322n;
const bigintToStr=String(bigint_1);

console.log(`${typeof bigint_1}: ${bigint_1}`);
console.log(`${typeof bigintToStr}:${bigintToStr}`);

////////////////////////////////////////////////////////////////

//number to number

const N_um=5;
const NumToNum=Number(N_um);

console.log(`${typeof N_um}:${N_um}`);
console.log(`${typeof NumToNum}: ${NumToNum}`);

//string to number

const s_tr=("11");
const StrToNum=Number(s_tr);

console.log(`${typeof s_tr}: ${s_tr}`);
console.log(`${typeof StrToNum}: ${StrToNum}`);

//string to number 2

const s_tr1="text";
const StrToNum1=Number(s_tr);

console.log(`${typeof s_tr1}: ${s_tr1}`);
console.log(`${typeof StrToNum1}: ${StrToNum1}`);

//bigint to number

const bi_gint=12334342342323n
const BigintToNum=Number(bi_gint);

console.log(`${typeof bi_gint}; ${bi_gint}`);
console.log(`${typeof BigintToNum}: ${BigintToNum}`);

//boolean to number

const bo_ol=true;
const BoolToNum=Number(bo_ol);

console.log(`${typeof bo_ol}: ${bo_ol}`);
console.log(`${typeof BoolToNum}:${BoolToNum}`);

//undefined to number

const unde=undefined;
const unToNum=Number(unde);

console.log(`${typeof unde}: ${unde}`);
console.log(`${typeof unToNum}: ${unToNum}`);

//null to number

const nul=null
const NullToNum=Number(nul);

console.log(`${typeof nul}: ${nul}`);
console.log(`${typeof NullToNum}: ${NullToNum}`);

/////////////////////////////////////////////////////////////

//boolean to boolean

const boo_l=true;
const boolToBool=Boolean(boo_l);

console.log(`${typeof boo_l}: ${boo_l}`);
console.log(`${typeof boolToBool}: ${boolToBool}`);

//number to boolean

const nu_m12=(0);
const numToBool=Boolean(nu_m12);

console.log(`${typeof nu_m12}: ${nu_m12}`);
console.log(`${typeof numToBool}: ${numToBool}`);

// number to boolean 2

const nu_m10=(150);
const numToBool1=Boolean(nu_m10);

console.log(`${typeof nu_m10}: ${nu_m10}`);
console.log(`${typeof numToBool1}: ${numToBool1}`);

//undefined to boolean

const u_ndef=undefined;
const unToBool=Boolean(u_ndef);

console.log(`${typeof u_ndef}: ${u_ndef}`);
console.log(`${typeof unToBool}: ${unToBool}`);

//null to boolean

const nu_1=null;
const nutobool=Boolean(nu_1);

console.log(`${typeof nu_1}: ${nu_1}`);
console.log(`${typeof nutobool}: ${nutobool}`);

//string to boolean

const str2=("text");
const strtobool=Boolean(str2);

console.log(`${typeof str2}: ${str2}`);
console.log(`${typeof strtobool}: ${strtobool}`);

//empty to boolean

const empty=("");
const emptyToBool=Boolean(empty);

console.log(`${typeof empty}: ${empty}`);
console.log(`${typeof emptyToBool}: ${emptyToBool}`);

////////////////////////////////////////////

let fares={
    name_2:"Essam",
    name_3:"Saleh",
    name_4:"Al-amri",
}

console.log(`${fares.name_2}`);

console.log(`${fares.name_3}`);

console.log(`${fares.name_4}`);

//////////////////////////////////////////////