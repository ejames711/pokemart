import { mailOptions,transporter } from "../../config/nodemailer"

const handler = async (req,res) => {
    if (req.method === "POST") {
        const data = req.body
        console.log(data)
        if ( !data.name || !data.email || !data.address ) {
            return res.status(400).json({message: "Bad Request"})
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                to: req.body.email,
                text: "This is a test",
                html: "<h1>Test Title</h1><p>Body text</p>",
                subject: "Receipt from Pokemart",
            })

            return res.status(200).json({success: true})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: e.message})
        }
    }
    
    return res.status(400).json({message: "Bad Request"})
}

export default handler