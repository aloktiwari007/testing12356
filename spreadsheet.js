const GoogleSpreadsheet= require('google-spreadsheet');
var Shelljs =require('shelljs');
const Octokit = require("@octokit/rest");

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
   // Shelljs.exec('git config --global user.name "aloktiwari007"');
    //console.log(Shelljs.exec('git checkout --orphan NIIT5'));
 // Shelljs.exec('git clone  https://aloktiwari007:alok@321@github.com/path/to/testing102356.git');
 Shelljs.exec('git config --global user.name "aloktiwari007"');
 Shelljs.exec('git add .');
  Shelljs.exec('git commit -m "msg"');
  Shelljs.exec('git push origin NIIT5');
//     Shelljs.exec('git log');
//    Shelljs.exec('git remote add aloktiwari007 https://github.com/aloktiwari007/testing12356');
//     Shelljs.exec('git push --set-upstream testing12356 NIIT5');
//        if(Shelljs.exec(command).code!==0)
//    {

//    }

    
  
       // console.log(stdout);

   
    // Shelljs('git --version',function(err, stdout, stderr){
    //     if(err != null){
    //         return cb(new Error(err), null);
    //     }else if(typeof(stderr) != "string"){
    //         return cb(new Error(stderr), null);
    //     }else{
    //         return cb(null, stdout);
    //     }

    //});

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


// function printdata(row)
// {
//     console.log(`Project Name: ${row.projectname}`);
//     console.log("-----------------------");
// }

// async function accessSpreadsheet() {
//     const doc=new GoogleSpreadsheet('1QVpuWpiNz9VsFENShSRt1pRblNuYIdSB7UZdYGRm2kA')
//     await promisify(doc.useServiceAccountAuth)(creds);
//     const info=await promisify(doc.getInfo)();
//     const sheet=info.worksheets[0];
//     //console.log(`Title:${sheet.title}, Rows: ${sheet.rowCount}`);
//     const rows=await promisify(sheet.getRows)({
//         offset:1


//     });
//     //  const rows=await promisify(sheet.getCells)({
             
//     //      rcount:sheet.rowCount
    
    
//     //      });

//     rows.forEach(row => {
//         printdata(row);
        
//     });
//      // console.log(rows.rcount);
// }


// accessSpreadsheet();