/**
 * Created by shikh on 29-Nov-16.
 */


var getFriendsResponse = {

    "suggestlist": [{
        "email": "shikher9@gmail.com",
        "name": "Shikher Pandey",
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/2ACC0FBC-E3B9-B174-BBBE-1521EFFF5654_profile_100_square.jpg"
    }, {
        "email": "vignesh.ramkumar@sjsu.edu",
        "name": "Vignesh Ramkumar",
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/5A0BD487-F1BF-5026-A85D-365AD7FADE77_profile_100_square.png"
    }, {
        "email": "dureja.pulkit@gmail.com",
        "name": "Pulkit Dureja",
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/9624CB39-6C6D-2EC2-8134-4947781B0698_profile_100_square.jpg"
    }, {
        "email": "Shibunathshanker@gmail.com",
        "name": "Shibunath Shankar",
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/A69480D9-9157-D980-5FC8-EFAC8C7117A9_profile_100_square.jpg"
    }]
};


var getFriendRequests = {
    "suggestlist": [{
        "email": "rkumarvignesh@gmail.com",
        "name": "Viggy Ram",
        "profileImageUrl": "https://static0.fitbit.com/images/profile/defaultProfile_100_male.gif"
    }]
};


var lifetimeStats = {
    "best": {
        "total": {
            "distance": {"date": "2016-12-17", "value": 3.21868},
            "steps": {"date": "2016-12-17", "value": 2562}
        }
    },
    "lifetime": {
        "total": {"caloriesOut": -1, "distance": 231.04, "steps": 1651626, "activeScore": -1},
        "tracker": {"caloriesOut": -1, "distance": 0.0, "steps": 0, "activeScore": -1}
    }
};

var dashboard = {
    "recdate": "2016-12-21",
    "stepCount": 0,
    "caloriesBurnt": 1106,
    "caloriesGoal": 2743,
    "waterConsumed": 0.0,
    "waterGoal": 1893
};

var newsfeed = {
    "newsfeed": [{
        "id": 3003,
        "nfDateTime": "2016-12-21 00:00:00",
        "likecount": 0,
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/A69480D9-9157-D980-5FC8-EFAC8C7117A9_profile_100_square.jpg",
        "usercomments": [],
        "username": "Shibunath Shankar",
        "imagesUrls": [],
        "description": "I just earned a new badge of 26 lifetime miles"
    }, {
        "id": 3002,
        "nfDateTime": "2016-12-21 00:00:00",
        "likecount": 0,
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/A69480D9-9157-D980-5FC8-EFAC8C7117A9_profile_100_square.jpg",
        "usercomments": [],
        "username": "Shibunath Shankar",
        "imagesUrls": [],
        "description": "I just earned a new badge of 5,000 steps in a day"
    }, {
        "id": 3001,
        "nfDateTime": "2016-12-21 00:00:00",
        "likecount": 0,
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/2ACC0FBC-E3B9-B174-BBBE-1521EFFF5654_profile_100_square.jpg",
        "usercomments": [],
        "username": "Shikher Pandey",
        "imagesUrls": [],
        "description": "I just earned a new badge of 26 lifetime miles"
    }, {
        "id": 3000,
        "nfDateTime": "2016-12-21 00:00:00",
        "likecount": 0,
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/2ACC0FBC-E3B9-B174-BBBE-1521EFFF5654_profile_100_square.jpg",
        "usercomments": [],
        "username": "Shikher Pandey",
        "imagesUrls": [],
        "description": "I just earned a new badge of 5,000 steps in a day"
    }, {
        "id": 2996,
        "nfDateTime": "2016-12-20 00:00:00",
        "likecount": 0,
        "profileImageUrl": "https://d6y8zfzc2qfsl.cloudfront.net/A69480D9-9157-D980-5FC8-EFAC8C7117A9_profile_100_square.jpg",
        "usercomments": [],
        "username": "Shibunath Shankar",
        "imagesUrls": [],
        "description": "I have been sitting idle for 1440 minutes. I must exercise."
    }],

    "newsFeedEntries": 1175
};


