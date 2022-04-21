export default function headerFixed(id){
    const $header = document.getElementById(id);

    window.addEventListener('scroll', (e) => {
        let scroll = document.documentElement.scrollTop;
        console.log(scroll);
        if (scroll > 60) {
            $header.classList.add('headerFixed');
        } else {
            $header.classList.remove('headerFixed');
        }
    })
}