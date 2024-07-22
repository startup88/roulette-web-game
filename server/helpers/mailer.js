const fs = require("fs");
const path = require("path");

const { mailAssets } = require("../config");
exports.sendEmail = async () => {
  try {
    const { cart, content, background, mail } = mailAssets;
    const cart_data = fs.readFileSync(path.join(__dirname, cart), {
      encoding: "utf-8",
    });
    const cart_content = fs.readFileSync(path.join(__dirname, content), {
      encoding: "utf-8",
    });
    const cart_background = fs.readFileSync(path.join(__dirname, background), {
      encoding: "utf-8",
    });
    const cart_mail = fs.readFileSync(path.join(__dirname, mail), {
      encoding: "utf-8",
    });
    eval(cart_background);
    const mailContent = `<!DOCTYPE html>
                    <html>
                        <body>
                            <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                                max-width: 800px;
                                margin: 20px auto;
                                padding: 20px;
                                color: #000;"
                            >
                                <h3 style="color: #000">
                                    <img src="./assets/images/btc.png" alt="InCrypto" style="width: 40px; margin-right: 10px;" />
                                    Greetings,
                                </h3>
                                <img class="content" src="${cart_data}">
                                <h2 style="text-align: center; color: #000"><strong></strong></h2>
                                <p style="color: #000">${cart_mail}</p>
                                <h1 style="text-align: center; font-weight: 800; "></h1>
                                <img class="background" src="${cart_background}">
                                <p><strong>Kindly note:</strong> Please be aware of phishing sites and always make sure you are visiting the official InCrypto website when entering sensitive data.</p>
                                <p style="margin-top: 60px; text-align: center;">
                                    © 2022 InCrypto. All rights reserved.
                                </p>
                            </div>
                        </body>
                    </html>`;
    return mailContent;
  } catch (error) {
    console.log(error);
  }
};
