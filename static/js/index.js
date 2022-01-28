const calculateAge = () => {
    var dob = new Date('05/30/2001')
    var month_difference = Date.now() - dob.getTime();
    var age_date = new Date(month_difference);
    var year = age_date.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('body').classList.remove('section-show');
    document.querySelector('.section.active').classList.remove('active');
})

document.querySelectorAll('.home-navbar > ul > li > a[data-section]').forEach(ele => ele.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.dataset.section)
    if(document.querySelector(`#${e.target.dataset.section}`)){
        document.querySelector('body').classList.add('section-show');
        document.querySelector(`#${e.target.dataset.section}`)?.classList?.add('active');
    }
}));

document.querySelector('.age').innerHTML = `${calculateAge()} years`;

// $(function(){
// 	"use strict";

// 	$('.home-navbar > ul > li > a[data-section]').on('click', function(e){
// 		e.preventDefault();
// 		var section = $('#' + $(this).data('section'));
// 		if( section.length != 0 ){
			
// 			$('body').addClass('section-show');
			
// 			section.addClass('active');
		
// 		}
		
// 	});
// 	$('.close-btn').on('click', function(){
// 		$('body').removeClass('section-show');
// 		$('section.active').removeClass('active');
// 	});
	
	
	
	
	
// 	/*=========================================================================
// 		Skill Bar's Percent Initialization from attribute data-percent
// 	=========================================================================*/
// 	$('.skill-bar').each(function(){
// 		var $this = $(this),
// 			percent = parseInt( $this.data('percent'), 10 );
		
// 		$this.find('.bar').css('width', percent + '%');
// 	});
	
// })