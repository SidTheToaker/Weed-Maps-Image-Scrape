/************************************************************************
	NOTE: Weedmaps utilizes a page stream so dom isnt always available for 
images. So for this script to work propperly on large menus I reduce the 
page size on chrome to the smallest available before running the scirpt 
in the console.
************************************************************************/

// Choose your resolution. It can be any of the following or whatever else weedmaps decides to add down the line. 
// Accepted Params that I know of as of 10/17/2017
// medium, medium_oriented, large, original
var imageSize = "original";

//Class used by weedmaps to embed images
var imageClass = ".wm-menu-item-photo";

$(imageClass).each(function() {

	// Create Anchor
	var a = $("<a>")
	    .attr("href", this.style.backgroundImage.replace('url("', "").replace('")', "").replace("medium_oriented",imageSize))
	    .attr("download", "img.png")
	    .appendTo("body");

	//Click Anchor    
	a[0].click();

	//Destroy anchor becuase im anal about memory usage
	a.remove();  
})
