//Mensagem do LOG 
Log.Message("Redirecionamento ao catálogo de animais");


//Função Test1 é responsável por entrar no site, fazer login e senha
function Test1()
{
  Browsers.Item(btEdge).Navigate("https://adopet-frontend-cypress.vercel.app/login");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let emailInput = browser.pageAdopet.sectionJTemContaFaASeuLogin;
  let emailInput2 = emailInput.DigitarEmail;
  emailInput2.SetText("GitHubRodrigo@hotmail.com");
  emailInput.DigitarSenha.SetText(Project.Variables.Password2);
  emailInput.BotaoEntrar.ClickButton();
}

//Função Test2 é responsável por verificar se o redirecionamento deu certo
function Test2()
{
  Browsers.Item(btEdge).Navigate("https://adopet-frontend-cypress.vercel.app/home");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageAdopet3.sectionOl.Click();
}
