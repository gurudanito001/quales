import { NextResponse } from "next/server";
/* var req = require('request'); */

export async function POST(request: Request) {
  const data = await request.json();
  

  const emailTemplate = `
  <!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1">
	<title>Complete Enrollment: Registration for a Cohort</title>
</head>

<body
	style="background-color:#F5F6F8;font-family:-apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen, ubuntu, cantarell, 'fira sans', 'droid sans', 'helvetica neue', Arial, sans-serif;box-sizing:border-box;font-size:16px;">
	<div style="background-color:#fff;box-sizing:border-box;font-size:16px;">
		<h1 style="padding:40px;box-sizing:border-box;font-size:24px;color:#ffffff;background-color:#2B586B;margin:0;">
			Complete Enrollment: Registration for a Cohort</h1>
		<p style="padding:40px 40px 20px 40px;margin:0;box-sizing:border-box;font-size:16px;">A user has just filled the complete enrollment form for Register for a cohort<b>
				<?=$departure?>
			</b>.</p>
		<h2 style="padding:20px 40px;margin:0;color:#394453;box-sizing:border-box;">Registration Details</h2>
		<div style="box-sizing:border-box;padding:0 40px 20px;">
			<table style="border-collapse:collapse;width:100%;">
				<tbody>
					<tr>
						<td style="padding:15px 0;">Email:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;"> ${data?.email} </td>
					</tr>
					<tr>
						<td style="padding:15px 0;">Program Type:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;"> ${data?.programType} </td>
					</tr>
					<tr>
						<td style="padding:15px 0;">Plan:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;"> ${data?.plan} </td>
					</tr>
					<tr>
						<td style="padding:15px 0;">Cohort:</td>
						<td style="text-align: right; color: #2B586B; font-weight: 800;"> ${data?.cohort} </td>
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
  let x_api_key = process?.env?.x_api_key
  if(!x_api_key){
    return new NextResponse(JSON.stringify({ message: "x_api_key is required", data: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  myHeaders.append("x-api-key", x_api_key);

  const formdata = new FormData();
  formdata.append("body", emailTemplate);
  formdata.append("subject", "Complete Enrollment: Registration for a Cohort");
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