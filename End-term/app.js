const { fstat} = require("fs");
var http = require("http")
var fs = require("fs")
const path = require("path");
const { Script } = require("vm");
//let contentType = 'text/html'
let filePath

function serveStaticFile(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err,data){
    if(err){
      res.writeHead(500,{"Content-Type": text/plain})
      res.end("500 - Internal error")
    
    }
      else{
        res.writeHead(responseCode,{"Content-Type": contentType});
        res.end(data);
      }
    })
  } 
  

 http.createServer(function(req, res) {


  var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
if (path == "") {
     serveStaticFile(res, "/index.html", "text/html")
     //filePath = path.join (__dirmane, 'End-term/index.html');
    }
    else if (path == "/script.js"){
        serveStaticFile(res, "/script.js", "text/javascript")
    }
    else if (path == "/style.css"){
        serveStaticFile(res, "/style.css", "text/css")
    }
else if (path == "/about"){
     serveStaticFile(res, "/about.html", "text/html" )
     //filePath = path.join (__dirmane, 'End-term', 'about.html');
    }
else if (path == "/video"){
  serveStaticFile(res, "/mem.html", "text/html")
 // filePath = path.join (__dirmane, 'End-term', 'Video.html');
}
else if (path == "/study"){
    serveStaticFile(res, "/study.html", "text/html")
}
else if (path == "/graduation"){
    serveStaticFile(res, "/graduation.html", "text/html")
}
else if (path == "/img/about.jpg"){
    serveStaticFile(res, "/img/about.jpg", "image/jpeg")
}
else if (path == "/video/students/memes.mp4"){
    serveStaticFile(res, "/video/students/memes.mp4", "video/mp4")
}
else if (path == "/img/welcome.jpg"){
    serveStaticFile(res, "/img/welcome.jpg", "image.jpeg")
}
else if (path == "/img/gallery/graduation.jpg"){
    serveStaticFile(res, "/img/gallery/graduation.jpg", "image.jpeg")
}
  else if (path == "/img/gallery/study.jpg"){
    serveStaticFile(res, "/img/gallery/study.jpg" , "image.jpeg")
   // filePath = path.join (__dirmane, 'End-term', 'img', 'gallery', 'study.jpg');
   }
else if (path == "/img/cry.jpg"){
    serveStaticFile(res, "/img/cry.jpg", "image/jpeg")
}
  else {
    serveStaticFile(res, "/error.html", "text/html", 404)
    
}
  }).listen(3000)
   //key words = "", "/about", "/video", "/study", "/graduation".

//   var ext = path.extname(filePath)

//    switch (ext) {
//       case '.css':
//       contentType = 'text/css'
//       break
//       case '.js':
//       contentType = 'text/javascript'
//       break
//       case '.mp4':
//           contentType = 'text/mp4'
//           case '.jpg':
//           contentType = 'text/jpg'
//       default:
//           contentType = 'text/html'
//   }


// let filePath = path.join(__dirname, 'End_term', req.url === '/video/memes' ? 'memes.mp4' : req.url)
 //console.log(filePath)
 

 
   
 

//   fs.readFile(filepath, (err, content) => {
//       if (err){    
//           throw err
//       } else {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         })
//        res.end(content)
//     }
//   })

  console.log("Serving is running on port 3000. Press CTRL+C to terminate");