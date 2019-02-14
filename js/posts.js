const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://tracy-posts-database.herokuapp.com/'

function getPosts() {
  fetch(proxyurl + baseUrl)
    .then(response => response.json())
    .then(data => {
      var posts = data.post
      for(let i = 0; i < posts.length; i++) {
        var page = document.querySelector('#post-page')
        var heading = posts[i].heading
        var subHeading = posts[i].subHeading
        var imageURL = posts[i].imageURL
        var date = posts[i].date
        var paragraph1 = posts[i].paragraph1
        var paragraph2 = posts[i].paragraph2
        var paragraph3 = posts[i].paragraph3
        var paragraph4 = posts[i].paragraph4
        var paragraph5 = posts[i].paragraph5
        var paragraph6 = posts[i].paragraph6
        var paragraph7 = posts[i].paragraph7
        var paragraph8 = posts[i].paragraph8
        var paragraph9 = posts[i].paragraph9
        var paragraph10 = posts[i].paragraph10
        var html = 
        `
        <header class="masthead" style="background-image: url('${imageURL}')">
          <div class="overlay">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                  <div class="post-heading">
                    <h1>${heading}</h1>
                    <h2 class="subheading">${subHeading}</h2>
                    <span class="meta">Posted on ${date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <article>
          <div>
            <p id="paragraph1">${paragraph1}</p>
            <p id="paragraph2">${paragraph2}</p>
            <p id="paragraph3">${paragraph3}</p>
            <p id="paragraph4">${paragraph4}</p>
            <p id="paragraph5">${paragraph5}</p>
            <p id="paragraph6">${paragraph6}</p>
            <p id="paragraph7">${paragraph7}</p>
            <p id="paragraph8">${paragraph8}</p>
            <p id="paragraph9">${paragraph9}</p>
            <p id="paragraph10">${paragraph10}</p>
          </div>
        </article>
        <hr>
        `
      page.innerHTML += html
    }
  })
  .catch(() => console.log("Can’t access " + baseUrl + " response. Blocked by browser?"))
}
      
getPosts()