var resultLimit = "all";
//var mainContainer = "load_more_button"
var mainContainer = "main_alex"
var pictureContainer = "img_container"

getProjectPosts(1);

/*
$('.' + mainContainer).masonry({
  itemSelector: '.img_container',
  columnWidth: 200
});
*/

/**
 * Gets the posts with "projects" tag via Ghost's public API. Note public API access must be enabled to use this function.
 * @param {number} pageIndex If a limit is used, pageIndex may be specified to view the next set of limited results. E.g. there are 20 posts, with limit set to 5 posts, to access the 6th - 10th post, set pageIndex to 2.
 * @returns {array} Array of project posts
 **/
function getProjectPosts(pageIndex) {
  $.get(
    ghost.url.api("posts", {
      //include: "tags",
      limit: resultLimit,
      page: pageIndex,
      filter: "tags:projects"
    })
  ).done(function (data) {
    //console.log(data.posts);
    appendThumbnails(mainContainer, data.posts);
    return data.posts;
  });
}

/**
 * Appends thumbnails to the container specified. Expects a terminating element, which in this theme's case is a "load more" button
 * @param {string} containerClass the class name of the container to append thumbnails to
 * @param {array} projectPosts a list of posts
 **/
function appendThumbnails(containerClass, projectPosts) {
  $.each(projectPosts, function (index, projectPost) {
    if (projectPost.image) {
      $('.' + containerClass).last().before("<div class='img_container'><a href='" + projectPost.url + "'>"+ generateOverlay(projectPost) +"<img class='project_thumbnail_alex' src='" + projectPost.image + "'></a></div>");
    }
  });
}
/**
 * Generates the overlay of titles for the thumbnails
 * @param {object} projectPost a post object
 * @return {string} returns the html for the overlay
 **/
function generateOverlay(projectPost) {
  return "<span class='overlay_container'>" +
    "<span class='overlay_text'>" +
    projectPost.title +
    "</span></span>"
}
