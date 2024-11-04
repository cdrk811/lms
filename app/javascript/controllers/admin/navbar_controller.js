import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    connect() {
        let profile = document.querySelector('nav .profile');
        let imgProfile = profile.querySelector('img');
        let dropdownProfile = profile.querySelector('.profile-link');
        let allDropdown = document.querySelectorAll('#sidebar .side-dropdown')

        let toggleSlidebar = document.querySelector('nav .toggle-sidebar')
        let sidebar = document.getElementById('sidebar')
        let allSideDivider = document.querySelectorAll('#sidebar .divider')

        imgProfile.addEventListener('click', function () {
            dropdownProfile.classList.toggle('show')
        })

        window.addEventListener('click', function (e) {
            if(e.target !== imgProfile) {
                if(e.target !== dropdownProfile) {
                    if(dropdownProfile.classList.contains('show')) {
                        dropdownProfile.classList.remove('show')
                    }
                }
            }
        })

        if(sidebar.classList.contains('hide')) {
            allSideDivider.forEach(item => {
                item.textContent = '-'
            })
            allDropdown.forEach(item=> {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            })
        } else {
            allSideDivider.forEach(item => {
                item.textContent = item.dataset.text
            })
        }

        // toggle sidebar
        toggleSlidebar.addEventListener('click', function() {
            sidebar.classList.toggle('hide')

            if(sidebar.classList.contains('hide')) {
                allSideDivider.forEach(item => {
                    item.textContent = '-'
                })
                allDropdown.forEach(item=> {
                    const a = item.parentElement.querySelector('a:first-child');
                    a.classList.remove('active');
                    item.classList.remove('show');
                })
            } else {
                allSideDivider.forEach(item => {
                    item.textContent = item.dataset.text
                })
            }
        })

        sidebar.addEventListener('mouseleave', function () {
            if(this.classList.contains('hide')) {
                allDropdown.forEach(item=> {
                    const a = item.parentElement.querySelector('a:first-child');
                    a.classList.remove('active');
                    item.classList.remove('show');
                })
                allSideDivider.forEach(item=> {
                    item.textContent = '-'
                })
            }
        })

        sidebar.addEventListener('mouseenter', function () {
            if(this.classList.contains('hide')) {
                allDropdown.forEach(item=> {
                    const a = item.parentElement.querySelector('a:first-child');
                    a.classList.remove('active');
                    item.classList.remove('show');
                })
                allSideDivider.forEach(item=> {
                    item.textContent = item.dataset.text;
                })
            }
        })
    }
}