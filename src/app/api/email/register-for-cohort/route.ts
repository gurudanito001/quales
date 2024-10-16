import { NextResponse } from "next/server";
/* var req = require('request'); */

export async function POST(request: Request) {
  const data = await request.json();
  

  const emailTemplate = `<!DOCTYPE html><html><head>	<meta charset="utf-8">	<meta name="viewport" content="width=device-width,minimum-scale=1">	<title>Hotel Reservation</title></head><body	style="background-color:#F5F6F8;font-family:-apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen, ubuntu, cantarell, 'fira sans', 'droid sans', 'helvetica neue', Arial, sans-serif;box-sizing:border-box;font-size:16px;">	<div style="background-color:#fff;box-sizing:border-box;font-size:16px;">		<h1 style="padding:40px;box-sizing:border-box;font-size:24px;color:#ffffff;background-color:#2B586B;margin:0;">			Registration for a Cohort</h1>		<p style="padding:40px 40px 20px 40px;margin:0;box-sizing:border-box;font-size:16px;">A user has just registered for			a cohort <b>				<?=$departure?>			</b>.</p>		<h2 style="padding:20px 40px;margin:0;color:#394453;box-sizing:border-box;">Registration Details</h2>		<div style="box-sizing:border-box;padding:0 40px 20px;">			<table style="border-collapse:collapse;width:100%;">				<tbody>					<tr>						<td style="padding:15px 0;">Firstname:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.firstname}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Lastname:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.lastname}						</td>					</tr>										<tr>						<td style="padding:15px 0;">Email:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.email}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Phone:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.phone}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Gender:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.gender}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Course:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.course}						</td>					</tr>					<tr>						<td style="padding:15px 0;">University:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.university}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Program Type:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.programType}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Plan:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.plan}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Cohort:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.cohort}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Currently Working:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.currentlyWorking}						</td>					</tr>					<tr>						<td style="padding:15px 0;">How do you intend to pay:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.howDoYouIntendToPay}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Why Take Course:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.whyTakeCourse}						</td>					</tr>					<tr>						<td style="padding:15px 0;">How did you hear about us:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.howDidYouHearAboutUs}						</td>					</tr>					<tr>						<td style="padding:15px 0;">Referer Name and Phone:</td>						<td style="text-align: right; color: #2B586B; font-weight: 800;">							${data?.refererNameAndPhone}						</td>					</tr>				</tbody>			</table>		</div>	</div></body></html>`
  
  
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  /* myHeaders.append("Content-Type", "multipart/form-data"); */
  myHeaders.append("x-api-key", "HzHtpZDCOLbfWYnRpIA0TO1gYgkl4ITqLpSSSPhCwdcAwcvnQoeTWDbGUQgO5FPHgFE=");

  const formdata = new FormData();
  formdata.append("body", emailTemplate);
  formdata.append("subject", "Registration for a Cohort");
  formdata.append("from", data?.email);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
  };

  return fetch("https://notification.sharebanta.com/api/v1/quales/mail", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return new NextResponse(JSON.stringify({ message: "successful", data: result }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    })
    .catch((error) => {
      return new NextResponse(JSON.stringify({ message: "error", data: error }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });









}