var ranking = [{
    "email": "shikher9@gmail.com",
    "name": "Shikher Pandey",
    "rank": 1,
    "postCount": 452
}, {
    "email": "Shibunathshanker@gmail.com",
    "name": "Shibunath Shankar",
    "rank": 2,
    "postCount": 339
}, {
    "email": "vignesh.ramkumar@sjsu.edu",
    "name": "Vignesh Ramkumar",
    "rank": 3,
    "postCount": 223
}, {
    "email": "dureja.pulkit@gmail.com",
    "name": "Pulkit Dureja",
    "rank": 4,
    "postCount": 161
}, {
    "email": "Kadakiaruchit@gmail.com",
    "name": "Ruchit Kadakia",
    "rank": 5,
    "postCount": 158
}, {"email": "shikher.pandey@sjsu.edu", "name": "S P", "rank": 6, "postCount": 51}, {
    "email": "rkumarvignesh@gmail.com",
    "name": "Viggy Ram",
    "rank": 7,
    "postCount": 41
}];

var getFriendsResponseJSON = JSON.stringify(getFriendsResponse);
var getFriendRequestsJSON = JSON.stringify(getFriendRequests);
var newsfeedJSON = JSON.stringify(newsfeed);
var dashboardJSON = JSON.stringify(dashboard);
var lifetimeStatsJSON = JSON.stringify(lifetimeStats);
var rankingJSON = JSON.stringify(ranking);


var currentPageNum;

function confirmFriendAction(event, email, action) {
    confirmFriend(email, action, function (result) {
        if (result) {
            getFriends();
            confirmFriends();
            showStatus("Confirmed Friend");
        } else {
            getFriends();
            confirmFriends();
            showStatus("Rejected Friend");
        }
    });
}


function addFriendAction(event, email) {
    addFriend(email, function (result) {
        if (result) {
            getFriendSuggestions();
            showStatus("Friend Request sent");
        } else {
            showStatus("Friend Request not sent");
        }
    });
}

function writeComment(e, newsFeedItemId) {

    if (e.keyCode == 13) {
        var commentDescription = e.target.value;
        var url = "/app/newsfeed/" + newsFeedItemId + "/comment?userToken=" + localStorage.getItem("userToken");
        var reqObj = {
            description: commentDescription,
            timestamp: Date.now()
        };
        e.target.value = "";

        ajaxCall("POST", url, reqObj, function (status, resData) {
            if (status === 200) {
                var data = JSON.parse(resData);
                populateComments(data, newsFeedItemId);
            } else {
                console.error("Error while writing comment - status - " + status)
            }
        });
    }
}


function getFriendSuggestions() {


    var userToken = localStorage.getItem("userToken");
    var friendSuggestionsBox = document.getElementById("friendSuggestionsBox");
    friendSuggestionsBox.innerHTML = "";
    $('<h2 style="margin-bottom: 30px;"><b>Friend Suggestions</b></h2>').appendTo("#friendSuggestionsBox");

    if (userToken !== "") {
        var url = "/app/getFriendSuggestions?userToken=" + userToken;
        console.log("UserToken: " + userToken);
        var reqObj = {};
        ajaxCall("GET", url, reqObj, function (status, data) {
            console.log("FS Status is " + status);
            //if (status == 200) {
            console.log("data " + data);
            var friendSuggestionObj = JSON.parse(getFriendsResponseJSON);
            console.log("friendSuggestionObj " + friendSuggestionObj);
            var friendSuggestionsArray = friendSuggestionObj.suggestlist;
            console.log(friendSuggestionsArray + " friendSuggestions Array")
            for (var i = 0; i < friendSuggestionsArray.length; i++) {
                var email = friendSuggestionsArray[i].email;
                var profileImageUrl = friendSuggestionsArray[i].profileImageUrl;
                var name = friendSuggestionsArray[i].name;
                var url = "app/friendProfile";


                var friendSuggestion = '<div style="display: flex;margin-bottom: 20px;">' +
                    '<a href="/" onclick="navigateToUrlByEmail(event,\'/app/Profile.html\',\'' + email + '\')">' +
                    '<img class="boxShadowSmall" src="' + profileImageUrl + '" width="70" height="70">' +
                    '</a>' +
                    '<div>' +
                    '<a href="/" onclick="navigateToUrlByEmail(event,\'/app/Profile.html\',\'' + email + '\')">' +
                    '<h4 style="margin: 10px;">' + name + '</h4>' +
                    '</a>' +
                    '<button class="btn btn-info" style="margin-bottom: 5px;margin-left: 10px;transition-property: all;transition-duration: 1s;" onclick="addFriendAction(event,\'' + email + '\');">Add Friend</button>' +
                    '</div>' +
                    '</div>';

                $(friendSuggestion).appendTo("#friendSuggestionsBox");
            }
            // }
            // else {
            //     console.error("Unable to get friend suggestions - status : " + status);
            // }
        });
    }


}

