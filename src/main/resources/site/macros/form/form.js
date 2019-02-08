var libs = {
    content: require('/lib/xp/content')
}

exports.macro = function (context) {
    var formContentId = context.params.form;

    if (formContentId) {
        var formContent = libs.content.get({
            key: formContentId
        });

        return {
            body: formContent.data.embedCode,
            pageContributions: {
                headEnd: '<style type="text/css">.hbspt-form .hs-form ul{list-style-image:none;list-style-type:none;margin:0;padding-left:0;}.hbspt-form{margin:0 0 60px 0;font-size:16px;}.body .hbspt-form{margin:60px 0;}.hs-form{border:1px solid #ddd;padding:15px 30px;}.hs-form-field{margin:15px 0;}.hs-form input[type=submit]{background:#fc5d4b;color:#fff;border:0;border-radius:5px;padding:10px 21px;margin:15px 0;}.hs-form input[type=submit]:hover,.hs-form input[type=submit]:focus{background:#fc4632}.hs-form input[type=radio]{margin-right:5px;}.hs-form label,.hs-form select{margin:5px 0;cursor:pointer;}.hs-form input[type=text], .hs-form input[type=email]{width:100%;padding:5px;max-width:400px;}.hs-form textarea{width:100%;padding:5px;min-height:6em;border:1px solid #ddd;}.hs-form-required{color:#fc4632;}</style>'
            }
        }
    }

    return {
        body: ''
    }
};
