const PLATFORM = "Newgrounds";
const X_REQUESTED_WITH = "XMLHttpRequest"
const URL_MOVIE_SEARCH = "https://www.newgrounds.com/search/conduct/movies?terms={0}&page={1}&inner=1";
const URL_CREATOR_SEARCH = "https://www.newgrounds.com/search/conduct/users?terms={0}&page={1}&inner=1";
const URL_CREATOR_PROFILE = "https://{0}.newgrounds.com";
const URL_CREATOR_MOVIES = "https://{0}.newgrounds.com/movies";
const URL_MOVIE_FILE = "https://www.newgrounds.com/portal/video/{0}";
const URL_FEATURED_MOVIES = "https://www.newgrounds.com/movies/featured?offset={0}&inner=1";

var config = {};

//Source Methods
source.enable = function(conf, settings, savedState){
	config = conf ?? {};
	throw new ScriptException("This is a sample");
}
source.getHome = function() {
	return new ContentPager([], false);
};

source.searchSuggestions = function(query) {
	throw new ScriptException("This is a sample");
};
source.getSearchCapabilities = () => {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: [ ]
	};
};
source.search = function (query, type, order, filters) {
	return new ContentPager([]. false);
};
source.getSearchChannelContentsCapabilities = function () {
	return {
		types: [Type.Feed.Mixed],
		sorts: [Type.Order.Chronological],
		filters: []
	};
};
source.searchChannelContents = function (channelUrl, query, type, order, filters) {
	throw new ScriptException("This is a sample");
};

source.searchChannels = function (query) {
	throw new ScriptException("This is a sample");
};

//Channel
source.isChannelUrl = function(url) {
	throw new ScriptException("This is a sample");
};
source.getChannel = function(url) {
	throw new ScriptException("This is a sample");
};
source.getChannelContents = function(url) {
	throw new ScriptException("This is a sample");
};

//Video
source.isContentDetailsUrl = function(url) {
	throw new ScriptException("This is a sample");
};
source.getContentDetails = function(url) {
	throw new ScriptException("This is a sample");
};

//Comments
source.getComments = function (url) {
	throw new ScriptException("This is a sample");

}
source.getSubComments = function (comment) {
	throw new ScriptException("This is a sample");
}

log("LOADED");