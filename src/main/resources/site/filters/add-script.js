var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/xp/thymeleaf'),
    util: require('/lib/enonic/util')
};

var view = resolve('add-script.html');


exports.responseFilter = function(req, res) {

	var siteConfig = libs.portal.getSiteConfig();

	// If no pixel code added to app, send null so that no script will be generated.
	var params = {
		hubspotID: libs.util.data.isSet(siteConfig.hubspotID) ? siteConfig.hubspotID : null
	};

	// We don't want this code inside Content Studio, only in live mode.
	if (req.mode === 'live') {
		var metadata = libs.thymeleaf.render(view, params);

		// Force arrays since single values will be return as string instead of array
		res.pageContributions.headEnd = libs.util.data.forceArray(res.pageContributions.headEnd);
		res.pageContributions.headEnd.push(metadata);
	}

	// Add ?debug=true to URL to disable this script-filter.
	if (req.params && req.params.debug === 'true') {
		res.applyFilters = false;
	}

	return res;
};
