const GoogleSpreadsheet= require('google-spreadsheet');
var Shelljs =require('shelljs');
const Octokit = require("@octokit/rest");
const fs=require('fs');
var copyDir = require("copy-dir");

const {promisify} = require('util');
const creds=require('./client_secret.json');

const octokit =new Octokit();
const clientAuth=new Octokit({

    username: 'aloktiwari007',
    password: 'alok@321',
    auth:'1f613f87b4707375165d44bec65ed5959fc8a9ed'
});

const repo="testing12356";
const ref1='heads/master';
//shelljs  bellow mention code for run github command ..
function runcommand()
{
   // Shelljs.exec('mkdir .git');
    //var b='.git'
    copyDir('./testing12356/.git','./.git',function(err){

        if(err)
        {
            console.log("err"+err)
        }
        else{

        }

    });
   
   //----------------------------------------------
 Shelljs.exec('git clone https://alok07@bitbucket.org/alok07/niit');

  console.log(Shelljs.exec('git checkout --orphan NIIT99'));
	Shelljs.exec('git config --global user.name "alok07"');
Shelljs.exec('git add .');
   Shelljs.exec('git commit -m "msg"');
   Shelljs.exec('git push origin NIIT99');


  

}
runcommand();
/*hello('temp.sh',function(err,response){
    if(!err){
        console.log(response.data);
    }else {
        console.log(err);
    }

}); */

// var status=clientAuth.repos.createForAuthenticatedUser({
// name:"testing1235696"

// });
my_content="i am alok";
//var final_content=;


// clientAuth.repos.addProtectedBranchAdminEnforcement({
//     owner:"aloktiwari007",
//   repo:"testing12356",
//     branch:"head/master"

// })

async function commitfile()
{


try{
    clientAuth.repos.createOrUpdateFile({

        owner:"aloktiwari007",
        repo:"testing12356",
        path:"my1516.txt",
        message:"first commit",
        
        content:Buffer.from('Hello World!1285').toString('base64'),
        
      
      },function(err,data){


        if(err){
                console.error(err);
        }
        else{
            console.log(data.toString);

        }

      });


    //----------------------


console.log(clientAuth.repos.createOrUpdateFile({

  owner:"aloktiwari007",
  repo:"testing12356",
  path:"my151.txt",
  message:"first commit",
  
  content:Buffer.from('Hello World!1285').toString('base64'),
  

}));
//console.log(result);
}
catch(e)
{

    console.log("error" + e)
}



 }
// commitfile();
 function getdata()
 {
clientAuth.repos.get({

    owner:"aloktiwari007",
    repo:"testing12356"
});
 }

//console.log(b.sha);
// sha_latest_commit = clientAuth.ref(repo,ref1).object.sha;

// sha_base_tree=clientAuth.commit(repo,sha_latest_commit).commit.tree.sha;

// file_name=File.join("some_dir","new_file.txt");

// blob_sha=clientAuth.create_blob(repo,Base64.encode64(my_content),"base64");
// sha_new_tree=clientAuth.create_tree(repo,[{
//     path:file_name,
//     mode:'100644',
//     type:'blob',
//     sha:blob_sha
// }],{base_tree:sha_base_tree}).sha;

   

//console.log(status);

var b
async function printdata(row)
 {
     //console.log(`Project Name: ${row.projectname}`);
     //console.log(`Project Name: ${row.json}`);
     
      
      
       
          // b +=row.json;
         //  console.log("value "+b);
       

      
    
        fs.appendFile('my.json',b,function(err){
            if(!err)
            {
              //  console.log("data save"); 
            }
            else
            {
            
                console.log("error "+ error); 

            }
            

        })
    
         
     //console.log(b);
    // b=b.substring(',', b.length - 1);
     
     //console.log("-----------------------");

 }



 var   b="  { \"dist_refid\":\"\",\"date_updated\":\"2019-07-19T00:00:00\",\"whitelisted_ids\":[";

 async function accessSpreadsheet() {
     var counter=0,counter1;
     const doc=new GoogleSpreadsheet('1wazpIyk2pEWNOZylAbVJ1Fa3Quf2vINO1EnNxMgobn8')
     await promisify(doc.useServiceAccountAuth)(creds);
     const info=await promisify(doc.getInfo)();
     const sheet=info.worksheets[0];
    console.log(`Title:${sheet.title}, Rows: ${sheet.rowCount}`);
    counter1=sheet.rowCount;
     const rows=await promisify(sheet.getRows)({
        offset:1
		


     });
    //  fs.appendFile('my.json',"  { \"dist_refid\":\"\",\"date_updated\":\"2019-07-19T00:00:00\",\"whitelisted_ids\":[",
    //  function(err){
    //     if(!err)
    //     {
    //        // console.log("data save");
            
           
    //     }
    //     else
    //     {
    //         console.log("error"+err);
            

    //     }});
	 
	 
     //console.log(rows);
    //  const rows=await promisify(sheet.getCells)({
             
     //      rcount:sheet.rowCount
    
    
     //      });

    rows.forEach(row  => {
      //  console.log("length of rows"+ rows.length);
        //console.log("length of row"+ key.length);
        counter++;
       // console.log("value of counter "+counter);
       
        if(rows.length != counter)
        {
            
            b+=row.json;

        }
       else{
        console.log("hello");
           b=b.substring(',', b.length-1)
           b+="]}";
           console.log(b);
           fs.unlink("./my.json",function(err){
            if(err)
            {
                console.log("error");
            }

           });
        printdata(b);

       }
        
  
        
   
    
        
     });
    

      // console.log(rows.rcount);
 }

//accessSpreadsheet();