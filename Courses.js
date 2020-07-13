const isFMFCourse = document.body.className.indexOf('product_parent_cat_fmf') > 0;

const btt = jQuery('a:contains("GET THE BROCHURE")')[0]

if (btt) {
    btt.href = "#"
    btt.addEventListener('click',function(event){                          
        courseform = document.getElementById('courseform')
        courseform.classList.add('show-course-form')

    }); 
}