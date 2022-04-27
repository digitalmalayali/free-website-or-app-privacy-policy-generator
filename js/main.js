/*  
    Free & Open Source Privacy Policy Generator: A simple web app to generate a 
	generic privacy policy for your Android/iOS apps or websites

    Copyright 2022 Digital Malayali, Nishant Srivastava, Arthur Gareginyan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var app = new Vue({
  el: "#app",
  data: {
    iOrWe: "[I/We]",
	cateType: "",
    typeOfDev: "",
	appOrWebsite: "[website/app]",
	visitOrUsers: "[visitors/users]",
	vOrUser: "[visitor/user]",
	browserOrApp: "[browser/app]",
    appName: "",
	siteURLIn: "",
	siteURL: "[provide the complete URL of your website here]",
    appContact: "",
    myOrOur: "[my/our]",
    meOrUs: "[me/us]",
	areOrAm: "[are/am]",
    devName: "",
    companyName: "",
    devOrCompanyName: "[Developer/Company name]",
    effectiveFromDate: new Date().toISOString().slice(0, 10),
    thirdPartyServices: thirdPartyServicesJsonArray,
    showPrivacyModal: false,
    showGDPRPrivacyModal: false,
    showTermsModal: false,
    showDisclaimerModal: false,
    hasThirdPartyServicesSelected: true,
    contentRenderType: 1,
    wizardStep: 1,
    totalWizardSteps: 3,
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    preview: function (id) {
      this.contentRenderType = 1
    },
    nextStep: function () {
      if (this.wizardStep <= this.totalWizardSteps) {
        if (this.wizardStep == 1) {
          if (this.appName.length == 0 || this.appName == "" || this.appName == null || this.appName == "Please provide the name of App or Website!") {
            this.appName = "Please provide the name of App or Website!"
            return
          }

          if (this.appContact.length == 0 || this.appContact == "" || this.appContact == null || this.appContact == "Please provide contact info!") {
            this.appContact = "Please provide contact info!"
            return
          }
        }

        this.wizardStep += 1
      }
    },
    prevStep: function () {
      if (this.wizardStep >= 1) {
        this.wizardStep -= 1
      }
    },
    checkForThirdPartyServicesEnabled: function () {
      let listOfEnabledThirdPartyServices = []
      this.thirdPartyServices.forEach((item) => {
        if (item[item.model] == true) {
          listOfEnabledThirdPartyServices.push(true)
        }
      })

      return listOfEnabledThirdPartyServices.length > 0
    },
    toggleState: function (item) {
      let state = item.model

      // console.log('Item:', item.name, item.model, item[state])
      // For reactive update of the json
      // Toggle the state
      Vue.set(thirdPartyServicesJsonArray, item.model, !item[state])
    },
    getHtml: function (id, target) {
      let content = getContent(id)
      let title = getTitle(id)
      let rawHTML = getRawHTML(content, title)
      this.contentRenderType = 2
      loadInTextView(target, rawHTML)
    },
    getMarkdown: function (id, target) {
      let content = getContent(id)
      let title = getTitle(id)
      let rawHTML = getRawHTML(content, title)
      let markdown = convertHtmlToMd(rawHTML)
      this.contentRenderType = 2
      loadInTextView(target, markdown)
    },
    generate: function () {
		if (this.cateType === "App") {
        this.appOrWebsite = "app"
        this.visitOrUsers = "users"
		this.browserOrApp = "app"
		this.vOrUser = "user"
      } else if (this.cateType === "Website") {
        this.appOrWebsite = "website"
        this.visitOrUsers = "visitors"
		this.browserOrApp = "browser"
		this.vOrUser = "visitor"
      }
	  
	  if (this.siteURLIn === "") {
        this.siteURL = "."
      } else {
        this.siteURL = " at " + this.siteURLIn + "."
      }
		
      if (this.typeOfDev === "Individual") {
        this.devOrCompanyName = this.devName
        this.iOrWe = "I"
        this.myOrOur = "my"
        this.meOrUs = "me"
		this.areOrAm = "am"
      } else if (this.typeOfDev === "Company") {
        this.devOrCompanyName = this.companyName
        this.iOrWe = "we"
        this.myOrOur = "our"
        this.meOrUs = "us"
		this.areOrAm = "are"
      }
    },
    togglePrivacyModalVisibility: function () {
      this.generate()
      this.hasThirdPartyServicesSelected = this.checkForThirdPartyServicesEnabled()
      this.contentRenderType = 1
      this.showPrivacyModal = !this.showPrivacyModal
    },
    toggleGDPRPrivacyModalVisibility: function () {
      this.generate()
      this.hasThirdPartyServicesSelected = this.checkForThirdPartyServicesEnabled()
      this.contentRenderType = 1
      this.showGDPRPrivacyModal = !this.showGDPRPrivacyModal
    },
    toggleTermsModalVisibility: function () {
      this.generate()
      this.hasThirdPartyServicesSelected = this.checkForThirdPartyServicesEnabled()
      this.contentRenderType = 1
      this.showTermsModal = !this.showTermsModal
    },
    toggleDisclaimerModalVisibility: function () {
      this.showDisclaimerModal = !this.showDisclaimerModal
    },
  },
})
