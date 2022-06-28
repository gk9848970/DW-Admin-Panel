import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'
import FooterInput from '../FooterInput'
import FooterSocialLinksList from '../FooterSocialLinksList'
import FooterButton from '../FooterButton'

export default function FooterTwo(props) {
  const { 
    footerHeading,
    footerSubHeading,
    footerBlocks, 
    footerLogo,
    footerLogoLink,
    footerPlaceholderText,
    footerCopyright,
    footerSocialLinks,
    footerButton,
  } = props;

  const { handlePostFooterData } = useContext(FooterContext);

  const [heading, setHeading] = useState(footerHeading || "");
  const [subHeading, setSubHeading] = useState(footerSubHeading || "");
  const [blocks, setBlocks] = useState(footerBlocks || []);
  const [logoImgURL, setLogoImgURL] = useState(footerLogo || "");
  const [logoLink, setLogoLink] = useState(footerLogoLink || "");
  const [placeholderText, setPlaceholderText] = useState(footerPlaceholderText || "");
  const [copyright, setCopyright] = useState(footerCopyright || "");
  const [button, setButton] = useState(footerButton || {text: "", btnURL: "" });
  const [socialLinks, setSocialLinks] = useState(footerSocialLinks || 
    {
      facebook: { linkURL: "" },
      instagram: { linkURL: "" },
      youtube: { linkURL: "" },
      twitter: { linkUrl: "" },
      linkedin: { linkURL: "" }
  });

  return (
    <>
      <FooterBlocksList 
        blocks={blocks}
        setBlocks={setBlocks}
      />

      <br />
      <FooterInput state={heading} setState={setHeading} label={"Heading"}/>
      <FooterInput state={subHeading} setState={setSubHeading} label={"Sub Heading"}/>
      <FooterInput state={logoImgURL} setState={setLogoImgURL} label={"Logo Image"}/>
      <FooterInput state={logoLink} setState={setLogoLink} label={"Logo Click Url"}/>
      <FooterInput state={placeholderText} setState={setPlaceholderText} label={"Placeholder Text"}/>
      <FooterInput state={copyright} setState={setCopyright} label={"Copyright"}/>
      <br />
      <FooterButton button={button} setButton={setButton} />
      <br />
      <FooterSocialLinksList socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>
      <br />
      <button 
          onClick={() => {
              const dataTobeSent = {
                heading, 
                subHeading, 
                blocks,
                button, 
                logoImgURL,
                logoLink,
                placeholderText,
                copyright, 
                socialLinks,
              };
              handlePostFooterData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}

/*
export const footerSocialData = {
  facebook: { linkURL: "" },
  instagram: { linkURL: "" },
  youtube: { linkURL: "" },
  twitter: { linkUrl: "" },
  linkedin: { linkURL: "" }
}
;
*/
