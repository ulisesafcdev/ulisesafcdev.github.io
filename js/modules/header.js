export default function headerFixed(id){
    const $header = document.getElementById(id);

    window.addEventListener('scroll', (e) => {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 200) {
            $header.classList.add('headerFixed');
        } else {
            $header.classList.remove('headerFixed');

        }
    })
}