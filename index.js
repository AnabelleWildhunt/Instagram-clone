// ********************* DATA *********************
import { posts } from "./data.js"


// ********************* EVENT LISTENERS *********************

// ---------- For Listening To Clicks On The Page ----------
document.addEventListener("click", function(e){
    if (e.target.dataset.heart) {
        console.log(e.target.dataset.heart)
    } else if (e.target.dataset.comment) {
        console.log(e.target.dataset.comment)
    } else if (e.target.dataset.dm){
        console.log(e.target.dataset.dm)
    }
})


// ********************* FUNCTIONS *********************

// ---------- For Rendering The Content Of The Main Thread ----------
function render(){
    let postsArray = ""
    for (let post of posts){
        postsArray += `
                <div class="post">

                    <div class="user-info flex">
                        <img class="profile-img" src="${post.avatar}" alt="">
                        <div>
                            <p class="name">${post.name}</p>
                            <p class="location small">${post.location}</p>
                        </div>
                    </div>

                    <div class="post-image">
                        <img class="photo" src="${post.post}" alt="photo sent by [...].">
                    </div>

                    <div class="post-content">
                    
                        <div class="post-stats flex">
                            <div class="icon-container flex">
                            <img class="icon heart-icon" data-heart="${post.uuid}" src="images/icon-heart.png" alt="heart icon.">
                            </div>
                            <p class="stats-count heart">${post.likes}</p>
                            <div class="icon-container flex">
                            <img class="icon" data-comment="${post.uuid}" src="images/icon-comment.png" alt="comment icon.">
                            </div>
                            <p class="stats-count comment"></p>
                            <div class="icon-container flex">
                            <img class="icon" data-dm="${post.uuid}" src="images/icon-dm.png" alt="share icon.">
                            </div>
                            <p class="stats-count dm"></p>
                        </div>

                        <p><span class="username">${post.username}</span> ${post.comment}</p>

                    </div>

                </div>`
    }
    document.querySelector(".main-thread").innerHTML = postsArray
}


// ********************* ENGINE ACTION *********************
render()