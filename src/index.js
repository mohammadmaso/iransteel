import fullpage  from 'fullpage.js'
import 'fullpage.js/dist/fullpage.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'






var landingPage = new fullpage('#fullpage', {
    //Navigation
	menu: '#menu',
	lockAnchors: false,
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['خانه', 'محصولات','ارتباط با ما'],
	showActiveTooltip: false,
	slidesNavigation: true,
    slidesNavPosition: 'bottom',
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    //Scrolling
	css3: true,
	scrollingSpeed:700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: true,
	loopTop: true,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: true,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
    bigSectionsDestination: null,
    //Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
    recordHistory: true,
    //Design
	controlArrows: true,
	verticalCentered: true,
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
    
});


