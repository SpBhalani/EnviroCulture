const nodemailer = require('nodemailer')
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
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'smitb629@gmail.com', // Your Gmail address
          clientId: process.env.CLIENTID,
          clientSecret: process.env.CLIENTSECRET,
          refreshToken: process.env.REFRESHTOKEN,
          accessToken: process.env.ACCESSTOKEN,
        },
      });

      // Send email using the transporter object
      let mailOptions = {
        from: '"Website Contact Form" enviroculture.in', // Sender address
        to: ['info.enviroculture@gmail.com','lab.enviroculture@gmail.com'], // List of receivers
        subject: 'New Contact Form Submission on Enviroculture', // Subject line
        // text: text, // Plain text body
        html: JSON.parse(rawData).text, // Plain text body
        // html: text, // HTML body
      };
    
      transporter.sendMail(mailOptions, (error:any, info:any) => {
        if (error) {
            return new NextResponse(`Error sending email: ${error}`,{status: 400}) 
            
        } else {
            return  new NextResponse(`Success`,{status: 200})
        }
    });
    return new NextResponse("Success")
  } else {
    // Only POST method is accepted
    return new NextResponse(`Method ${req.method} Not Allowed`, {status: 405})
  }
};
