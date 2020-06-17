const fs = require('fs')
const path = require('path')
const http = require('http')
const {v4:uuidv4} = require('uuid')

const server = http.createServer((req,res)=>{
    let data=''
    let id = uuidv4()
    req.on('data',d=>{
        data+=d
    })
    req.on('end',()=>{
        fs.readFile(
            path.join(__dirname,'users.txt'),
            (err,userInfo)=>{
                if(err)  console.log(JSON.stringify(err,null,4)) 
                if(userInfo==='' || userInfo.indexOf(JSON.parse(data).userEmail)===-1){
                    fs.appendFile(
                        path.join(__dirname,'users.txt'),
                        `${JSON.stringify({id,...JSON.parse(data)})}\n`,
                        (err)=>{
                            if(err)  console.log(JSON.stringify(err,null,4))
                            res.writeHead(200,{'Content-Type':'application/json',
                                            'Access-Control-Allow-Origin':'*'            
                            })
                            res.end(JSON.stringify({
                                id,
                                status:'success',
                                message:'You have successfully registrated',

                            }))
                        }
                    )
                }
                else{
                    res.writeHead(200,{'Content-Type':'application/json',
                                    'Access-Control-Allow-Origin':'*'})
                res.end(JSON.stringify(
                    {
                        status:'fail',
                        message:'You have NOT succesfully registreted change your EMAIL'
                    }
                ))
                }
            }
        )
    })

})

server.listen(7000,console.log("Server ishga tushdi"))