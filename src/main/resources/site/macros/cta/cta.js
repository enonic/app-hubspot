var libs = {
    content: require('/lib/xp/content')
}

exports.macro = function (context) {
    var ctaContentId = context.params.cta;

    if (ctaContentId) {
        var ctaContent = libs.content.get({
            key: ctaContentId
        });

        return {
            body: ctaContent.data.embedCode,
            pageContributions: {
                headEnd: '<style type="text/css">.hs-cta-wrapper a{border:0}.body .hs-cta-wrapper{margin:30px 0;display:block;}</style>'
            }
        }
    }

    return {
        body: ''
    }
};
