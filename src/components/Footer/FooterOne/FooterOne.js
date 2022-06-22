import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'
import FooterInput from '../FooterInput'
import FooterSocialLinksList from '../FooterSocialLinksList'

export default function FooterOne(props) {
  const { 
    footerBlocks, 
    footerLogo,
    footerAddress,
    footerCopyright,
    footerSocialLinks,
  } = props;

  const { handlePostFooterData } = useContext(FooterContext);
  const [blocks, setBlocks] = useState(footerBlocks || []);
  const [logoImgURL, setLogoImgURL] = useState(footerLogo || "");
  const [address, setAddress] = useState(footerAddress || "");
  const [copyright, setCopyright] = useState(footerCopyright || "");
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
      <FooterInput state={logoImgURL} setState={setLogoImgURL} label={"Logo"}/>
      <FooterInput state={address} setState={setAddress} label={"Address"}/>
      <FooterInput state={copyright} setState={setCopyright} label={"Copyright"}/>
      <br />
      <FooterSocialLinksList socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>
      <br />
      <button 
          onClick={() => {
              const dataTobeSent = {blocks, logoImgURL, address, copyright, socialLinks};
              handlePostFooterData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}
