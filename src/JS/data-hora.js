function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const dateTimeString = now.toLocaleString('pt-BR', options);
    document.getElementById('date-time').innerText = ` ${dateTimeString}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
