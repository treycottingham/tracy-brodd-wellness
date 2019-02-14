const proxyurl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://tracy-posts-database.herokuapp.com/'

function getPosts() {
  fetch(proxyurl + baseUrl)
    .then(response => response.json())
    .then(data => {
      var recentPost = data.post.pop()
        var page = document.querySelector('#post0')
        var heading = recentPost.heading
        var subHeading = recentPost.subHeading
        var imageURL = recentPost.imageURL
        var date = recentPost.date
        var paragraph1 = recentPost.paragraph1
        var paragraph2 = recentPost.paragraph2
        var paragraph3 = recentPost.paragraph3
        var paragraph4 = recentPost.paragraph4
        var paragraph5 = recentPost.paragraph5
        var paragraph6 = recentPost.paragraph6
        var paragraph7 = recentPost.paragraph7
        var paragraph8 = recentPost.paragraph8
        var paragraph9 = recentPost.paragraph9
        var paragraph10 = recentPost.paragraph10
        var html = 
          `
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-preview">
                  <div>
                    <h1 id="post0-title">
                      ${heading}
                    </h1>
                    <h3 id="post0-subtitle">
                      ${subHeading}
                    </h3>
                    <p class="post-meta">Posted on <p id="post0-date"></p>${date}</p>
                  </div>
                  <div>
                    <div>
                        <img style="height:50%; width:50%; float:right; margin-right: 5%; border: solid 2px;" src="${imageURL}" alt="Italian Trulli">
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          `
      page.innerHTML += html
  })
  .catch(() => console.log("Can’t access " + baseUrl + " response. Blocked by browser?"))
}

getPosts()