import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";

 const CustomPage = (props) =>{

  console.log("PROPS-ONE:", props)
    return(
        <>
      <MainMenu items={props.mainMenuItems} key={props.id} />
      <BlockRenderer blocks={props.blocks} />
    </>
    )
 }

export default CustomPage;