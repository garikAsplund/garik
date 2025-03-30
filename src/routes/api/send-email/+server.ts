import nodemailer from 'nodemailer';

export async function POST({ request }) {
	const formData = await request.json();
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: import.meta.env.VITE_EMAIL_USER,
			pass: import.meta.env.VITE_EMAIL_PASSWORD
		}
	});

	const { name, email, phone, inquiry } = formData.data;

	// Email to me
	const businessMailOptions = {
		from: 'garik.asplund@gmail.com',
		to: 'garik.asplund@gmail.com',
		subject: 'New Garik Codes Inquiry',
		html: `
            <h2>Here are the details:</h2>
            <div style="background-color: #f9f9f9; padding: 1rem; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Additional Comments:</strong> ${inquiry}</p>
            </div>
        `
	};

	// Email to the customer
	const customerMailOptions = {
		from: 'garik.asplund@gmail.com',
		to: email, // email
		subject: 'Your Garik Codes Inquiry',
		html: `
            <h2>Thanks for your interest in working with me, ${name.split(' ')[0]}!</h2>
            <p>I've received your message and will get back to you shortly :)</p>
            <p>Garik</p>
        `
	};

	try {
		await transporter.sendMail(businessMailOptions);
		await transporter.sendMail(customerMailOptions);
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
	}
}
