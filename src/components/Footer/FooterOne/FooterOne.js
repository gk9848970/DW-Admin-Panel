import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'
import FooterInput from '../FooterInput'
import FooterSocialLinksList from '../FooterSocialLinksList'
import { v4 as uuidv4 } from 'uuid';

export default function FooterOne(props) {
  const { 
    footerBlocks, 
    footerLogo,
    footerLogoLink,
    footerAddress,
    footerCopyright,
    footerSocialLinks,
  } = props;

  const { handlePostFooterData } = useContext(FooterContext);
  const [blocks, setBlocks] = useState(footerBlocks || 
    [
      {
        id: uuidv4(),
        heading: "Heading",
        links: [
            {
                id: uuidv4(),
                text: "Link Name",
                linkURL: "www.bing.com",
            },
        ],
      }
    ]
  );
  const [logoImgURL, setLogoImgURL] = useState(footerLogo || "");
  const [logoLink, setLogoLink] = useState(footerLogoLink || "");
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
        setBlocks={setBlocks} />
      
      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={logoImgURL} setState={setLogoImgURL} label={"Logo Image"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={logoLink} setState={setLogoLink} label={"Logo Click Url"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={address} setState={setAddress} label={"Address"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={copyright} setState={setCopyright} label={"Copyright"}/>
      </div>
    
      <FooterSocialLinksList socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>

      <button
          className='btn btn--purple'
          onClick={() => {
              const dataTobeSent = {
                blocks, 
                logoImgURL, 
                logoLink, 
                address, 
                copyright, 
                socialLinks
              };
              handlePostFooterData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}
