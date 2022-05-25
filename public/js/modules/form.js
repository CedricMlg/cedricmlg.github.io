class Form {
  constructor(prenom, nom, email, anniversaire, participations) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.date = anniversaire;
    this.participe = participations;
    this.formData = document.querySelectorAll("div.formData");
    this.formPrenom = document.getElementById("formFirst");
    this.alertPrenom = document.getElementById("formFAlert");
    this.formNom = document.getElementById("formLast");
    this.alertNom = document.getElementById("formLAlert");
    this.formMail = document.getElementById("formEmail");
    this.alertEmail = document.getElementById("formEAlert");
    this.formDate = document.getElementById("formBirthdate");
    this.alertAnniversaire = document.getElementById("formBAlert");
    this.formParticipe = document.getElementById("formQuantity");
    this.alertParticipation = document.getElementById("formQAlert");
    this.formRadio = document.getElementById("formRadio");
    this.alertRadio = document.getElementById("formRAlert");
    this.formCheck = document.getElementById("formCheck");
    this.formCheckbox1 = document.getElementById("checkbox1");
    this.alertCheck = document.getElementById("formCAlert");
  }

  async checkData(envoi) {
    envoi.preventDefault();
    await this.checkPrenom();
    await this.checkNom();
    await this.checkEmail();
    await this.checkDate();
    await this.checkParticipation();
    await this.checkRadio();
    await this.checkConditions();
  }

  async checkPrenom() {
    let condition = this.prenom.length > 2;
    let alert =  this.alertPrenom;
    let input = this.formPrenom;
    let textError =
      "Veuillez renseigner un prenom de plus de deux caractères.";

    this.controlInput(condition, alert, input, textError);
  }

  async checkNom() {
    let condition = this.nom.length > 2;
    let alert = this.alertNom;
    let input = this.formNom;
    let textError =
      "Veuillez renseigner un nom de plus de deux caractères.";

    this.controlInput(condition, alert, input, textError);
  }

  async checkEmail() {
    const mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let condition = this.email != "" && mailReg.test(this.email);
    let alert = this.alertEmail;
    let input = this.formMail;
    let textError =
      "Veuillez renseigner une adresse email valide.";

    this.controlInput(condition, alert, input, textError);
  }

  async checkDate() {
    let condition = this.date != ""
    let alert = this.alertAnniversaire;
    let input = this.formDate;
    let textError =
      "Veuillez renseigner votre date de naissance.";

    this.controlInput(condition, alert, input, textError);
  }

  async checkParticipation() {
    let condition =
      this.participe != "" && this.participe > 0 && this.participe < 99;
    let alert = this.alertParticipation;
    let input = this.formParticipe;
    let textError =
      "Veuillez renseigner un nombre de participations entre 0 et 99.";

    this.controlInput(condition, alert, input, textError);
  }

  async checkRadio() {
    let radioName = document.querySelector("[name='location']:checked");
    let condition = radioName != null;
    let alert = this.alertRadio;
    let input = this.formRadio;
    let textError =
      "Veuillez selectionner le tournois auquel vous souhaitez participer.";

    this.controlInput(condition, alert, input, textError);
  }

  async checkConditions() {
    let condition = this.formCheckbox1.checked;
    let alert = this.alertCheck;
    let input = this.formCheck;
    let textError =
      "Veuillez accepter les conditions d'utilisation avant de vous inscrire.";

    this.controlInput(condition, alert, input, textError);
  }

  // That's a template that gets the parameters stored in the variables of each "check(x)" method to build, check the conditions and then do something
  controlInput(condition, alert, input, txtError) {
    if (condition == false) {
      alert.innerHTML = txtError;
      input.setAttribute("data-error-visible", "true");
    } else {
      input.setAttribute("data-error-visible", "false");
      alert.innerHTML = "";
    }
  }

  checkValid(envoiValid) {
    // Get every data error with the "false" value
    const isValid = (input) =>
      input.getAttribute("data-error-visible") === "false";

    let inputArray = Array.from(this.formData);

    let formValid = inputArray.every(isValid);

    if (!formValid) {
      return false;
    } else {
      alert("Votre inscription à bien été validée !");
    }
  }
}

export { Form };
