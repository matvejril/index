(function() {
    var caseTab = document.querySelector(".case-tab");
    if (caseTab) {
        var caseTabItes = document.querySelectorAll('.case-tab__item');
        for (var i = 0; i < caseTabItes.length; i++) {
            caseTabItes[i].addEventListener('click', addLocalKey)
        }
    }

    function addLocalKey() {
        localStorage.setItem('externalTransition', 'true');
    }
}());
