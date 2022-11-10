let news_body=document.getElementById("news_body")
let search_word=''
let search=document.getElementById("search_button")
search.addEventListener("click",function(){
    search_word=document.getElementById("search_text").value
    console.log(search_word)
    getting_news()
    document.getElementById("search_text").value=""
})
function getting_news(){
    let url=`https://newsapi.org/v2/everything?q=${ search_word !='' ? search_word : 'world' }&language=en&from=2022-10-10&sortBy=publishedAt&apiKey=3c0a8b9c37e94463b9b1b9d041f556fc`
    let response = fetch(url)
    response.then((res) => {
            return res.json()
    }).then((news) => {
            ihtml = ""
            console.log(news)
            for (news_item of news["articles"]) {
                console.log(news_item)
                    ihtml += `
                        <div class="item card mx-2 my-3" style="width:18rem;">
                            <img height=250px src="${news_item.urlToImage == null ? "./images/breaking-news-background-world-global-260nw-719766118.webp" : news_item.urlToImage }" class="card-img-top img-border" alt="...">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${news_item.title.slice(0,30)+"..."}</h5>
                                <p class="card-text">${news_item.description != null ? (news_item.description.slice(0,100)+"...") : "No description Available"}</p>
                                <a href="${news_item.url}" class="btn btn-danger mb-1 mt-auto">Read Full Article</a>
                            </div>
                        </div>
                    `
                    
            }
            if(ihtml==""){
                news_body.innerHTML="<p class='text-center light-color'>No news found related to your Query</p>"
            }else{
                news_body.innerHTML = `<div class="owl-carousel owl-theme>
                ${ihtml}
                </div>`
            }
    })
}
getting_news()