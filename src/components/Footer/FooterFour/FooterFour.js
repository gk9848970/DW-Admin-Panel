import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'
import FooterInput from '../FooterInput'
import FooterSocialLinksList from '../FooterSocialLinksList'

export default function FooterFour(props) {
  const {
    footerHeading,
    footerSubHeading,
    // footerLogoLink,
    footerCopyright,
    footerBlocks,
    footerSocialLinks,
  } = props;

  const { handlePostFooterData } = useContext(FooterContext);

  const [heading, setHeading] = useState(footerHeading || "");
  const [subHeading, setSubHeading] = useState(footerSubHeading || "");
  // const [logoLink, setLogoLink] = useState(footerLogoLink || "");
  const [copyright, setCopyright] = useState(footerCopyright || "");
  const [blocks, setBlocks] = useState(footerBlocks || []);
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
      {/* <FooterInput state={logoLink} setState={setLogoLink} label={"Logo Click Url"}/> */}
      <FooterInput state={copyright} setState={setCopyright} label={"Copyright"}/>
      <br />
      <FooterSocialLinksList socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>
      <br />
      <button 
          onClick={() => {
              const dataTobeSent = {
                heading, 
                subHeading,
                // logoLink,
                copyright,
                blocks, 
                socialLinks
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
