function Test1()
{
  Browsers.Item(btEdge).Navigate("https://adopet-frontend-cypress.vercel.app/cadastro");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let section = browser.pageAdopet4.sectionAindaNOTemCadastro;
  let textbox = section.textboxNome;
  textbox.SetText("Rodrigo Barbulha");
  let emailInput = section.emailinputEMail;
  emailInput.SetText("barbulha@hotmail.com");
  let passwordBox = section.passwordboxSenha;
  passwordBox.SetText(Project.Variables.Password2);
  passwordBox.Keys("[Tab]");
  section.passwordboxConfirmeSuaSenha.SetText(Project.Variables.Password2);
  section.buttonCadastrar.ClickButton();
  let page = browser.pageAdopet;
  page.Wait();
  emailInput = page.sectionJTemContaFaASeuLogin;
  let emailInput2 = emailInput.DigitarEmail;
  emailInput2.Click();
  emailInput2.SetText("barbulha@hotmail.com");
  emailInput2.Keys("[Tab]");
  emailInput.DigitarSenha.SetText(Project.Variables.Password2);
  emailInput.BotaoEntrar.ClickButton();
  page = browser.pageAdopet3;
  page.Wait();
  section = page.sectionOl;

}