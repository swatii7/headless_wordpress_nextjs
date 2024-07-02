import { theme } from "theme/theme";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Heading } from "components/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import Image from 'components/ImageComponent/ImageComponent'
import { CallToActionButton } from "components/CallToActionButton";
import { Cover } from "components/Cover";
import { FormspreeForm } from "components/formspreeForm";

export const BlockRenderer = ({ blocks }) => {
    return (
        blocks?.map(block => {
            if (!block) {
                return null;
            }
            switch (block.name) {
                case "core/paragraph": {
                    return (
                        <Paragraph
                            key={block.id}
                            content={block.attributes.content}
                            textAlign={block.attributes.textAlign}
                            textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                        />
                    );
                }
                case "core/heading": {
                    return (
                        <Heading
                            key={block.id}
                            content={block.attributes.content}
                            textAlign={block.attributes.textAlign}
                            level={block.attributes.level}
                            textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                            padding={block.attributes.style?.spacing?.padding}
                            textTransform={block.attributes.style?.typography?.textTransform}
                        />
                    );
                }
                case "core/columns": {
                    return (
                        <Columns key={block.id} isStackedOnMobile={block.attributes.isStackedOnMobile}>
                            <BlockRenderer blocks={block.innerBlocks} />
                        </Columns>
                    );
                }
                case "core/column": {
                    return (
                        <Column key={block.id}>
                            <BlockRenderer blocks={block.innerBlocks} />
                        </Column>
                    );
                }
                case "core/image": {
               return (
                <Image key={block.id} 
                 src={block.attributes.url}
                 width={block.attributes.width}
                 height={block.attributes.height}
                 href={block.attributes.url}
                 alt={block.attributes?.alt || ''}
                  />
               )
                }
                case "acf/ctabutton": {
                    return (
                        <CallToActionButton
                            key={block.id}
                            label={block.attributes.data.label}
                            destination={block.attributes.data.destination}
                            align={block.attributes.data.align}
                            backgroundColor={block.attributes.data.background_color}
                            borderRadius={block.attributes.data.border_radius}
                            display={block.attributes.data.display}
                            fontWeight={block.attributes.data.font_weight}
                            margin={block.attributes.data.margin}
                            padding={block.attributes.data.padding}
                            textColor={block.attributes.data.text_color}
                        />
                    );
                }
                case "core/cover": {
                    return (
                        <Cover key={block.id} background={block.attributes.url}>
                            <BlockRenderer blocks={block.innerBlocks} />
                        </Cover>
                    );
                }
                case "acf/formspreeform": {
                    return (
                        <FormspreeForm key={block.id} formId={block.attributes.data.form_id} />
                    )
                }
                default:
                    return null;
            }
        }) || null
    );
};
