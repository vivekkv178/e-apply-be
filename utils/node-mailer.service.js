const nodemailer = require("nodemailer");
const ENV_CONFIG = require("../config/env-config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: ENV_CONFIG.GMAIL_ID,
    pass: ENV_CONFIG.GMAIL_APP_PASS,
  },
});

const sendEmail = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const info = await transporter.sendMail({
        from: `"Vivek KV 🎓" <${ENV_CONFIG.GMAIL_ID}>`, // sender address
        to: ENV_CONFIG.GMAIL_ID, // list of receivers
        subject: "🎯 Job Application - ", // Subject line
        // text: "Hello world?", // plain text body
        html: `<div dir="ltr">
                <span style="color:rgba(0,0,0,0.9);font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">
                    Hi Alex 👋,
                </span>
                <br>
                <br>
                <span style="color:rgba(0,0,0,0.9);font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">
                    I hope this message finds you well! I am excited to express my interest in the&nbsp;
                    <span style="font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">Software Engineer</span>
                    &nbsp;role at your company. With my experience in End-to-End Product Development and a strong background in creating dynamic web applications, I am confident in my ability to contribute effectively to your team.
                </span>
                <br>
                <br>
                <span style="color:rgba(0,0,0,0.9);font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">
                    I have 8 years of total work&nbsp;experience with the following technologies:
                </span>
                <ol>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>AWS</li>
                    <li>TypeScript/Nest.js</li>
                    <li>PostgreSQL/Firebase/MongoDB</li>
                </ol>
                <span style="color:rgba(0,0,0,0.9);font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">
                    You can learn more about my professional experience and projects on my website 🌐: 
                </span>
                <a href="https://vivekkv.vercel.app/" target="_blank">https://vivekkv.vercel.app/</a>
                <br>
                <br>
                <span style="color:rgba(0,0,0,0.9);font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">
                    Are you open to a quick chat to discuss the opportunity? I’d love to learn more about it and share more about my own qualifications. I look forward to hearing from you 🕒.
                </span>
                <br>
                <br>
                <span style="color:rgba(0,0,0,0.9);font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue','Fira Sans',Ubuntu,Oxygen,'Oxygen Sans',Cantarell,'Droid Sans','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Lucida Grande',Helvetica,Arial,sans-serif;font-size:14px">
                    Attaching my CV for your reference.
                </span>
                <br>
                <br>
                <div>
                    <div>Thanks &amp; Regards,</div>
                    <div style="margin-left:10px">
                        <div>Vivek KV</div>
                        <div>💼 Technology Lead</div>
                        <div>📍 Singapore</div>
                        <div>
                            🌐 <a href="https://vivekkv.vercel.app" target="_blank">vivekkv.vercel.app</a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/vivekkv178/" target="_blank">
                                <img src="https://prod.flowcvassets.com/email-signatures/d03ad9f9-d0af-42ff-8444-46d417ac22d6/5/linkedIn.png" alt="LinkedIn" width="26">
                            </a>
                            <a href="https://github.com/vivekkv178" target="_blank">
                                <img src="https://prod.flowcvassets.com/email-signatures/d03ad9f9-d0af-42ff-8444-46d417ac22d6/5/github.png" alt="GitHub" width="26">
                            </a>
                        </div>
                    </div>
                    <br/>
                    <div style="margin-left:10px">
                        <img width="420" height="220" src="https://ci3.googleusercontent.com/mail-sig/AIorK4xfcRegKBDrXWlZJc7egCjCeN4gC0pnyXcsSyorsxBPNcCMMdBjcbfV1fBAZRmaf9BePfZba8NhNj-U" alt="Image">
                    </div>
                </div>
            </div>
            
            `, // html body
        attachments: [
          //   {
          //     filename: "Vivek_KV_CV.pdf",
          //     path: "https://raw.github.com/nodemailer/nodemailer/master/LICENSE",
          //   },
        ],
        headers: {
          priority: "high",
          "x-msmail-priority": "High",
          importance: "high",
        },
      });
      resolve(info);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = sendEmail;
