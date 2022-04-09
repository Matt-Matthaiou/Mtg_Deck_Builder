import React from 'react';

const PageChange = ({page, array, changePage})=>
{
   let value = page
    if (value === 1 & array === 100)
    {
        return(
        <div>
            <span>{value}</span> <span>&#8594;</span>
        </div> 
        )
    }

    else if (value === 1)
    {
        return(
            <span>{value}</span>
        )
    }

    else if (array === 100)
    {
        return (
            <div>
                <span>&#8592;</span> <span>{value}</span> <span>&#8594;</span>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <span>&#8592;</span> <span>{value}</span> 
            </div>
        )
    }

    
}

export default PageChange;