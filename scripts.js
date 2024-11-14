document.addEventListener("DOMContentLoaded", function() {
    // 仮の訪問者カウンターをランダムに表示
    const visitorCountElement = document.getElementById("visitorCount");
    const randomCount = Math.floor(Math.random() * 10000) + 1;
    visitorCountElement.textContent = randomCount.toString().padStart(6, '0');

    // クリック時にポップアップを表示する
    const menuItems = document.querySelectorAll('#sidebar ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトの動作を防ぐ
            alert("このリンクはまだ準備中です。");
        });
    });
});
