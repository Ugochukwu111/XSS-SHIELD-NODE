

const sendInputValue = async () =>{
  const value = document.getElementById('text').value;
  console.log('sending', value);
  try{
    const res = await fetch('/api/upload/',{
      method:'POST',
      headers : {'Content-Type' : 'application/json',},
      body: JSON.stringify({data: value}),
    });
    if(!res.ok){
      throw new Error(`response status : ${res.status}`);
    }
    const result = await res.json();
    console.log(result);
  }catch(err){
    console.log(`error sending data ${err}`)
  }

}

const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendInputValue);