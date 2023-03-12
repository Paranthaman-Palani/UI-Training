const videos = "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
const posters = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";

$mainSection = $(".mainSection");

$.getJSON(videos, function (video) {
    $videoSection = `<div class="videoContainer"><video id="video" poster="./images/poster.png" ><source src="${video.videoUrl}"></source></video><i class="fa-sharp fa-regular fa-circle-play" id="play"></i><i class="fa-sharp fa-regular fa-circle-pause" id="pause" style="display: none;"></i></div>`;
    $mainSection.append($videoSection);

    $play = $("#play");
    $pause = $("#pause");
    $video = $("#video");

    // Play-icon-event
    $play.click(() => {
        $play.css("display", "none");
        $video.trigger("play");
        $video.attr("controls", true);
    });

    $video.click(() => {
        $pause.css("display", "block");
        $video.trigger("pause");
        $video.attr("controls", false);
    });

    // Pause-icon-event
    $pause.click(() => {
        $pause.css("display", "none");
        $video.trigger("play");
        $video.attr("controls", true);
    });

    $videoTitle = `<span class="title">${video.title}</span>`;
    $mainSection.append($videoTitle);

    $videoDescription = `<p class="vedioDecription">${video.description}</p>`;
    $mainSection.append($videoDescription);

    $line = `<hr>`;
    $mainSection.append($line);

    $comments = `<h3>${"Comments"}</h3>`;
    $mainSection.append($comments);

    for (let i in video.comments) {
        $commentContainer = $(`<div class="commentContainer">
                                        <div class="commenterProfile">
                                            <img class="commenterPhoto" src="${video.comments[i].image}" alt="${video.comments[i].name}" />
                                        </div>
                                        <div class="commenterContents">
                                            <div class="commenterName">${video.comments[i].name}</div>
                                            <div class="commentDescription">${video.comments[i].comment}</div>
                                        </div> 
                        </div>`);

        $mainSection.append($commentContainer);
    }
    });

    $line2 = $(`<hr>`);
    $line2.attr("class", "line2");
    $mainSection.after($line2);

    $asideContainer = $("aside");

    $.getJSON(posters, function (poster) {
    for (let j in poster) {
        $posterContainer = `<div class="posterContainer"> 
                    <img class="projectsImage" src="${poster[j].imageUrl}" />
                    
                    </div>`;

        $asideContainer.append($posterContainer);
    }
});
