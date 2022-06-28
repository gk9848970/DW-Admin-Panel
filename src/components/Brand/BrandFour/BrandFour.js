import React, { useState, useContext } from 'react'
import { BrandContext } from '../Brand';
import BrandImageInput from '../BrandImageInput'
import { v4 as uuidv4 } from 'uuid';

export default function BrandFour({ brandGrid }) {
  const { handlePostBrandData } = useContext(BrandContext);

  // 5 Columns, Structure {1, 2, 3, 2, 1}
  const gridStructure = [
    [{ id: uuidv4(), image: "" }],
    [{ id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }],
    [{ id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }],
    [{ id: uuidv4(), image: "" }, { id: uuidv4(), image: "" }],
    [{ id: uuidv4(), image: "" }],
  ]

  let structureIsSame = isProperStructure(gridStructure, brandGrid);

  const [imageGrid, setImageGrid] = useState(
    structureIsSame ? 
    brandGrid : gridStructure
  );

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
    ...imageElementsRowise[3],
    ...imageElementsRowise[4],
  ]

  return (
    <div>
      {imageElementsSpreadOut}
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { imageGrid };
            handlePostBrandData(dataTobeSent);
      }}>
        Post Brand Data
      </button>
    </div>
  )
}
