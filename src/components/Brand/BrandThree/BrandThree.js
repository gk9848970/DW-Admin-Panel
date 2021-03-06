import React, { useState, useContext } from 'react'
import { BrandContext } from '../Brand';
import BrandImageInput from '../BrandImageInput'
import BrandInput from '../BrandInput'
import { v4 as uuidv4 } from 'uuid';

export default function BrandThree(props) {
  const {
    brandTitle,
    brandDescription,
    brandGrid, 
  } = props;

  const { handlePostBrandData } = useContext(BrandContext);

  // 3 Columns, Structure {2, 3, 2}
  const gridStructure = [
    [{ id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }],
    [{ id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }],
    [{ id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }],
  ]

  let structureIsSame = isProperStructure(gridStructure, brandGrid);

  const [imageGrid, setImageGrid] = useState(
    structureIsSame ? 
    brandGrid : gridStructure
  );
  const [title, setTitle] = useState(brandTitle || "");
  const [description, setDescription] = useState(brandDescription || "");

  function isProperStructure(gridStructure, brandGrid) {
    if(brandGrid == null) {
      return false;
    }

    if(gridStructure.length !== brandGrid.length) {
      return false;
    }

    for(let i = 0; i < gridStructure.length; i++) {
      if(gridStructure[i].length !==  brandGrid[i].length) {
        return false;
      }
    }

    return true;
  }

  function handleImageInputChange(imageRowNumber, imageColumnNumber, newValue) {
    const newImageGrid = [...imageGrid];
    const imageToChange = newImageGrid[imageRowNumber][imageColumnNumber];
    imageToChange.image = newValue;
    setImageGrid(newImageGrid);
  }

  const imageElementsRowise = imageGrid.map((imageRow, rowIndex) => {
    const rowImages = imageRow.map((imageObj, columnIndex) => {
        return (
          <BrandImageInput
            key={imageObj.id}
            label="Image URL" 
            value={imageObj.image}
            imageRowNumber={rowIndex}
            imageColumnNumber={columnIndex}
            handleImageInputChange={handleImageInputChange}
          />
        )
    })

    return rowImages;

  })

  const imageElementsSpreadOut = [
    ...imageElementsRowise[0], 
    ...imageElementsRowise[1],
    ...imageElementsRowise[2],
  ]

  return (
    <div>
      <div className='input__two-block-layout'>
        <BrandInput state={title} setState={setTitle} label={"Title"}/>
        <BrandInput state={description} setState={setDescription} label={"Description"}/>
      </div>

      <div className='mb-1o5x-input-gap'>
      <span className='brand__text-span'>Brand Images</span>
        <div>
          {imageElementsSpreadOut}
        </div>
      </div>
      
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = { imageGrid, title, description };
            handlePostBrandData(dataTobeSent);
      }}>
        Post Brand Data
      </button>
    </div>
  )
}
