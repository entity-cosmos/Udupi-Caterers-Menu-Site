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

    const palyaItems = Array.from(form.elements["palya[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    const otherItems = Array.from(form.elements["item[]"])
        .filter(item => item.checked)
        .map(item => item.value);

    // Prepare the message body
    const message = "Payasa:\n" + payasaItems + "\nPalya:\n" + palyaItems + "\nOther Items:\n" + otherItems.join("\n");

    // Open the WhatsApp API link
    const whatsappNumber = "+919964381449";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}