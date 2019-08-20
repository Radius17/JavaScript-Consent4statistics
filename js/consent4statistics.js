//RADIUS17_COPYRIGHT_TEMPLATE

function initConsent4statistics(){
	if (checkConsent4statisticsCookies()==1) {
		if(getConsent4statisticsCookie()!='true'){
			showConsent4statistics();
		}
	}
}
function showConsent4statistics(){
	var html = '';
	var lifetime = getConsent4statisticsVar("lifetime");
	var theme = getConsent4statisticsVar("theme");
	var warning_text = getConsent4statisticsVar("text");
	var button_text = getConsent4statisticsVar("button_text");
	var button_class = getConsent4statisticsVar("button_class");
	warning_text = warning_text.replace('###BUTTON_TEXT###', button_text);
	html = html + '<div class="consent4statistics theme-' + theme + '">';
	html = html + '	<div class="container">';
	html = html + '		<div class="row">';
	html = html + '			<div class="col-sm-9">';
	html = html + '				<div class="warning_text">';
	html = html + '					<!--noindex-->';
	html = html + warning_text;
	html = html + '					<!--/noindex-->';
	html = html + '				</div>';
	html = html + '			</div>';
	html = html + '			<div class="col-sm-3">';
	html = html + '				<div class="warning_button">';
	html = html + '					<a class="linkButton btn ' + button_class + '" onclick="setConsent4statistics('+lifetime+');">' + button_text + '</a>';
	html = html + '				</div>';
	html = html + '			</div>';
	html = html + '		</div>';
	html = html + '	</div>';
	html = html + '</div>';
	appendConsent4statistics(html);
}
function getConsent4statisticsVar(n){
	switch(n) {
		case 'lifetime':
			return c4s_lifetime;
			break;
		case 'theme':
			return c4s_warning_theme;
			break;
		case 'text':
			return c4s_warning_text;
			break;
		case 'button_text':
			return c4s_button_text;
			break;
		case 'button_class':
			if(c4s_warning_theme=='red') return "btn-warning";
			if(c4s_warning_theme=='green') return "btn-primary";
			if(c4s_warning_theme=='blue') return "btn-success";
			break;
		default:
			return false;
			break;
	}
}
// jQuery special
jQuery(window).load(function() {
	initConsent4statistics();
});
function appendConsent4statistics(html){
	jQuery('body').append(html);
}
function setConsent4statistics(lifetime){
	if (checkConsent4statisticsCookies()==0) return false;
	jQuery.cookie('consent4statistics', "true", {expires: lifetime, path: '/'});
	jQuery('.consent4statistics').hide();
}
function getConsent4statisticsCookie() {
	return jQuery.cookie('consent4statistics');
}
function checkConsent4statisticsCookies(quiet_check) {
	if(quiet_check==undefined) quiet_check=0; else quiet_check=1;
	jQuery.cookie('c4s_test', 'dfgdhdfhdfghfdhdffhdfhdf',{expires: 7});
	if (jQuery.cookie('c4s_test')!='dfgdhdfhdfghfdhdffhdfhdf') {
		if (quiet_check==0) alert('Enable cookies first !!!');
		jQuery.cookie('c4s_test', null);
		return 0;
	} else {
		jQuery.cookie('c4s_test', null);
		return 1;
	}
}