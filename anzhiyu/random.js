var posts=["2025/06/22/hello-world/","2021/08/20/123/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };