# Frequently Asked Questions

## Do I need a separate USB/Installer per tenant?
No. Create a USB pointing to your own tenant (or create an “Onboarding” tenant) and don’t select the Auto-Onboard option. 

You will change the tenant of the computer on the Onboarding area of the computer after it comes into New Computers 

## Will ImmyBot start doing anything without my consent? Like when I save a deployment, will it automatically deploy?

ImmyBot does not deploy anything automatically. You can feel safe saving your Deployments. Think of them like documenting how things SHOULD be. If you want Immy to automatically enforce deployments, you would need the Immy Deploy plan which allows you to create schedules. 

Think of it like if Group Policy only updated if you manually ran gpupdate /force or otherwise specified a schedule for the gpupdates to happen. We understand that updating and installing software on existing computers can be intrusive to the user which is why we schedule these actions out and give the user the ability to postpone via interactive emails.

IMPORTANT: If you setup integration with your RMM, when you map an RMM client to an ImmyBot tenant, ImmyBot will begin running inventory scripts on those machines every 24 hours. These scripts are read-only, but if you have aggressive monitoring software it may cause false alarms.

## What if I don’t know which user will be using the computer?

Do your best to find out, or assign machines to specific users ahead of time. Without this, user level customizations are impossible. However, you may find yourself in a shared-computer scenario where every computer gets the same 365 applications. Simply create a deployment for those 365 applications for all computers under that tenant.

## Can Immy join AzureAD?

Yes. Create a deployment for the Join AzureAD task. We use the bulk enrollment technique and generate a provisioning package to join the machine to AzureAD. At the time of writing, this requires you to create a user in each customer’s tenant. We plan to remove this requirement in the future.

## Can Immy help migrate my customers to AzureAD from On-Premises environments?

Yes, we have a [Task](#task) that utilizes Forensit’s ProfWiz Corporate Edition to associate the user’s profile to their Azure AD identity.

## Domain Join didn’t work, what gives?

Make sure there is a Domain Controller in Immy for the machine. If you are using a supported RMM like CW Automate/Control setup the integration so the Domain Controller is imported automatically. Otherwise, you’ll need to install the ImmyAgent on a domain controller for that customer.

If the Domain Controller doesn’t have the red “Domain Controller” designation, press “Run Inventory”. This may happen if it was recently added to ImmyBot.

Pay attention to the script output, Immy may be reporting that there is a name collision, or that it was unable to run scripts on the domain controller, usually due to security software.

## Why are my computers stuck in [Identification](#identification)

1. The machine has a security tool like Defender for Endpoint, Crowdstrike, Bitdefender or Threatlocker blocking our scripts from running

- You'll want to create exclusions for ImmyBot

1. WMI is broken on the machine (Usually on older machines)

## Can you target devices in Azure Groups?

Yes, but ImmyBot requires an additional permission on the ImmyBot app registration. You need to grant the `Microsoft Graph - Devices.Read.All` permission in order for devices to be pulled from Azure Groups.

## How do I uninstall the ImmyAgent?
Run the following from Command Line
```
wmic product where name ="ImmyBot Agent" call uninstall /nointeractive
```
 

## How/are we able to define which version of Windows is installed during the initial setup?
 
ImmyBot doesn't install Windows on bare metal. The workflow is you unbox the system from Dell, HP, Lenovo, Microsoft, or your manufacturer of choice and insert the USB with the ImmyBot.ppkg file at the root while the machine is at the out of box screen.

We don't image the machine, we script the factory image into compliance.

We can, however, install Feature Updates during Onboarding (as well as after Onboarding)

## Since Immy.Bot doesn’t use an ISO, does it require a device to have the ability to have 2 USB devices plugged in? One for a Windows ISO and one for the ImmyBot ppkg?
 
If you want to wipe the computer you can use the Media Creation Tool to create a Windows Setup flash drive and then put our .ppkg file on it. After installing Windows, it will automatically apply the .ppkg

## Does Immy rely on the Windows preboot for drivers during initial deployment, or does the ImmyBot agent installer have drivers?

Since we are working with the manufacturer's image, all drivers are typically installed. We will automatically install Dell, HP, and Lenovo driver and BIOS updates via those manufacturer's tools (Dell Command, HP Image Assistant, Lenovo System Update)

## Does Immy’s setup process support a USB NIC for WiFi?  If so, how do we present those drivers to Immy, or do we even need to?

I've found Windows has built in drivers for most USB NICs. If yours doesn't have drivers built into Windows, I'd suggest purchasing one that does. 

## SentinelOne - How do we define which site Immy.Bot places the agent in during installation of the S1 agent?

Supply ImmyBot with an API Key to SentinelOne, and Immy will look for a Site in your SentinelOne instance that matches the name of the Tenant you are onboarding the computer for.
 
## Are there any repository limits for software deployments?  Either to the size of custom software or number of custom installers we can upload?

There are currently no limits. Everything you upload goes into an Azure Storage Account created just for your ImmyBot instance. Don't be the reason we can't have nice things.

# For computer rename, are there any other operators we can use when naming devices other then the ones shown? Can we add operators?

You can duplicate the Task into your instance an manipulate it however you like. If it's something you think other MSPs could use, I'd encourage you to submit a ticket to support@immy.bot and we can add it.
 
## Employee profile caching during on-boarding - is this supported?  If so/how?

ImmyBot will create a profile for the Primary Person you selected for this machine on the Onboarding screen (It does this via the "Create Profile for Primary Person" task)

We do this so subsequent tasks that set user level settings like default PDF handler and default browser, have the profile for the primary person and thus that user's HKCU where those settings live.

## For purchasing Immy, do you guys prefer Credit card or invoice? Would you rather us pay monthly, or can we pay all upfront?

We prefer monthly credit card or ACH.

## Is Immy able to group devices and then do role based deployments to them? I assume this is done by tags?

Yes, you would accomplish this with tags

## BitLocker - does this write the key to Azure AD by chance?

Yes, but we can't verify that it is written to Azure AD as that would require additional privileges that our App Registration doesn't request.

We also write the Bitlocker Recovery Key to Active Directory for Domain Joined machines. This doesn't require any Group Policy setup, or line of site to the domain controller. This works as long as the machine is joined to a domain and there is a domain controller for that domain in ImmyBot.
