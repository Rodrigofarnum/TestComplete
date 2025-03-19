function Test1()
{
  Browsers.Item(btEdge).Navigate("https://adopet-frontend-cypress.vercel.app/login");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageAdopet.sectionJTemContaFaASeuLogin;
  emailInput.DigitarEmail.Click();
  emailInput.DigitarSenha.Click();
  emailInput.Click();
}

function Test2()
{

}

function TestEmailValidation() {
  var emailField = Aliases.browser.pageYourPageName.FindChild("id", "email", 10); // Altere o 'id' conforme necessário
  emailField.SetText("emailinvalido");

  // Submeter o formulário
  var submitButton = Aliases.browser.pageYourPageName.FindChild("id", "submit", 10); // Altere o 'id' conforme necessário
  submitButton.Click();

  // Esperar a mensagem de erro
  var errorMessage = Aliases.browser.pageYourPageName.FindChild("class", "error", 10); // Verifica o elemento com a classe 'error'
  if (errorMessage.Exists) {
    Log.Message("Mensagem de erro encontrada: " + errorMessage.textContent);
  } else {
    Log.Error("Mensagem de erro não encontrada!");
  }
}
