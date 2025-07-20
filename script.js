function showNavigator() {
    const info = `
        appName: ${navigator.appName}
        product: ${navigator.product}
        appVersion: ${navigator.appVersion}
        userAgent: ${navigator.userAgent}
        platform: ${navigator.platform}
        language: ${navigator.language}
    `;
    displayInfo(info);
}

function showWindow() {
    const info = `Window Size: ${window.innerWidth}x${window.innerHeight}`;
    displayInfo(info);
}

function showScreen() {
    const info = `
        Screen Width: ${screen.width}, Height: ${screen.height}
        Available Width: ${screen.availWidth}, Height: ${screen.availHeight}
        Color Depth: ${screen.colorDepth}, Pixel Depth: ${screen.pixelDepth}
    `;
    displayInfo(info);
}

function showLocation() {
    const info = `
        href: ${location.href}
        hostname: ${location.hostname}
        pathname: ${location.pathname}
        protocol: ${location.protocol}
    `;
    displayInfo(info);
}

function displayInfo(info) {
    document.getElementById('infoOutput').textContent = info;
}

function validatePassword() {
    const pwd = document.getElementById('passwordInput').value;
    const feedback = document.getElementById('passwordFeedback');

    const valid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(pwd);
    feedback.textContent = valid ? "Valid password" : "Invalid password";
    feedback.style.color = valid ? "green" : "red";
}
