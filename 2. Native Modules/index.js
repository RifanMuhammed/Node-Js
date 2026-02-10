const fs= require("fs");
/*
fs.writeFile("message2.txt","Hello i am learning node js right now",(err)=>{
    if(err) throw error;
    console.log("success")
})
*/



fs.readFile('message.txt',"utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 