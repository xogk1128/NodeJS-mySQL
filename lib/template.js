module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href = "./authors">authors</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list : function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },
  authorSelect : function(authors, author_id){
    var i=0;
    var tag = `<select name="author">`;
    while(i < authors.length){
      var selected = '';
      if(authors[i].id === author_id){
        selected = ' selected';
      }
      tag+= `<option value=${authors[i].id}${selected}>${authors[i].name}</option>`;
      i++;
    }
    tag+= `</select>`;
    return tag;
  },
  authorTable : function(authors){
    var tag ='<table>';
    var i=0;
    while(i<authors.length){
        tag+=`
        <tr>
            <td>${authors[i].name}</td>
            <td>${authors[i].profile}</td>
            <td><a href="/authors/update?id=${authors[i].id}">update</a></td>
            <td>
              <form action="/authors/delete_proccess" method="post">
                <p><input type="hidden" name="id" value=${authors[i].id}></p>
                <p><input type="submit" value="delete"></p>

              </form>
            </td>
        </tr>`;
        i++;
    }
    tag+='</table>';
    return tag;
  }
}
