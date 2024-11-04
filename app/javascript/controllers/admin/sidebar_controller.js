import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    connect() {
        let allDropdown = document.querySelectorAll('#sidebar .side-dropdown')
        allDropdown.forEach(item => {
            let a = item.parentElement.querySelector('a:first-child')
            a.addEventListener('click', function(e) {
                e.preventDefault()

                if(!this.classList.contains('active')) {
                    allDropdown.forEach(i => {
                        let aLink = i.parentElement.querySelector('a:first-child')

                        aLink.classList.remove('active')
                        i.classList.remove('show')
                    })
                }

                this.classList.toggle('active')
                item.classList.toggle('show')
            })
        })
    }
}