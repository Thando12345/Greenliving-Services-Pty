function fusionSetAnimationData(i) {
    "off" === fusionAnimationsVars.status_css_animations || cssua.ua.mobile && "desktop_and_mobile" !== fusionAnimationsVars.status_css_animations ? jQuery("body").addClass("dont-animate").removeClass("do-animate") : (jQuery("body").addClass("do-animate").removeClass("dont-animate"), void 0 !== i && void 0 !== i.data.custom && jQuery(window).initWaypoint())
}! function(i) {
    "use strict";
    i.fn.initWaypoint = function() {
        i().waypoint && i(".fusion-animated").each(function() {
            var n = i(this),
                t = getWaypointOffset(n);
            "top-out-of-view" === t && (t = getAdminbarHeight() + ("function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : "0")), n.waypoint(function() {
                var i, t, a;
                n.parents(".fusion-delayed-animation").length || (n.css("visibility", "visible"), i = n.data("animationtype"), t = n.data("animationduration"), n.addClass(i), t && (n.css("-moz-animation-duration", t + "s"), n.css("-webkit-animation-duration", t + "s"), n.css("-ms-animation-duration", t + "s"), n.css("-o-animation-duration", t + "s"), n.css("animation-duration", t + "s"), a = n, setTimeout(function() {
                    a.removeClass(i)
                }, 1e3 * t))), this.destroy()
            }, {
                offset: t
            })
        })
    }
}(jQuery), jQuery(document).ready(function() {
    fusionSetAnimationData()
}), jQuery(window).on("load", function() {
    jQuery("body").hasClass("fusion-builder-live") || setTimeout(function() {
        jQuery(window).initWaypoint()
    }, 300)
}), jQuery(window).on("CSSAnimations", {
    custom: !0
}, fusionSetAnimationData);