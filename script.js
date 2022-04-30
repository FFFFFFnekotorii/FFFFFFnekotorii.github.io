let url = "https://animesolution.com/category/happy-sugar-life/";

const https = require('https');

let text = "";

https.get(url, (response) => {

  response.on("data", (data) => {
    text += data;
  });

  response.on("end", () => {
    main();
  });

});

function main() {
  let i = 0, n, k; //int
  let tags = [], img = []; //str[]
  let tmp; //str
  n = text.length;
  while(i < n){
    if(text[i] == "<"){
      tmp = "";
      while(text[i] != ">"){
        tmp += text[i];
        i++;
      }
      tmp += text[i];
      tags.push(tmp);
    }
    i++;
  }
  k = tags.length;
  for(i = 0; i < k; i++){
    if(tags[i].length < 5){
      continue;
    }
    if(tags[i].substring(1, 4) == "img"){
      img.push(tags[i]);
    }
  }
  alert(img);
}
