document.addEventListener("DOMContentLoaded", function() {
    // 訪問者カウンターの表示（外部APIから取得）
    const visitorCountElement = document.getElementById("visitorCount");

    // 仮想のAPI URLを使用（ここを実際のAPIエンドポイントに変更してください）
    const apiURL = "https://example.com/api/visitor-count";

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            visitorCountElement.textContent = data.count.toString().padStart(6, '0');
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            visitorCountElement.textContent = "取得エラー";
        });

    // クリック時にポップアップを表示する
    const menuItems = document.querySelectorAll('#sidebar ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトの動作を防ぐ
            alert("このリンクはまだ準備中です。");
        });
    });
});
