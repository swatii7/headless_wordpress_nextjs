import React from 'react'
import { getFontSizeForHeadings, getTextAlign } from 'utils/Fonts'

export const Heading = ({ content, textAlign, level, textColor, padding, textTransform }) =>{

    const paddingValues = `${padding?.top || 0} ${padding?.right || 0} ${padding?.bottom || 0} ${padding?.left || 0}`;
    const tag = React.createElement(`h${level}`,{
        dangerouslySetInnerHTML: {__html: content},
        style:{color: textColor, padding: paddingValues, textTransform: textTransform},
        className: `font-heading max-w-5xl mx-auto ${getFontSizeForHeadings(level)} ${getTextAlign(textAlign)}`
    })
    return tag
}