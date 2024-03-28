export default function ContactForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };
        console.log(formData);
        alert("Thank you for your message!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" required />
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    );
}


