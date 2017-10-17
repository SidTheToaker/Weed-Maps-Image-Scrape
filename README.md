# WeedMapsImageScrape


NOTE: Weedmaps utilizes a page stream so dom isnt always available for images. So for this script to work propperly on large menus I reduce the page size on chrome to the smallest available before running the scirpt in the console.

This program is written to be operated from Chrome Console.

You can edit these vals to update the code as needed

// Choose your resolution. It can be any of the following or whatever else weedmaps decides to add down the line. 
// Accepted Params that I know of as of 10/17/2017
// medium, medium_oriented, large, original
var imageSize = "original";

//Class used by weedmaps to embed images
var imageClass = ".wm-menu-item-photo";
