import React from 'react';

const EditionOption = ({edition, index})=>
{
    if (edition.code === '2ED')
    {
        return (
            <option value={edition.code} selected>{edition.name}</option>
        )
    }
    else
        {
        return(
            <option value={edition.code}>{edition.name}</option>
        )}
}

export default EditionOption;