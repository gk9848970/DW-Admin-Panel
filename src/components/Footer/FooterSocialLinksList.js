import React from 'react'
import FooterSocialLink from './FooterSocialLink'

// const colourOptions = [
//     { value: 'Facebook', label: 'Facebook', linkURl: ''},
//     { value: 'Instagram', label: 'Instagram', linkURl: 'asasddas'},
//     { value: 'YouTube', label: 'YouTube', linkURl: 'asasddas'},
//     { value: 'Twitter', label: 'Twitter', linkURl: 'asasddas'},
//     { value: 'LinkedIn', label: 'LinkedIn', linkURl: 'asasddas'},
// ];

export default function FooterSocialLinksList({ socialLinks, setSocialLinks}) {
    function handleSocialLinkInput(socialSite, newLinkValue) {
        const newSocialLinks = {...socialLinks};
        newSocialLinks[socialSite] = {linkURL: newLinkValue};
        setSocialLinks(newSocialLinks);
    }

    return (
        <div className='mb-1o5x-input-gap'>
            <span className='footer__social-links-span'>Select Social Media List</span>
            <div>
                <FooterSocialLink 
                    labelText={"Instagram Link"} 
                    name={"instagramLink"} 
                    value={socialLinks["instagram"].linkURL} 
                    socialSiteName={"instagram"}
                    handleSocialLinkInput={handleSocialLinkInput}
                />
                <FooterSocialLink 
                    labelText={"Youtube Link"} 
                    name={"youtubeLink"} 
                    value={socialLinks["youtube"].linkURL} 
                    socialSiteName={"youtube"}
                    handleSocialLinkInput={handleSocialLinkInput}
                />
                <FooterSocialLink 
                    labelText={"Twitter Link"} 
                    name={"twitterLink"} 
                    value={socialLinks["twitter"].linkURL} 
                    socialSiteName={"twitter"}
                    handleSocialLinkInput={handleSocialLinkInput}
                />
                <FooterSocialLink 
                    labelText={"Linkedin Link"} 
                    name={"linkedinLink"} 
                    value={socialLinks["linkedin"].linkURL} 
                    socialSiteName={"linkedin"}
                    handleSocialLinkInput={handleSocialLinkInput}
                />
                <FooterSocialLink 
                    labelText={"Facebook Link"} 
                    name={"facebookLink"} 
                    value={socialLinks["facebook"].linkURL} 
                    socialSiteName={"facebook"}
                    handleSocialLinkInput={handleSocialLinkInput}
                />
            </div>
        </div>
  )
}