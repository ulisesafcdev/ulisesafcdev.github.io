export default function scrollTop(id){
    const $btn = document.querySelector(id);

    window.addEventListener('scroll', (e) => {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 375){
            $btn.classList.remove('hidden');
        } else {
            $btn.classList.add('hidden');
        }
    })

    document.addEventListener('click', (e) => {
        if(e.target.matches(id)){
            window.scrollTo({
                behavior: "smooth",
                top:0
            })
        }
    })
}  