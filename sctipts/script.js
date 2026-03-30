// Simulate real-time updates for the dashboard
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('toll-count')) {
        setInterval(() => {
            const tollCount = Math.floor(Math.random() * 200);
            document.getElementById('toll-count').textContent = tollCount;
        }, 3000);
    }

    if (document.getElementById('total-scans')) {
        setInterval(() => {
            const totalScans = Math.floor(Math.random() * 10000);
            document.getElementById('total-scans').textContent = totalScans;
        }, 3000);
    }

    if (document.getElementById('alerts-triggered')) {
        setInterval(() => {
            const alertsTriggered = Math.floor(Math.random() * 20);
            document.getElementById('alerts-triggered').textContent = alertsTriggered;
        }, 3000);
    }

    if (document.getElementById('wanted-hits')) {
        setInterval(() => {
            const wantedHits = Math.floor(Math.random() * 5);
            document.getElementById('wanted-hits').textContent = wantedHits;
        }, 3000);
    }
});