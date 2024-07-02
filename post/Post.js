import { gql } from "@apollo/client";
import client from "client";

export const Post = () => {
    return(
        <h2>Post Page</h2>
    )
}

export const getStaticPageProps = async (context) =>{
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}` : "/";
    const {data} = await client.query({
        query: gql`
        query PostQuery {
            posts {
              nodes {
                title
                uri
              }
            }
          }
        `
    })
}

console.log(data, 'data____________')

return{
    props: {
        myExampleProps: 'test'
    }
}