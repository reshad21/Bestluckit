// ============= all courses code ============= //
function seemore() {
    var readmore = document.querySelectorAll('#readmore');
    for (let i = 0; i < readmore.length; i++) {
        const item = readmore[i];
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let hideContent = document.querySelectorAll('#hideContent');
            hideContent[i].classList.remove("hide");
            item.classList.add("hide");

        })

    }
}
seemore();