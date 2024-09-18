const libs = {
    portal: require('/lib/xp/portal')
}

exports.macro = function (req) {
    if (req.request.mode !== 'live') {
        return {
            body: ''
        }
    }
    const siteConfig = libs.portal.getSiteConfig();

    const hubSpotId = siteConfig.hubspotID;
    const formId = req.params.formId;
    const heading = req.params.heading;

    if (hubSpotId && formId) {
        const id = `hbspt_form_${hubSpotId}_${formId}`;
        let body = `
            <script type="text/javascript">
                const loadForm = () => {
                    if (window["hbspt"]) {
                        window["hbspt"].forms.create({
                            region: "na1",
                            portalId: "${hubSpotId}",
                            formId: "${formId}",
                            target: "#${id}"
                        });
                    }
                };
            </script>`;

        if (heading) {
            body = `<h2 class="hubspot-form-heading">${heading}</h2>${body}`;
        }

        body = `${body}<div id="${id}" class="hubspot-form"/>`;

        return {
            body,
            pageContributions: {
                headEnd: '<script type="text/javascript" src="https://js.hsforms.net/forms/embed/v2.js" async onload="loadForm()"></script>'
            }
        }
    }

    return {
        body: ''
    }
};
