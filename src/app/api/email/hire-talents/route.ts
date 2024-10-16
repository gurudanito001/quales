import { NextResponse } from "next/server";
/* var req = require('request'); */

export async function POST(request: Request) {
  const data = await request.json();
  

  const emailTemplate = `<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1">
	<title>Hotel Reservation</title>
</head>

<body
	style="background-color:#F5F6F8;font-family:-apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen, ubuntu, cantarell, 'fira sans', 'droid sans', 'helvetica neue', Arial, sans-serif;box-sizing:border-box;font-size:16px;">
	<div style="background-color:#fff;box-sizing:border-box;font-size:16px;">
		<h1 style="padding:40px;box-sizing:border-box;font-size:24px;color:#ffffff;background-color:#2B586B;margin:0;">
			Request to Hire Talents</h1>
		<p style="padding:40px 40px 20px 40px;margin:0;box-sizing:border-box;font-size:16px;">A company has just requested to hire the following talents <b>
				<?=$departure?>
			</b>.</p>
		<h2 style="padding:20px 40px;margin:0;color:#394453;box-sizing:border-box;">Hire Talent Request Details</h2>
		<div style="box-sizing:border-box;padding:0 40px 20px;">
			<table style="border-collapse:collapse;width:100%;">
				<tbody>
					<tr>
						<td style="padding:15px 0;">Company Name:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;">
							${data?.companyName}
						</td>
					</tr>

					<tr style="border-bottom: 1px solid #2B586B; margin-top: 10px;">
						<td style="padding:15px 0;">Company Email:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;">
							${data?.email}
						</td>
					</tr>
					${data?.talentsRequired.map( (item: any) =>{
            return `
                <tr>
                <td style="padding:15px 0;">Talent Category:</td>
                <td style="text-align: right; color: #2B586B; font-weight: 800;">
                  ${item?.category}
                </td>
              </tr>

              <tr>
                <td style="padding:15px 0;">Preferred Skills:</td>
                <td style="text-align: right; color: #2B586B; font-weight: 800;">
                  ${item?.skills.map( (skill: string)=>{
                    return `
                     <span style="display: inline-block; border: 1px solid #2B586B; padding: 5px; border-radius: 5px; margin: 5px;">${skill}</span>
                    `
                  })}
                </td>
              </tr>

              <tr>
                <td style="padding:15px 0;">Number of Talents:</td>
                <td style="text-align: right; color: #2B586B; font-weight: 800;">
                  ${item?.number}
                </td>
              </tr> 
            `
          })}
					

					<tr style="border-top: 1px solid #2B586B; margin-top: 10px;">
						<td style="padding:15px 0;">Duration of Contract:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;">
							${data?.durationOfContract}
						</td>
					</tr>

					<tr>
						<td style="padding:15px 0;">Resumption Window:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;">
							${data?.resumptionWindow}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</body>

</html>`
  
  
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  /* myHeaders.append("Content-Type", "multipart/form-data"); */
  myHeaders.append("x-api-key", "HzHtpZDCOLbfWYnRpIA0TO1gYgkl4ITqLpSSSPhCwdcAwcvnQoeTWDbGUQgO5FPHgFE=");

  const formdata = new FormData();
  formdata.append("body", emailTemplate);
  formdata.append("subject", "Request to Hire Talents");
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