
$(document).ready(function(){
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(navItem){
        navItem.addEventListener("click", function(){
            contentLoader(this);
        })
    })

})

function contentLoader(navItem) {
    let content = navItem.children[0].id;
    // console.log(content+'.html')
    // $('#tab-content').load(content+'.html #p1');
    if(isMobileDevice() && content=='projects'){
        content='projects_mobile'
    }
    $.get('public/'+content+'.html', function(data){
        // debugger
        $('#tab-content').html(data)
    })
}


function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
