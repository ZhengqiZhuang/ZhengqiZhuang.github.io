var posts=["2024/10/07/Blog/","2024/10/08/AI课程建设试试水/","2024/10/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };