(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.jQuery;var i=e.n(t);"en"===window["wp-stream-admin"].locale&&void 0!==i().timeago&&(i().timeago.settings.strings.seconds="seconds",i().timeago.settings.strings.minute="a minute",i().timeago.settings.strings.hour="an hour",i().timeago.settings.strings.hours="%d hours",i().timeago.settings.strings.month="a month",i().timeago.settings.strings.year="a year"),i()("li.toplevel_page_wp_stream ul li.wp-first-item.current").parent().parent().find(".update-plugins").remove(),i()(".toplevel_page_wp_stream :input.chosen-select").each((function(e,t){let a={};function n(e){const t=i()("<span>"),a=i()(e.element);let n="";return"- "===e.text.substring(0,2)&&(e.text=e.text.substring(2)),void 0!==e.id&&"string"==typeof e.id&&(0===e.id.indexOf("group-")?t.addClass("parent"):a.hasClass("level-2")&&t.addClass("child")),void 0!==e.icon?n=e.icon:void 0!==a&&""!==a.data("icon")&&(n=a.data("icon")),n&&t.html('<img src="'+n+'" class="wp-stream-select2-icon">'),t.append(e.text),t}function r(e){return"- "===e.text.substring(0,2)&&(e.text=e.text.substring(2)),e.text}a=i()(t).find("option").not(":selected").not(":empty").length>0?{minimumResultsForSearch:10,templateResult:n,templateSelection:r,allowClear:!0,width:"165px"}:{minimumInputLength:3,allowClear:!0,width:"165px",ajax:{url:window.ajaxurl,delay:500,dataType:"json",quietMillis:100,data:e=>({action:"wp_stream_filters",nonce:i()("#stream_filters_user_search_nonce").val(),filter:i()(t).attr("name"),q:e.term}),processResults(e){const t=[];return i().each(e,(function(e,i){t.push({id:i.id,text:i.label})})),{results:t}}},templateResult:n,templateSelection:r},i()(t).select2(a)}));const a=document.location.search.replace(/(^\?)/,"").split("&").map(function(e){return this[(e=e.split("="))[0]]=e[1],this}.bind({}))[0];const n=i()('.toplevel_page_wp_stream select.chosen-select[name="context"]');void 0!==a.context&&""!==a.context||void 0===a.connector||(n.val("group-"+a.connector),n.trigger("change")),i()("input[type=submit]","#record-filter-form").click((function(){i()("input[type=submit]",i()(this).parents("form")).removeAttr("clicked"),i()(this).attr("clicked","true")})),i()("#record-filter-form").submit((function(){const e=i()('.toplevel_page_wp_stream :input.chosen-select[name="context"]'),t=e.find("option:selected"),a=e.parent().find(".record-filter-connector"),n=t.data("group"),r=t.prop("class"),s=i()(".recordactions select");"true"!==i()("#record-actions-submit").attr("clicked")&&s.val(""),a.val(n),"level-1"===r&&t.val("")})),i()(window).on("load",(function(){i()('.toplevel_page_wp_stream input[type="search"]').off("mousedown")})),i()("body").on("click","#wp_stream_advanced_delete_all_records, #wp_stream_network_advanced_delete_all_records",(function(e){window.confirm(window["wp-stream-admin"].i18n.confirm_purge)||e.preventDefault()})),i()("body").on("click","#wp_stream_advanced_reset_site_settings, #wp_stream_network_advanced_reset_site_settings",(function(e){window.confirm(window["wp-stream-admin"].i18n.confirm_defaults)||e.preventDefault()}));const r=i()(".wp_stream_screen .nav-tab-wrapper"),s=i()(".wp_stream_screen .nav-tab-content table.form-table"),o=r.find(".nav-tab-active"),c=o.length>0?r.find("a").index(o):0,d=window.location.hash.match(/^#(\d+)$/),l=null!==d?d[1]:c;r.on("click","a",(function(){const e=r.find("a").index(i()(this)),t=window.location.hash.match(/^#(\d+)$/);return s.hide().eq(e).show(),r.find("a").removeClass("nav-tab-active").filter(i()(this)).addClass("nav-tab-active"),""!==window.location.hash&&null===t||(window.location.hash=e),function(e){const t=i()('input[name="option_page"][value^="wp_stream"]').closest("form");if(0===t.length)return;const a=t.attr("action");t.prop("action",a.replace(/(^[^#]*).*$/,"$1#"+e))}(e),!1})),r.children().eq(l).trigger("click"),i()(document).ready((function(){function e(){let e=!0;i()('div.metabox-prefs [name="date-hide"]').is(":checked")&&(e=!1),i()("div.alignleft.actions div.select2-container").each((function(){if(!i()(this).is(":hidden"))return e=!1,!1})),e?(i()("input#record-query-submit").hide(),i()("span.filter_info").show()):(i()("input#record-query-submit").show(),i()("span.filter_info").hide())}i()("#enable_live_update").click((function(){const e=i()("#stream_live_update_nonce").val(),t=i()("#enable_live_update_user").val();let a="unchecked",n="true";i()("#enable_live_update").is(":checked")&&(a="checked"),n=i()("#enable_live_update").data("heartbeat"),i().ajax({type:"POST",url:window.ajaxurl,data:{action:"stream_enable_live_update",nonce:e,user:t,checked:a,heartbeat:n},dataType:"json",beforeSend(){i()(".stream-live-update-checkbox .spinner").show().css({display:"inline-block"})},success(e){i()(".stream-live-update-checkbox .spinner").hide(),!1===e.success&&(i()("#enable_live_update").prop("checked",!1),e.data&&window.alert(e.data))}})})),i()('div.metabox-prefs [name="date-hide"]').is(":checked")?i()("div.date-interval").show():i()("div.date-interval").hide(),i()("div.actions select.chosen-select").each((function(){const e=i()(this).prop("name");i()('div.metabox-prefs [name="'+e+'-hide"]').is(":checked")?i()(this).prev(".select2-container").show():i()(this).prev(".select2-container").hide()})),e(),i()('div.metabox-prefs [type="checkbox"]').click((function(){let t=i()(this).prop("id");"date-hide"===t?i()(this).is(":checked")?i()("div.date-interval").show():i()("div.date-interval").hide():(t=t.replace("-hide",""),i()(this).is(":checked")?i()('[name="'+t+'"]').prev(".select2-container").show():i()('[name="'+t+'"]').prev(".select2-container").hide()),e()})),i()("#ui-datepicker-div").addClass("stream-datepicker")})),i()("table.wp-list-table").on("updated",(function(){i()(this).find("time.relative-time").each((function(e,t){const a=i()(t);a.removeClass("relative-time"),i()('<strong><time datetime="'+a.attr("datetime")+'" class="timeago"/></time></strong><br/>').prependTo(a.parent().parent()).find("time.timeago").timeago()}))})).trigger("updated");const p={init(e){this.wrapper=e,this.save_interval(this.wrapper.find(".button-primary"),this.wrapper),this.$=this.wrapper.each((function(e,t){const a=i()(t),n=a.find(".date-inputs"),r=a.find(".field-from"),s=a.find(".field-to"),o=s.prev(".date-remove"),c=r.prev(".date-remove"),d=a.children(".field-predefined"),l=i()("").add(s).add(r);if(i().datepicker){const e=parseFloat(window["wp-stream-admin"].gmt_offset)-(new Date).getTimezoneOffset()/60*-1,t=new Date,a=new Date(t.getTime()+60*e*60*1e3);let n=0;const r=null;t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()||(n=t.getTime()<a.getTime()?"+1d":"-1d"),l.datepicker({dateFormat:"yy/mm/dd",minDate:r,maxDate:n,defaultDate:a,beforeShow(){i()(this).prop("disabled",!0)},onClose(){i()(this).prop("disabled",!1)}}),l.datepicker("widget").addClass("stream-datepicker")}d.select2({allowClear:!0}),""!==r.val()&&c.show(),""!==s.val()&&o.show(),d.on({change(){const e=i()(this).val();if("custom"===e)return n.show(),!1;n.hide(),l.datepicker("hide");const t=d.find('[value="'+e+'"]'),a=t.data("to"),o=t.data("from");r.val(o).trigger("change",[!0]),s.val(a).trigger("change",[!0]),i().datepicker&&l.datepicker("widget").is(":visible")&&l.datepicker("refresh").datepicker("hide")},"select2-removed"(){d.val("").trigger("change")},check_options(){if(""!==s.val()&&""!==r.val()){const e=d.find("option").filter('[data-to="'+s.val()+'"]').filter('[data-from="'+r.val()+'"]');0!==e.length?d.val(e.attr("value")).trigger("change",[!0]):d.val("custom").trigger("change",[!0])}else""===s.val()&&""===r.val()?d.val("").trigger("change",[!0]):d.val("custom").trigger("change",[!0])}}),r.on("change",(function(){if(""!==r.val()?(c.show(),s.datepicker("option","minDate",r.val())):c.hide(),!0===arguments[arguments.length-1])return!1;d.trigger("check_options")})),s.on("change",(function(){if(""!==s.val()?(o.show(),r.datepicker("option","maxDate",s.val())):o.hide(),!0===arguments[arguments.length-1])return!1;d.trigger("check_options")})),d.trigger("change"),i()("").add(c).add(o).on("click",(function(){i()(this).next("input").val("").trigger("change")}))}))},save_interval(e){const t=this.wrapper;e.click((function(){const e={key:t.find("select.field-predefined").find(":selected").val(),start:t.find(".date-inputs .field-from").val(),end:t.find(".date-inputs .field-to").val()};i()(this).attr("href",i()(this).attr("href")+"&"+i().param(e))}))}};i()(document).ready((function(){p.init(i()(".date-interval")),i()('select[name="context"] .level-1').each((function(){let e=!0;i()(this).nextUntil(".level-1").each((function(){if(i()(this).is(":not(:disabled)"))return e=!1,!1})),!0===e&&i()(this).prop("disabled",!0)}))}))})();