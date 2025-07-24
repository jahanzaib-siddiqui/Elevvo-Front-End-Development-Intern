document.getElementById('togglebtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const togglebtn = document.getElementById('togglebtn');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('closed');
    content.classList.toggle('sidebar-closed');
    togglebtn.classList.toggle('sidebar-closed'); // Adjusts the button position
});
