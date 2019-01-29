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
            body: ctaContent.data.embedCode
        }
    }

    return {
        body: ''
    }
};
