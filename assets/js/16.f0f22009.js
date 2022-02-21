(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{456:function(e,t,o){"use strict";o.r(t);var r=o(24),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frequently-asked-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),o("h2",{attrs:{id:"what-if-i-don-t-know-which-user-will-be-using-the-computer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-if-i-don-t-know-which-user-will-be-using-the-computer"}},[e._v("#")]),e._v(" What if I don’t know which user will be using the computer?")]),e._v(" "),o("p",[e._v("Do your best to find out, or assign machines to specific users ahead of time. Without this, user level customizations are impossible. However, you may find yourself in a shared-computer scenario where every computer gets the same 365 applications. Simply create a deployment for those 365 applications for all computers under that tenant.")]),e._v(" "),o("h2",{attrs:{id:"can-immy-join-azuread"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-immy-join-azuread"}},[e._v("#")]),e._v(" Can Immy join AzureAD?")]),e._v(" "),o("p",[e._v("Yes. Create a deployment for the Join AzureAD task. We use the bulk enrollment technique and generate a provisioning package to join the machine to AzureAD. At the time of writing, this requires you to create a user in each customer’s tenant. We plan to remove this requirement in the future.")]),e._v(" "),o("h2",{attrs:{id:"can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments"}},[e._v("#")]),e._v(" Can Immy help migrate my customers to AzureAD from On-Premises environments?")]),e._v(" "),o("p",[e._v("Yes, we have a "),o("a",{attrs:{href:"#task"}},[e._v("Task")]),e._v(" that utilizes Forensit’s ProfWiz Corporate Edition to associate the user’s profile to their Azure AD identity.")]),e._v(" "),o("h2",{attrs:{id:"domain-join-didn-t-work-what-gives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain-join-didn-t-work-what-gives"}},[e._v("#")]),e._v(" Domain Join didn’t work, what gives?")]),e._v(" "),o("p",[e._v("Make sure there is a Domain Controller in Immy for the machine. If you are using a supported RMM like CW Automate/Control setup the integration so the Domain Controller is imported automatically. Otherwise, you’ll need to install the ImmyAgent on a domain controller for that customer.")]),e._v(" "),o("p",[e._v("If the Domain Controller doesn’t have the red “Domain Controller” designation, press “Run Inventory”. This may happen if it was recently added to ImmyBot.")]),e._v(" "),o("p",[e._v("Pay attention to the script output, Immy may be reporting that there is a name collision, or that it was unable to run scripts on the domain controller, usually due to security software.")]),e._v(" "),o("h2",{attrs:{id:"why-are-my-computers-stuck-in-identification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-are-my-computers-stuck-in-identification"}},[e._v("#")]),e._v(" Why are my computers stuck in "),o("a",{attrs:{href:"#identification"}},[e._v("Identification")])]),e._v(" "),o("ol",[o("li",[e._v("The machine has a security tool like Defender for Endpoint, Crowdstrike, Bitdefender or Threatlocker blocking our scripts from running")])]),e._v(" "),o("ul",[o("li",[e._v("You'll want to create exclusions for ImmyBot")])]),e._v(" "),o("ol",[o("li",[e._v("WMI is broken on the machine (Usually on older machines)")])])])}),[],!1,null,null,null);t.default=i.exports}}]);