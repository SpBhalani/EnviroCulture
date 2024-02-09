import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';


export  async function POST(req:NextRequest, res:NextResponse)  {
  if (req.method === 'POST') {
    // Destructure email data from request body
    const reader = req.body && req.body.getReader();
    let rawData = '';

    // Read the stream
    while (true) {
      const temp = await reader?.read();
      if (temp?.done) {
        break;
      }
      // Assuming the stream chunks are text. For binary data, you'd handle this differently.
      rawData += new TextDecoder().decode(temp?.value);
    }
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport(
      {
      host: "smtp.gmail.com",
        auth: {
          user: "smitb629@gmail.com", // Your Gmail address
          pass: process.env.PASSWORD?.replaceAll("-" , " ")
        },
      }
      );
      // Send email using the transporter object
      let mailOptions = {
        from: 'smitb629@gmail.com', // Sender address
        // to: ['sbhalani132@gmail.com'], // List of receivers
        to: ['info.enviroculture@gmail.com','lab.enviroculture@gmail.com'], // List of receivers
        subject: 'New Contact Form Submission on Enviroculture', // Subject line
        html: JSON.parse(rawData).text, // Plain text body
      };
      try{
        const res = await transporter.sendMail(mailOptions)
        return  new NextResponse(`Success`,{status: 200})
      }
      catch(e){
          return new NextResponse(`Error sending email: ${e}`,{status: 400}) 

      }

  } else {
    // Only POST method is accepted
    return new NextResponse(`Method ${req.method} Not Allowed`, {status: 405})
  }
};
