var posts=["2024/10/07/hello-world/","2024/10/07/Blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };