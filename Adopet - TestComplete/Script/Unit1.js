﻿function Test1()
{
  Browsers.Item(btChrome).Navigate("https://mail.google.com/chat/u/0/#chat/space/AAAAEP8UHG8");
  let browser = Aliases.browser;
  browser.BrowserWindow2.Maximize();
  let frame = browser.pageImplantaOFiscalContabilIChat.frameSingleFullScreen;
  frame.Click();
  let chrome_RenderWidgetHostHWND = browser.BrowserWindow.Chrome_RenderWidgetHostHWND;
  chrome_RenderWidgetHostHWND.Click();
  browser.ToUrl("https://adopet-frontend-cypress.vercel.app/login");
  let page = browser.pageAdopet;
  page.Keys("[Caps]G");
  frame.Keys("G");
  page.Keys("[Caps]i");
  frame.Keys("i");
  page.Keys("t");
  frame.Keys("t");
  page.Keys("[Caps]H");
  frame.Keys("H");
  page.Keys("[Caps]u");
  frame.Keys("u");
  page.Keys("b");
  frame.Keys("b[Caps]R");
  page.Keys("R");
  frame.Keys("[Caps]o");
  page.Keys("o");
  frame.Keys("d");
  page.Keys("d");
  frame.Keys("r");
  page.Keys("r");
  frame.Keys("i");
  page.Keys("i");
  frame.Keys("g");
  page.Keys("g");
  frame.Keys("o");
  page.Keys("o");
  frame.Keys("@");
  page.Keys("@h");
  frame.Keys("h");
  page.Keys("o");
  frame.Keys("o");
  page.Keys("t");
  frame.Keys("t");
  page.Keys("m");
  frame.Keys("m");
  page.Keys("a");
  frame.Keys("a");
  page.Keys("i");
  frame.Keys("i");
  page.Keys("l");
  frame.Keys("l");
  page.Keys(".");
  frame.Keys(".");
  page.Keys("c");
  frame.Keys("c");
  page.Keys("o");
  frame.Keys("o");
  page.Keys("m");
  frame.Keys("m");
  page.Keys("[Tab]");
  frame.Keys("[Tab]");
  page.Keys("@");
  frame.Keys("@");
  page.Keys("[Caps]S");
  frame.Keys("S");
  page.Keys("[Caps]e");
  frame.Keys("e");
  page.Keys("n");
  frame.Keys("n");
  page.Keys("h");
  frame.Keys("h");
  page.Keys("a");
  frame.Keys("a");
  page.Keys("1");
  frame.Keys("1");
  page.Keys("2");
  frame.Keys("2");
  page.Keys("3");
  frame.Keys("3");
  page.Keys("4");
  frame.Keys("4");
  page.Keys("5");
  frame.Keys("5");
  frame.Click();
}

function Test2()
{
  
}

function Test3()
{
  Browsers.Item(btChrome).Navigate("https://mail.google.com/chat/u/0/#chat/space/AAAAEP8UHG8");
  let browser = Aliases.browser;
  browser.BrowserWindow2.Maximize();
  let frame = browser.pageImplantaOFiscalContabilIChat.frameSingleFullScreen;
  frame.Click();
  browser.ToUrl("https://adopet-frontend-cypress.vercel.app/");
  browser.pageAdopet2.sectionBoasVindas.linkFazerLogin.Click();
  let page = browser.pageAdopet;
  page.Wait();
  frame.Click();
  let emailInput = page.sectionJTemContaFaASeuLogin;
  let emailInput2 = emailInput.emailinputEMail;
  emailInput2.Click();
  OCR.Recognize(browser.wndChrome_WidgetWin_1).BlockByText("GitHubRodrigo@hotmail.com").Click();
  emailInput2.Keys("GitHubRodrigo@hotmail.com");
  frame.Click();
  let passwordBox = emailInput.passwordboxSenha;
  passwordBox.Click();
  passwordBox.SetText(Project.Variables.Password1);
  frame.SetText(Project.Variables.Password2);
  emailInput.buttonEntrar.ClickButton();
  frame.ClickButton();
}