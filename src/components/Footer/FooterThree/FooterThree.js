import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'
import FooterInput from '../FooterInput'
import FooterSocialLinksList from '../FooterSocialLinksList'
import FooterButton from '../FooterButton'
import { v4 as uuidv4 } from 'uuid';

export default function FooterThree(props) {
  const { 
    footerHeading,
    footerSubHeading,
    footerBlocks,
    footerLogo,
    footerLogoLink,
    footerCopyright,
    footerPlaceholderText,
    footerSocialLinks,
    footerButton,
  } = props;

  const { handlePostFooterData } = useContext(FooterContext);

  const [heading, setHeading] = useState(footerHeading || "");
  const [subHeading, setSubHeading] = useState(footerSubHeading || "");
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
  const [copyright, setCopyright] = useState(footerCopyright || "");
  const [placeholderText, setPlaceholderText] = useState(footerPlaceholderText || "");
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

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={heading} setState={setHeading} label={"Heading"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={subHeading} setState={setSubHeading} label={"Sub Heading"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={logoImgURL} setState={setLogoImgURL} label={"Logo"}/>
      </div>
      
      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={logoLink} setState={setLogoLink} label={"Logo Click Url"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={copyright} setState={setCopyright} label={"Copyright"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <FooterInput state={placeholderText} setState={setPlaceholderText} label={"Placeholder Text"}/>
      </div>

      <FooterButton button={button} setButton={setButton} />

      <FooterSocialLinksList socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>

      <button
          className='btn btn--purple'
          onClick={() => {
              const dataTobeSent = {
                heading, 
                subHeading, 
                blocks, 
                logoImgURL,
                logoLink,
                copyright, 
                placeholderText, 
                button,
                socialLinks,
              };
              handlePostFooterData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}
