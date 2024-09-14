//download file
//write file
//upload file

function downloadFile(url,callback){
    console.log('Started downloading file...');
    
    setTimeout(function downloadData(url){
        console.log('Data has been downloaded successfully');
        let data = "This is downloaded data";
        callback("test.txt",data);
    },5000);

}
function writeFile(fileName,callback){
    console.log('Started writing to the file...');
    
    setTimeout(function writeData(url){
        console.log('Data has been written successfully');
        let data = "This is written data to ->",fileName;
        callback(data);
    },5000);
    
}
function uploadFile(fileName,callback){
    console.log('Started uploading file...');
    
    setTimeout(function uploadData(url){
        console.log('Data has been uploaded successfully');
        let data = "This is uploaded data";
        callback(data);
    },5000);
}

function performSchedule(){
    downloadFile("./test.txt",(data)=>{
        writeFile("test.txt",(data)=>{
            uploadFile("test.txt",(data)=>{
            });
        });
    });
}

performSchedule();