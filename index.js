const toggle = document.querySelector('.toggle');
        const banner = document.querySelector('.banner');
        toggle.onclick = function(){
            toggle.classList.toggle('active');
            banner.classList.toggle('active');
        }
        document.addEventListener("mousemove", parallax);
        function parallax(e){
            document.querySelectorAll('.elements').forEach(layer =>{
                const speed = layer.getAttribute('data-speed');
                const x = (window.innerHeight - e.pageY*speed)/100;
                const y = (window.innerWidth - e.pageX*speed)/100;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            })
        }