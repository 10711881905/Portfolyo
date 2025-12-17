document.addEventListener('DOMContentLoaded', () => {
            // Elementleri Seçme
            const menuIcon = document.querySelector('#menu-icon');
            const navbar = document.querySelector('.navbar');
            const themeIcon = document.querySelector('#theme-icon');
            const body = document.body;

            // MENÜ İŞLEMLERİ
            if (menuIcon && navbar) {
                menuIcon.onclick = () => {
                    menuIcon.classList.toggle('fa-xmark');
                    navbar.classList.toggle('active');
                };

                window.onscroll = () => {
                    menuIcon.classList.remove('fa-xmark');
                    navbar.classList.remove('active');
                };
            }

            // TEMA (DARK/LIGHT MODE)
            
            // Sayfa yüklendiğinde kayıtlı tema var mı ona bak ilk önce 
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'light') {
                body.classList.add('light-mode');
                themeIcon.classList.remove('fa-sun'); // Güneşi kaldır
                themeIcon.classList.add('fa-moon');   // Ay ekle
            }

            // Tema İkonuna Tıklama
            if (themeIcon) {
                themeIcon.onclick = () => {
                    
                    body.classList.toggle('light-mode');

                    
                    themeIcon.classList.toggle('fa-sun');
                    themeIcon.classList.toggle('fa-moon');

                    
                    if (body.classList.contains('light-mode')) {
                        localStorage.setItem('theme', 'light');
                    } else {
                        localStorage.setItem('theme', 'dark');
                    }
                };
            }
        });