import { v4 as uuid } from "uuid";

const CleanAndTransformBlocks = (blocksJSON) =>{

    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) =>{
        b.forEach(block => {
            block.id = uuid();
            if(block.innerBlocks?.length){
                assignIds(block.innerBlocks);
            }
        });
    }

    assignIds(blocks);

    return blocks
}

export default CleanAndTransformBlocks;