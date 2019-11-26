
$(document).ready(function(){
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(navItem){
        console.log(navItem)
        navItem.addEventListener("click", function(){
            contentLoader(this);
        })
    })

})

function contentLoader(navItem) {
    let content = navItem.children[0].id;
    // console.log(content+'.html')
    // $('#tab-content').load(content+'.html #p1');
    $.get('public/'+content+'.html', function(data){
        console.log(data)
        // debugger
        $('#tab-content').html(data)
    })
}

function displayEducation(){

}

function displayProjects(){

}

function displayExperience(){

}

function displayContact(){

}