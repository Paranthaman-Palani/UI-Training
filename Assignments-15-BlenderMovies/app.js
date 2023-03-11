// video object
const video=[{
    "videoUrl" : "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
    "title" : "Sintel",
    "description" : "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
    "comments" : [
        {
            "name" : "Micheal Scott",
            "image": "assets/images/reviewers/micheal.png",
            "comment" : "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
        },
        {
            "name" : "Dwight K Schrute (Asst. to the Regional Manager)",
            "image": "assets/images/reviewers/dwight.png",
            "comment" : "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
        },
        {
            "name" : "Jim Halpert",
            "image" : "assets/images/reviewers/jim.png",
            "comment" : "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
        },
        {
            "name" : "Pam Beesly Halpert",
            "image" : "assets/images/reviewers/pam.png",
            "comment" : "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
        },
        {
            "name" : "Angela Martin",
            "image" : "assets/images/reviewers/angela.png",
            "comment" : "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
        },
        {
            "name" : "Kevin Malone",
            "image" : "assets/images/reviewers/kevin.png",
            "comment" : "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
        },
        {
            "name" : "Andy Bernard",
            "image": "assets/images/reviewers/andy.png",
            "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
        }
    ]
}]
// poster object
const poster = [
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]

// Main Section
    let mainSection = document.querySelector(".mainSection");

    let videoConatiner = document.createElement("div");
    videoConatiner.setAttribute("class","videoContainer");

    let videoSection  = document.createElement("video");
    videoSection.setAttribute("class","videoSection");
    
    videoSection.setAttribute("poster",'./assets/images/poster.png')

    let source = document.createElement("source");
    source.setAttribute("src",video[0].videoUrl);


    videoSection.controls=false;
    videoSection.append(source)
    videoConatiner.append(videoSection);

    let play = document.createElement("i");
    play.setAttribute("class","fa-sharp fa-regular fa-circle-play");
    videoConatiner.append(play);

    let pause = document.createElement("i");
    pause.setAttribute("class","fa-sharp fa-regular fa-circle-pause");
    pause.style.display="none";
    videoConatiner.append(pause);


//Play-icon-event
    play.addEventListener("click",()=>{
        play.style.display="none";
        videoSection.play();
        videoSection.controls=true;

    });

    videoSection.addEventListener("click",()=>{
        pause.style.display="block";
        videoSection.pause();
        videoSection.controls=false;

    });
    
// Pause-icon-event
    pause.addEventListener("click",()=>{
        pause.style.display="none";
        videoSection.play();
        videoSection.controls=true;

    });

    mainSection.append(videoConatiner);


// Iterating video object
for(let e of video){

let videoTitle = document.createElement("span");
    videoTitle.setAttribute("class","title");
    videoTitle.innerText=e.title;
    mainSection.append(videoTitle);

let videoDescription = document.createElement("p");
    videoDescription.setAttribute("class","vedioDecription");
    videoDescription.innerText=e.description;
    mainSection.append(videoDescription);

let line1 = document.createElement("hr");
    mainSection.append(line1);

let comments = document.createElement("h3");
    comments.innerText="Comments";
    comments.style.margin="25px 0px";
    mainSection.append(comments);

// Iterating comments inside video object
for(let c of e.comments){
    let commentContainer  = document.createElement("div");
    commentContainer.setAttribute("class","commentContainer");

    let commenterProfile = document.createElement("div");
    commenterProfile.setAttribute("class","commenterProfile");
    
    let photo = document.createElement("img");
    photo.setAttribute("class","commenterPhoto");
    photo.setAttribute("alt",c.name);
    photo.src=c.image;

    commenterProfile.append(photo);
    commentContainer.append(commenterProfile);
    
    let commenterContents = document.createElement("div");
    commenterContents.setAttribute("class","commenterContents");

    let commenterName = document.createElement("div");
    commenterName.setAttribute("class","commenterName");
    commenterName.innerText=c.name;
    commenterContents.append(commenterName);

    let commentDescription = document.createElement("div");
    commentDescription.setAttribute("class","commentDescription");
    commentDescription.innerText=c.comment;
    commenterContents.append(commentDescription);

    commentContainer.append(commenterContents);
    
    mainSection.append(commentContainer);
}
}
let line2 = document.createElement("hr");
line2.setAttribute("class","line2");
    mainSection.append(line2);

let asideContainer = document.querySelector("aside");

// Iterating poster object
for(let image of poster){
    let posterContainer = document.createElement("div");
    posterContainer.setAttribute("class","posterContainer");

    let projects = document.createElement("img");
    projects.setAttribute("class","projectsImage");
    projects.src=image.imageUrl;

    posterContainer.append(projects);
    asideContainer.append(posterContainer);
}