import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'
import FooterInput from '../FooterInput'
import FooterSocialLinksList from '../FooterSocialLinksList'
import { v4 as uuidv4 } from 'uuid';

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
  const [copyright, setCopyright] = useState(footerCopyright || "");
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
        <FooterInput state={copyright} setState={setCopyright} label={"Copyright"}/>
      </div>
      
      <FooterSocialLinksList socialLinks={socialLinks} setSocialLinks={setSocialLinks}/>
      
      <button
          className='btn btn--purple'
          onClick={() => {
              const dataTobeSent = {
                heading, 
                subHeading,
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
