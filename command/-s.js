let fs= require("fs");

function fn(fpath, command){
    let fileData =fpath;
    let done = true;
    for(let j=0 ; j<command.length ; j++){
        if (command[j] == "-s"){
            let arr = fileData.split("\r\n");
            // let str="";
            // for(let i=0; i<arr.length; i++){
            //     if(arr[i]==""){
            //         if(i>0){
            //             str+=arr[i-1]+"\n\n";
            //         }
            //         while(arr[i]==""){
            //             i++;
            //         }
            //         str+=arr[i];
            //     }
            // }
            // console.log(arr);
        
            //OR
        
            for(let i=1; i<arr.length; i++){
                if(arr[i]=="" && arr[i-1]==""){
                    arr[i]=null;
                }else if(arr[i]=="" && arr[i-1]==null){
                    arr[i]=null;
                }
            }
            let temp=[];
            for(let i=0; i<arr.length; i++){
                if(arr[i]!==null){
                    temp.push(arr[i]);
                }
            }
            fileData=temp.join("\n");
            // console.log(temp.join("\n"));
            }
            
            if(command[j] =="-n" && done==true){
                let arr = fileData.split("\r\n");
                console.log(arr);
                for(let i=1; i<=arr.length; i++){
                    // console.log(i);
                    console.log(i, arr[i-1], "\n");
                }
                done=false;
            }else if (command[j] == "-b" && done==true){
                let arr = fileData.split("\r\n");
                let count=1;
                for(let i=0; i<arr.length; i++){
        
                    if(arr[i]==""){
                        console.log(arr[i], "\n");
                    }else{
                        console.log(count,". ", arr[i], "\n");
                        count++;
                    }
                    
                }
                done=false;
            }
    }
    
    
}

module.exports={
    fxn: fn
}