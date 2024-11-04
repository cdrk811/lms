import {Controller} from "@hotwired/stimulus"

export default class extends Controller {

    connect() {
        let allProgress = document.querySelectorAll('main .card .progress');
        let allMenu = document.querySelectorAll('main .content-data .head .menu')

        allProgress.forEach(item => {
            item.style.setProperty('--value', item.dataset.value)
        })

        allMenu.forEach(item => {
            let icon = item.querySelector('.icon')
            let menuLink = item.querySelector('.menu-link')

            icon.addEventListener('click', function () {
                menuLink.classList.toggle('show')
            })
        })

        window.addEventListener('click', function (e) {
            allMenu.forEach(item => {
                let icon = item.querySelector('.icon')
                let menuLink = item.querySelector('.menu-link')

                if (e.target !== icon) {
                    if (e.target !== menuLink) {
                        if (menuLink.classList.contains('show')) {
                            menuLink.classList.remove('show')
                        }
                    }
                }
            })
        })
    }
}