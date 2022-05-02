/*  
    Open Source Website or App Privacy Policy Generator: A simple web app to generate a 
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
 
var thirdPartyServicesJsonArray = [
  {
    "name": "Google Analytics",
    "model": "google",
    "google": true,
    "logo": "images/third_party_logos/google.svg",
    "link": {
      "privacy": "https://policies.google.com/privacy"
    }
  },
  {
    "name": "Google Analytics for Firebase",
    "model": "firebase",
    "firebase": false,
    "logo": "images/third_party_logos/firebase.svg",
    "link": {
      "privacy": "https://firebase.google.com/policies/analytics"
    }
  },
  {
    "name": "YouTube",
    "model": "yt",
    "yt": false,
    "logo": "images/third_party_logos/yt.png",
    "link": {
      "privacy": "https://policies.google.com/privacy"
    }
  },
  {
    "name": "Twitter",
    "model": "twitter",
    "twitter": false,
    "logo": "images/third_party_logos/twitter.svg",
    "link": {
      "privacy": "https://twitter.com/privacy"
    }
  },
  {
    "name": "Facebook",
    "model": "facebook",
    "facebook": false,
    "logo": "images/third_party_logos/facebook.svg",
    "link": {
      "privacy": "https://www.facebook.com/about/privacy/"
    }
  },
  {
    "name": "WhatsApp",
    "model": "whatsapp",
    "whatsapp": false,
    "logo": "images/third_party_logos/whatsapp.svg",
    "link": {
      "privacy": "https://www.whatsapp.com/legal/privacy-policy/"
    }
  },
    {
    "name": "Instagram",
    "model": "insta",
    "insta": false,
    "logo": "images/third_party_logos/insta.svg",
    "link": {
      "privacy": "https://help.instagram.com/519522125107875"
    }
  },
  {
    "name": "Messenger",
    "model": "msgr",
    "msgr": false,
    "logo": "images/third_party_logos/msgr.svg",
    "link": {
      "privacy": "https://www.messenger.com/privacy"
    }
  },
  {
    "name": "Disqus",
    "model": "disqus",
    "disqus": false,
    "logo": "images/third_party_logos/disqus.svg",
    "link": {
      "privacy": "https://help.disqus.com/en/articles/1717103-disqus-privacy-policy"
    }
  },
  {
    "name": "Microsoft Clarity",
    "model": "clarity",
    "clarity": false,
    "logo": "images/third_party_logos/clarity.png",
    "link": {
      "privacy": "https://privacy.microsoft.com/en-gb/privacystatement"
    }
  },
  {
    "name": "Matomo",
    "model": "matomo",
    "matomo": false,
    "logo": "images/third_party_logos/matomo.png",
    "link": {
      "privacy": "https://matomo.org/privacy-policy/"
    }
  },
  {
    "name": "Statcounter",
    "model": "statcounter",
    "statcounter": false,
    "logo": "images/third_party_logos/statcounter.svg",
    "link": {
      "privacy": "https://statcounter.com/about/legal/"
    }
  },
  {
    "name": "Fathom Analytics",
    "model": "fathom",
    "fathom": false,
    "logo": "images/third_party_logos/fathom.ico",
    "link": {
      "privacy": "https://usefathom.com/privacy/"
    }
  },
  {
    "name": "Yandex.Metrika",
    "model": "yandex",
    "yandex": false,
    "logo": "images/third_party_logos/yandex.svg",
    "link": {
      "privacy": "https://yandex.com/legal/privacy/"
    }
  },
  {
    "name": "Hubspot",
    "model": "hubspot",
    "hubspot": false,
    "logo": "images/third_party_logos/hubspot.svg",
    "link": {
      "privacy": "https://legal.hubspot.com/privacy-policy"
    }
  },
  {
    "name": "Mixpanel",
    "model": "mixpanel",
    "mixpanel": false,
    "logo": "images/third_party_logos/mixpanel.png",
    "link": {
      "privacy": "https://mixpanel.com/legal/privacy-policy/"
    }
  }
]
