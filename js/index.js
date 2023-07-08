const items = document.querySelectorAll('.item');


items.forEach(item => {
    item.addEventListener('click', () => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    });
});
function sendWhatsAppMessage(event) {
    event.preventDefault();

    // Get the selected items from the form
    const form = event.target;

    const payasaItems = Array.from(form.elements["payasa[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const sweetItems = Array.from(form.elements["sweets[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const palyaItems = Array.from(form.elements["palya[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const kosambariItems = Array.from(form.elements["kosambari[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const startersItems = Array.from(form.elements["starters[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const rotiItems = Array.from(form.elements["roti[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const curryItems = Array.from(form.elements["curry[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const riceItems = Array.from(form.elements["riceitems[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const rasamItems = Array.from(form.elements["rasam[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const paanItems = Array.from(form.elements["paan[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const dessertItems = Array.from(form.elements["dessert[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const addonsItems = Array.from(form.elements["addons[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    // Prepare the message body
    const message = "Selected Items :" + "\n\nPayasa:\n" + payasaItems + "\n\nSweets:\n" + sweetItems + "\n\nPalya:\n" + palyaItems + "\n\nKosambari:\n" + kosambariItems + "\n\nStarters:\n" + startersItems + "\n\nRoti:\n" + rotiItems + "\n\nCurry:\n" + curryItems + "\n\nRice Items:\n" + riceItems + "\n\nRasam:\n" + rasamItems + "\n\nPaan:\n" + paanItems + "\n\nDessert:\n" + dessertItems + "\n\nAddons:\n" + addonsItems + "\n";

    // Open the WhatsApp API link
    const whatsappNumber = "+919964381449";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}