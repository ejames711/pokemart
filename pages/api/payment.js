import { mailOptions,transporter } from "../../config/nodemailer"

// const PAYMENT_MESSAGE_FIELDS = {
//     name: "Name",
//     email: "Email",
//     address: "Address"
//   };


// const generateEmailContent = (data) => {
//     const stringData = Object.entries(data).reduce(
//       (str, [{formKey, formValue},cart]) =>
//         (str += `${CONTACT_MESSAGE_FIELDS[formKey]}: \n${formValue} \n \n`),
//       ""
//     );
//     const htmlData = Object.entries(data).reduce((str, [{formKey, formValue},cart]) => {
//       return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[formKey]}</h3><p class="form-answer" align="left">${formValue}</p>`);
//     }, "");
// }

const handler = async (req,res) => {
    if (req.method === "POST") {
        const data = req.body
        console.log(data)
        if ( !data.formValues.name || !data.formValues.email || !data.formValues.address || !data.currentCart) {
            return res.status(400).json({message: "Invalid Request"})
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                to: data.formValues.email,
                text: "This is a test",
                html: "<h1>Test Title</h1><p>Body text</p>",
                subject: 'Receipt from Pokemart',
            })

            return res.status(200).json({success: true})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Invalid Request"})
        }
    }
    
    return res.status(400).json({message: "Invalid Request"})
}

export default handler