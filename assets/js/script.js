import $ from 'jquery';
import 'bootstrap';
import birds from '../images/bird.jpg';
import mouses from '../images/squirrel.jpg';

$('#bird').attr("src",birds);
$('#mouse').attr("src",mouses);
$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler

	

})