function getFriends() {


    var userToken = localStorage.getItem("userToken");
    var friendsBox = document.getElementById("friendsBox");
    friendsBox.innerHTML = "";
    $('<h2 style="margin-bottom: 30px;"><b>Friends</b></h2>').appendTo("#friendsBox");

    if (userToken !== "") {
        var url = "/app/getFriends?userToken=" + userToken;
        var reqObj = {};
        ajaxCall("GET", url, reqObj, function (status, data) {
            //if (status == 200) {
            var friendsArray = JSON.parse(getFriendsResponseJSON).suggestlist;
            for (var i = 0; i < friendsArray.length; i++) {
                var email = friendsArray[i].email;
                var profileImageUrl = friendsArray[i].profileImageUrl;
                var name = friendsArray[i].name;

                var friend = '<div style="display: flex;margin-bottom: 20px;">' +
                    '<a href="/" onclick="navigateToFriendByEmail(event,\'/app/Profile.html\',\'' + email + '\')">' +
                    '<img class="boxShadowSmall" src="' + profileImageUrl + '" width="70" height="70">' +
                    '</a>' +
                    '<a href="/" onclick="navigateToFriendByEmail(event,\'/app/Profile.html\',\'' + email + '\')">' +
                    '<h4 style="margin: 10px;">' + name + '</h4>' +
                    '</a>' +
                    '</div>';

                $(friend).appendTo("#friendsBox");
            }
            // } else {
            //     console.error("Unable to get friend suggestions - status : " + status);
            // }
        });
    }


}

function confirmFriends() {


    var confirmFriendsBox = document.getElementById("confirmFriendsBox");
    confirmFriendsBox.innerHTML = "";
    $('<h2 style="margin-bottom: 30px;"><b>Confirm Friends</b></h2>').appendTo("#confirmFriendsBox");


    var userToken = localStorage.getItem("userToken");

    if (userToken !== "") {
        var url = "/app/getFriendRequests?userToken=" + userToken;
        var reqObj = {};
        ajaxCall("GET", url, reqObj, function (status, data) {
            //if (status == 200) {
            var confirmFriendsArray = JSON.parse(getFriendRequestsJSON).suggestlist;
            for (var i = 0; i < confirmFriendsArray.length; i++) {
                var email = confirmFriendsArray[i].email;
                var profileImageUrl = confirmFriendsArray[i].profileImageUrl;
                var name = confirmFriendsArray[i].name;
                var url = "app/friendProfile";


                var friend = '<div style="display: flex;margin-bottom: 20px;">' +
                    '<a href="/" onclick="navigateToConfirmFriendByEmail(event,\'/app/Profile.html\',\'' + email + '\')">' +
                    '<img class="boxShadowSmall" src="' + profileImageUrl + '" width="70" height="70">' +
                    '</a>' +
                    '<div>' +
                    '<a href="/" onclick="navigateToConfirmFriendByEmail(event,\'/app/Profile.html\',\'' + email + '\')">' +
                    '<h4 style="margin: 10px;">' + name + '</h4>' +
                    '</a>' +
                    '<div>' +
                    '<button class="btn btn-info" style="margin-bottom: 5px;margin-left: 10px;transition-property: all;transition-duration: 1s;" onclick="confirmFriendAction(event,\'' + email + '\',\'true\');">Confirm</button>' +
                    '<button class="btn btn-danger" style="margin-bottom: 5px;margin-left: 5px;transition-property: all;transition-duration: 1s;" onclick="confirmFriendAction(event,\'' + email + '\',\'false\');">Reject</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                $(friend).appendTo("#confirmFriendsBox");
            }
            // } else {
            //     console.error("Unable to get friend suggestions - status : " + status);
            // }
        });
    }

}

