function TestarAPIAdopet() {
  // Defina o token de autorização
  const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNTU4YjlhYi1lOTlkLTQ1NTktYjZlMS0yOTlmNGFhMDZjZjMiLCJhZG9wdGVyTmFtZSI6IkdpdEh1YlJvZHJpZ28iLCJpYXQiOjE3NDIzNDY0NzMsImV4cCI6MTc0MjYwNTY3M30.cC-iS9HbANZMLeNDRQWnfMk_pdPqcwBezMTJOmqIEvQ";

  // URL da API para a requisição
  const apiUrl = "https://adopet-api-i8qu.onrender.com/mensagem/ef312014-f901-4880-9dfc-21e9ccb4df47";


  var req = Sys.OleObject("MSXML2.XMLHTTP");

  try {
    req.Open("GET", apiUrl, false);
    req.setRequestHeader("Authorization", authorization); 
    req.setRequestHeader("Content-Type", "application/json");  

    // Enviar a requisição
    req.Send();

    // Verificar se o status da resposta é 200 (OK)
    if (req.Status == 200) {
      Log.Message("Status: " + req.Status);
      Log.Message("Resposta da API: " + req.responseText);

      // Verificar se o corpo da resposta não está vazio
      if (req.responseText !== "") {
        Log.Message("O corpo da resposta não está vazio.");

        try {
          var responseBody = JSON.parse(req.responseText); 

          // Verificar se a resposta contém a propriedade 'msg'
          if (responseBody.hasOwnProperty('msg')) {
            Log.Message("A resposta contém a propriedade 'msg'.");
          } else {
            Log.Error("A resposta não contém a propriedade 'msg'.");
          }
        } catch (e) {
          Log.Error("Erro ao tentar parsear a resposta JSON: " + e.message);
        }
      } else {
        Log.Error("O corpo da resposta está vazio.");
      }
    } else {
      Log.Error("Falha na requisição. Status: " + req.Status + " - " + req.statusText);
    }
  } catch (e) {
    Log.Error("Erro ao enviar a requisição: " + e.message);
  }
}
