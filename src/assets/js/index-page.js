// Importing fullpage.js
import fullpage from 'fullpage.js';

// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
var fullPageInstance = new fullpage('#sitefullpage', {
	anchors:['home', 'profile', 'experience', 'skills', 'education', 'contact'],
    //License key
    licenseKey: null,
    //Navigation
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['Home', 'Profile', 'Experience', 'Skills', 'Education', 'Contact'],
    //Design
    sectionsColor:['#524b59', '#FFFFFF', '#F5F7FA', '#FFFFFF', '#F5F7FA', '#3c3641'],
    //Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	// Responsive design
	responsiveWidth: 900,
	afterResponsive: function(isResponsive){

	}
});