function doSearch(e) {
    if (e.keyCode == 13) {
        var searchInput = e.target.value;
        localStorage.setItem("searchTerm", searchInput);
        //navigate to search page
        navigate("search.html");
    }
}

function createNewsFeed(pageNum) {
    pageNum = parseInt(pageNum);
    $("#moreNewsFeed").remove();
    var userToken = localStorage.getItem("userToken");
    currentPageNum = pageNum;
    currentPageNum++;
    var nextPageNum = currentPageNum;
    var moreButton = '<div onclick="createNewsFeed(\'' + nextPageNum + '\')" id="moreNewsFeed" class="boxShadowBig" style="border: 1px solid black;padding: 10px;display: flex;justify-content: center">' +
        '<h3><b>MORE</b></h3>' +
        '</div>';

    if (userToken !== "") {
        var url = "/app/newsfeed/" + pageNum + "?userToken=" + userToken;
        var reqObj = {};
        ajaxCall("GET", url, reqObj, function (status, resData) {
            //if (status == 200) {
                var data = JSON.parse(newsfeedJSON);
                var newsFeedObj = data.newsfeed;
                getNewsFeedItems("#newsFeedBlock", newsFeedObj);
                $(moreButton).appendTo("#newsFeedBlock");
            // } else {
            //     console.error("Unable to get newsfeed for user with status - " + status);
            // }
        });
    }
}


function dateFormatter(dateString) {
    return dateString.slice(0, 11);
}

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
        "-" + (mm > 9 ? '' : '0') + mm + "-",
        (dd > 9 ? '' : '0') + dd
    ].join('');
};

