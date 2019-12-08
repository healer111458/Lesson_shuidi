<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog New</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/3.4.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <h1>Blog New</h1>
    <form action="/posts" method="post" id="article-form">
    <div clss="container">
      <div class="form-group">
       <label for="titleInput">标题</label>
       <input type="text" name="title" class="form-control" id="titleInput" placeholder="请输入标题">
      </div>
      <div class="form-group">
       <label for="contentInput">内容</label>
       <input type="text" name="title" class="form-control" id="contentInput" placeholder="请输入内容">
       <input type="submit" class="btn btn-defult" value="Submit"/>
      </div>
    </div>
    </form>
</body>
</html>