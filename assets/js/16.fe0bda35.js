(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{455:function(e,t,r){"use strict";r.r(t);var o=r(24),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frequently-asked-questions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),r("h2",{attrs:{id:"what-if-i-don-t-know-which-user-will-be-using-the-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-if-i-don-t-know-which-user-will-be-using-the-computer"}},[e._v("#")]),e._v(" What if I don’t know which user will be using the computer?")]),e._v(" "),r("p",[e._v("Do your best to find out, or assign machines to specific users ahead of time. Without this, user level customizations are impossible. However, you may find yourself in a shared-computer scenario where every computer gets the same 365 applications. Simply create a deployment for those 365 applications for all computers under that tenant.")]),e._v(" "),r("h2",{attrs:{id:"can-immy-join-azuread"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-immy-join-azuread"}},[e._v("#")]),e._v(" Can Immy join AzureAD?")]),e._v(" "),r("p",[e._v("Yes. Create a deployment for the Join AzureAD task. We use the bulk enrollment technique and generate a provisioning package to join the machine to AzureAD. At the time of writing, this requires you to create a user in each customer’s tenant. We plan to remove this requirement in the future.")]),e._v(" "),r("h2",{attrs:{id:"can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-immy-help-migrate-my-customers-to-azuread-from-on-premises-environments"}},[e._v("#")]),e._v(" Can Immy help migrate my customers to AzureAD from On-Premises environments?")]),e._v(" "),r("p",[e._v("Yes, we have a "),r("a",{attrs:{href:"#task"}},[e._v("Task")]),e._v(" that utilizes Forensit’s ProfWiz Corporate Edition to associate the user’s profile to their Azure AD identity.")]),e._v(" "),r("h2",{attrs:{id:"domain-join-didn-t-work-what-gives"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#domain-join-didn-t-work-what-gives"}},[e._v("#")]),e._v(" Domain Join didn’t work, what gives?")]),e._v(" "),r("p",[e._v("Make sure there is a Domain Controller in Immy for the machine. If you are using a supported RMM like CW Automate/Control setup the integration so the Domain Controller is imported automatically. Otherwise, you’ll need to install the ImmyAgent on a domain controller for that customer.")]),e._v(" "),r("p",[e._v("If the Domain Controller doesn’t have the red “Domain Controller” designation, press “Run Inventory”. This may happen if it was recently added to ImmyBot.")]),e._v(" "),r("p",[e._v("Pay attention to the script output, Immy may be reporting that there is a name collision, or that it was unable to run scripts on the domain controller, usually due to security software.")]),e._v(" "),r("h2",{attrs:{id:"why-are-my-computers-stuck-in-identification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-are-my-computers-stuck-in-identification"}},[e._v("#")]),e._v(" Why are my computers stuck in "),r("a",{attrs:{href:"#identification"}},[e._v("Identification")])]),e._v(" "),r("ol",[r("li",[e._v("The machine has a security tool like Defender for Endpoint, Crowdstrike, Bitdefender or Threatlocker blocking our scripts from running")])]),e._v(" "),r("ul",[r("li",[e._v("You'll want to create exclusions for ImmyBot")])]),e._v(" "),r("ol",[r("li",[e._v("WMI is broken on the machine (Usually on older machines)")])]),e._v(" "),r("h2",{attrs:{id:"can-you-target-devices-in-azure-groups"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-you-target-devices-in-azure-groups"}},[e._v("#")]),e._v(" Can you target devices in Azure Groups?")]),e._v(" "),r("p",[e._v("Yes, but ImmyBot requires an additional permission on the ImmyBot app registration. You need to grant the "),r("code",[e._v("Microsoft Graph - Devices.Read.All")]),e._v(" permission in order for devices to be pulled from Azure Groups.")])])}),[],!1,null,null,null);t.default=a.exports}}]);