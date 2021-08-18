#!/usr/bin/env node
const fs=require("fs");
let arguments=process.argv.slice(2);  // first two argument are file names

let flags= [];
let filenames= [];
let secondaryarg=[];
for(let i of arguments){
    if(i[0]=="-"){
       flags.push(i);
    }
    else if(i[0]=="%"){
        secondaryarg.push(i.slice(1)); //$@ mean @ remove krdo dono file se $bhavesh se bhavesh remove
    }
    else{
       filenames.push(i);
    }
}

// if(flags.length==0  ){   // no flags only file name so print all these
//     for(let i=0;i<filenames.length;i++){ 
//           console.log(fs.readFileSync(filenames[i],"utf-8")); //print data of file
//     }
// }
// else{   //flag hai 
//     for(let flag of flags){

//         if(flag=="-rs"){ // remove spaces    multiple flag aur multiple file hoskte hai saare kaam kro   abc def gh ij ---->>> abcdefghij
//             for(let files of filenames){
//                  let filedata=fs.readFileSync(files,"utf-8");
//                      let filedataarray=filedata.split(" "); //array bnadiya string ka 
//                       console.log(filedataarray.join(""));
                 
//             }
//         }
//      }
    
// }


for(files of filenames){ //upper optimize code
    let filedata=fs.readFileSync(files,"utf-8");
    for(let flag of flags){
        if(flag=="-rs"){
           filedata=filedata.split(" ").join("");
        }
        else if(flag=="-rn"){//remove lines
            filedata=filedata.split("\n").join("");
        }
        else if(flag=="-rsc"){//remove special char  given in seconddary arg  &%*#@&1235
         for(let argu of secondaryarg){
             filedata= filedata.split(argu).join("");
         }   
        }
        else if(flag=="-s"){
            filedata=filedata.split("\n");
            let tempd="";
            
            for(let i=0;i<filedata.length;i++){
                 tempd+= `${i+1} ${filedata[i]}\n`;
              }
            filedata=tempd;
              
        }
        else if(flag=="-sn"){
            filedata=filedata.split("\n");
            let j=0;
            let tempd="";
            for(let i=0;i<filedata.length;i++){
                if(filedata[i]==""){
                      j++;
                }
                else{
                tempd+= `${i+1-j} ${filedata[i]}\n`;}
             }

             filedata=tempd;
              
        }
    }
    console.log(filedata); //saare flag ka kaam krke phir print hoga
}