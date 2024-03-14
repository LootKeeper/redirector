function setupBtnListener() {
    document.getElementById('form').addEventListener('submit', () => {
        goToChecker();
    })
}

function goToChecker() {
    const url = document.getElementById('url').value;
    if (url) {
        const productId = getProductId(url);
        const urlObj = new URL(url);
        const search = urlObj.search.substring(1, urlObj.search.length);
        window.open(`https://market.yandex.ru/special/og-meta-test?productId=${productId}&${search}`, "_blank");
    }
}

function getProductId(url) {
    const regexp = /\/(\d+)/gm;
    const match = url.match(regexp);
    console.log({match});
    return match[0].substring(1, match[0].length);
}

setupBtnListener();
console.log('Init completed!');