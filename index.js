let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const mainThread = document.querySelector(".main-thread")


function render(){
    for (i = 0; i < posts.length; i++){
        mainThread.innerHTML += `<div class="post">

                    <div class="user-info flex">
                        <img class="profile-img" src="${posts[i].avatar}" alt="">
                        <div>
                            <p class="name">${posts[i].name}</p>
                            <p class="location small">${posts[i].location}</p>
                        </div>
                    </div>

                    <div class="post-image">
                        <img class="photo" src="${posts[i].post}" alt="photo sent by [...].">
                    </div>

                    <div class="post-content">
                    
                        <div class="post-stats flex">
                            <div class="icon-container flex">
                            <img class="icon heart-icon" id="heart${i}" src="images/icon-heart.png" alt="heart icon.">
                            </div>
                            <p class="stats-count heart">${posts[i].likes}</p>
                            <div class="icon-container flex">
                            <img class="icon" src="images/icon-comment.png" alt="comment icon.">
                            </div>
                            <p class="stats-count comment"></p>
                            <div class="icon-container flex">
                            <img class="icon" src="images/icon-dm.png" alt="share icon.">
                            </div>
                            <p class="stats-count dm"></p>
                        </div>

                        <p><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>

                    </div>

                </div>`
    }
}