function getNewsFeedItems(parentId, newsfeedArray) {

    for (var i = 0; i < newsfeedArray.length; i++) {
        var newsFeedItem = newsfeedArray[i];
        var newsFeedItemId = newsFeedItem.id;
        var newsFeedItemImagesContainerId = newsFeedItemId + "imagesContainer";
        var commentsArray = newsFeedItem.usercomments;
        var imagesUrlsArray = newsFeedItem.imagesUrls;
        var commentsBoxId = newsFeedItemId + "commentsBox";
        var textAreaId = newsFeedItemId + "TextArea";
        var likeId = newsFeedItemId + "like";
        var likeImageId = likeId + "img";
        var commentCountTextId = newsFeedItemId + "commentCountText";

        //add top level news feed item

        var newsFeedItem = '<div id=' + newsFeedItemId + ' class="newsFeedItem boxShadowSmall" style="padding:10px;margin-bottom:10px;margin-top:0;">' +
            '<img src="' + newsFeedItem.profileImageUrl + '" width="60" height="60" style="margin: 10px;" class="boxShadowBig">' +
            '<h2 class="wordBreak" style="margin: 10px;display: inline;"><b>' + newsFeedItem.username + '</b></h2>' +
            '<h4 style="margin: 10px 10px 10px 0px;display: inline;">posted</h4>' +
            '<h4 class="wordBreak" style="margin: 20px 10px 20px 10px;">' + newsFeedItem.description + '</h4>' +
            '<div id="' + newsFeedItemImagesContainerId + '" style="display:flex;" class="newsFeedImagesContainer">' +
            '</div>' +
            '<h5 style="margin: 10px;margin-top: 20px;font-style: italic;">' + dateFormatter(newsFeedItem.nfDateTime) + '</h5>' +
            '<div style="display: flex;flex-direction:column;justify-content: flex-start;margin: 10px;">' +
            '<div style="margin-bottom: 20px;display: flex;flex-direction: column;">' +
            '<div><img id=' + likeImageId + ' onclick="doLike(event,\'' + newsFeedItemId + '\',' + newsFeedItem.likecount + ');" style="margin-top: 20px;margin-bottom: 10px;" src="https://s18.postimg.org/6tk42epbt/like.png" width="40" height="40"></div>' +
            '<div style="display: flex;justify-content: space-between;">' +
            '<h5 id=' + likeId + '>' + newsFeedItem.likecount + ' Likes</h5>' +
            '<h5 id=' + commentCountTextId + ' class="commentText" onclick="expandComments(' + '\'' + commentsBoxId + '\'' + ');">' + commentsArray.length + ' Comments</h5>' +
            '</div>' +
            '</div>' +
            '<textarea class="boxShadowSmall" placeholder="Write a comment" onkeyup="writeComment(event,\'' + newsFeedItemId + '\');"></textarea>' +
            '</div></div>';

        $(newsFeedItem).appendTo(parentId);


        //populate images
        for (var j = 0; j < imagesUrlsArray.length; j++) {
            console.log("imageUrls");
            console.log(imagesUrlsArray);
            var source = imagesUrlsArray[i];
            var newsFeedImageItem = '<img src=' + source + ' width="200" height="200">';
            $(newsFeedImageItem).appendTo("#" + newsFeedItemImagesContainerId);
        }

        //populate comments

        var commentBox = '<div id=' + commentsBoxId + ' class="commentBox" style="display: block;"></div>';
        $(commentBox).appendTo("#" + newsFeedItemId);

        for (var k = 0; k < commentsArray.length; k++) {
            var commentItem = commentsArray[k];
            var commentItemId = newsFeedItemId + "-" + commentItem.email + "comment-" + k;
            var commentUsername = commentItem.userName;
            var commentUserProfileImageUrl = commentItem.profileImageUrl;
            var userFriendGetProfilePath = "/app/Profile.html";
            var commentDescription = commentItem.text;

            var comment = '<div id="' + commentItemId + '" style="display: flex;">' +
                '<div>' +
                '<a href="/" onclick="navigateToUrlByEmail(event,\'' + userFriendGetProfilePath + '\',\'' + commentItem.email + '\')">' +
                '<img class="boxShadowBig" src="' + commentUserProfileImageUrl + '" width="60" height="60" style="margin: 10px;">' +
                '</a>' +
                '</div>' +
                '<div style="padding: 10px;display: flex;">' +
                '<a class="profileNameLink" href="/" onclick="navigateToUrlByEmail(event,\'' + userFriendGetProfilePath + '\',\'' + commentItem.email + '\')">' +
                '<div style="display: flex;flex-direction: column;">' +
                '<h4 class="wordBreak"><b>' + commentUsername + '</b></h4></a>' +
                '<span class="wordBreak"> ' + commentDescription + '</span>' +
                '</div>' +
                '</div>' +
                '</div>';

            $(comment).appendTo("#" + commentsBoxId);
        }


    }


}


