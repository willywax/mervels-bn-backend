import dotenv from 'dotenv';

dotenv.config();

/**
 * @class Emails
 */
class ResetPasswordEmail {
  /**
   * Generates reset password email template
   * @param {string} url reset password link
   * @param {Object} user user details
   * @returns {String} reset password email template
   */
  static resetPasswordTemplate(url, user) {
    const html = `
      <body style="margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="900px" style="padding: 0 40px 0 40px; background-color:#f1f2f3;">
          <tr><td align="center" style="background-color:#f9fcff; margin: 0 50px 0 50px;">
                <a><img src="http://drive.google.com/uc?export=view&id=1Rraew69PkllzCnb5wIBJsw61xPk83sA-" alt="Bare Foot Nomad"
                width="120" height="100" style="display: block;></a></td></tr><tr>
           <td align="center" style="padding: 0 50px 0 50px;">
             <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#ffffff; padding: 0 0 0 20px;">
              <tr><td align="center" style="font-family: Arial, sans-serif; font-size: 24px; color: #050505;">
                  <p>Hi ${user},</p></td></tr><tr>
                <td align="center" style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  <p>We have recieved a request to change the password of your Bare foot Nomad account</p>
                </td></tr><tr><td align="center">
                  <a style="width:250px; display:inline-block; text-decoration: none; font-size: 15px;text-align: center;
                  background-color:#55acee;border-radius:2px;color:white;height:32px; cursor: pointer; padding-top:5px"
                  href=${url}>Reset Password</a></td></tr><tr>
                <td align="center" style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  <p>this link will expire after 24 hours.</p>
                  <p>contact <a href=#>Support@barefoot</a> if you didnt intiate this request</p>
                  <p>Thank you for using Bare Foot Nomad</p></td></tr></table></td></tr><tr>
            <td align="center" style="padding: 30px 30px 30px 30px;">&reg; BARE FOOT NOMAD, 2019<br/></td></tr></table></body>`;
    return { html };
  }
}
export default ResetPasswordEmail;
