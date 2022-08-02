
const file=require('fs'); // fs build in module ta importa krlam


// Creating new file in folder  writeFile method is used


file.writeFile("demo.txt", "This is Syeed MD Talha", function(error){
     
     if(error)console.log("Something wrong");
     else console.log('File has created successfully');
}); 
 
//  1. demo.txt name er file create krlam
//    2. file er vitor kisu lekhlam
//    3. ekta function pass kore check krlma file ta create hoise kina



/*file.appendFile('demo.txt',"  i'm 22 years old",(lol)=>{
     if(lol)console.log(lol);
     else console.log("Successfully appended");
})*/

/*file.readFile('demo.txt','utf-8',(err,data)=>{
    if(err)console.log(err)
    else console.log(data);
});*/


/*file.rename('demo.txt',"demo2.txt",(lol)=>{
    if(lol)console.log(lol);
    else console.log("Successfully");
}) */


/* for deleting file 
file.unlink('demo2.txt',(err)=>{
    if(err)console.log(err);
    else console.log('Successfully');
})*/