function populateComments(data, newsFeedItemId) {


    var commentsBoxId = newsFeedItemId + "commentsBox";
    var commentsArray = data.commentsList;
    document.getElementById(commentsBoxId).innerHTML = "";
    var commentCountTextId = newsFeedItemId + "commentCountText";
    document.getElementById(commentCountTextId).innerHTML = commentsArray.length + ' Comments';

    for (var k = 0; k < commentsArray.length; k++) {
        var commentItem = commentsArray[k];
        var commentItemId = newsFeedItemId + "-" + commentItem.email + "comment-" + k;
        var commentUsername = commentItem.userName;
        var commentUserProfileImageUrl = commentItem.profileImageUrl;
        var userFriendGetProfilePath = "/app/Profile.html";
        var commentDescription = commentItem.text;

        var comment = '<div id="' + commentItemId + '" style="display: flex;">' +
            '<div>' +
            '<a href="/" onclick="navigateToUrlByEmail(event,\'' + userFriendGetProfilePath + '\',\'' + commentItem.email + '\')">' +
            '<img class="boxShadowBig" src="' + commentUserProfileImageUrl + '" width="60" height="60" style="margin: 10px;">' +
            '</a>' +
            '</div>' +
            '<div style="padding: 10px;">' +
            '<a class="profileNameLink" href="/" onclick="navigateToUrlByEmail(event,\'' + userFriendGetProfilePath + '\',\'' + commentItem.email + '\')">' +
            '<h4 class="wordBreak"><b>' + commentUsername + '</b></h4></a>' +
            '<span class="wordBreak">' + commentDescription + '</span>' +
            '</div>' +
            '</div>';

        $(comment).appendTo("#" + commentsBoxId);
    }

}


function expandComments(commentsBoxId) {
    var commentBox = document.getElementById(commentsBoxId);
    console.log(commentBox.style.display);
    if (commentBox.style.display === "none") {
        commentBox.style.display = "block";
    } else {
        commentBox.style.display = "none";
    }
}


function getStats(date) {

    var lifetimeCaloriesOut = document.getElementById("lifetimeCaloriesOut");
    var lifetimeDistance = document.getElementById("lifetimeDistance");
    var lifetimeSteps = document.getElementById("lifetimeSteps");
    var bestDistance = document.getElementById("bestDistance");
    var bestSteps = document.getElementById("bestSteps");
    var caloriesOutToday = document.getElementById("caloriesOutToday");
    var totalStepsToday = document.getElementById("totalStepsToday");
    var caloriesGoal = document.getElementById("caloriesGoal");
    var waterConsumedToday = document.getElementById("waterConsumedToday");
    var waterGoalToday = document.getElementById("waterGoalToday");
    //get lifetime stats
    var url1 = "/app/profile/lifetimeStats?userToken=" + localStorage.getItem("userToken");
    var reqObj1 = {};
    ajaxCall("GET", url1, reqObj1, function (status, resData) {
        //if (status === 200) {
            var data = JSON.parse(lifetimeStatsJSON);
            lifetimeDistance.innerHTML = "Distance " + data.lifetime.total.distance + " km";
            lifetimeSteps.innerHTML = "Steps " + data.lifetime.total.steps;
            lifetimeCaloriesOut.innerHTML = "Calories Out " + data.lifetime.total.caloriesOut;
            bestDistance.innerHTML = "Distance " + data.best.total.distance.value + " km";
            bestSteps.innerHTML = "Steps " + data.best.total.steps.value;
        // } else {
        //     console.error("Unable to get lifetime stats");
        // }
    });
    //get dashboard
    var url = "/app/dashboard?userToken=" + localStorage.getItem("userToken");
    var reqObj = {};
    ajaxCall("GET", url, reqObj, function (status, resData) {  //split into 2 functions

        //if (status === 200) {
            var data = JSON.parse(dashboardJSON);
            totalStepsToday.innerHTML = "Steps " + data.stepCount;
            caloriesGoal.innerHTML = "Calories Goal " + data.caloriesGoal;
            waterConsumedToday.innerHTML = "Water Consumed " + data.waterConsumed;
            waterGoalToday.innerHTML = "Water Goal " + data.waterGoal;
            caloriesOutToday.innerHTML = "Calories Out " + data.caloriesBurnt; //apendtochild
        // } else {
        //     console.error("Unable to retrieve daily stats");
        // }
    });
}


