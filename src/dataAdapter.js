const API_URL='https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08';
const FORM_API_URL='https://webhook.site/3c0eab42-2c3d-4435-ac8c-9ea32f1f1b5d';
export async function  GetDataFromAPI(){
    const itemsResult = await fetch(API_URL);
    const jsonResult = await itemsResult.json();
   return jsonResult;
}
export async function SendFormData(payload){
    console.log(payload);
    const response = await fetch(FORM_API_URL,{
    method: 'POST', 
    mode: 'no-cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
     
    },
    body: JSON.stringify(payload)
  });
  return  await response.text();
}