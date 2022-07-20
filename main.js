var http = require('http');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var db = require('./lib/db.js');
var topic = require('./lib/topic');
var author = require('./lib/author.js')


var app = http.createServer(function(request,response){
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  var queryData = url.parse(_url, true).query;
    if(pathname === '/'){
      if(queryData.id === undefined){
        topic.home(request,response);
      } else { // 글 상세보기
        topic.page(request,response);
      }
    } else if(pathname === '/create'){
      topic.create(request, response);
    } else if(pathname === '/create_process'){
      topic.create_process(request, response);
    } else if(pathname === '/update'){
      topic.update(request, response);
    } else if(pathname === '/update_process'){
      topic.update_process(request, response); 
    } else if(pathname === '/delete_process'){
      topic.delete_process(request, response);
    } else if(pathname === '/authors'){
      author.home(request, response);
    }else if(pathname === '/authors/create_proccess'){
      author.create_proccess(request, response);
    } else if(pathname === '/authors/update'){
      author.update(request, response);
    } else if(pathname === '/authors/update_proccess'){
      author.update_proccess(request, response);
    } else if(pathname === '/authors/delete_proccess'){
      author.delete_proccess(request, response);
    }  else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
