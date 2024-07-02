import { gql } from "@apollo/client";
import client from "client";
import CustomPage from "../components/CustomPage/CustomPage";
import { getStaticPageProps } from "utils/getStaticPageProps";

export default CustomPage; 
export const getStaticProps = getStaticPageProps;

export const getStaticPaths = async () =>{
    const {data} = await client.query({
        query: gql`
        query AllPageQuery {
            pages {
              nodes {
                uri
                content
              }
            }
            products {
                nodes {
                  uri
                }
              }
              posts {
                nodes {
                  title
                  uri
                  content
                  link
                }
              }
          }
        `
    })

    console.log(data, 'data_________________')

    return{
        paths: [...data.pages.nodes].map(page => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split("/")
            },
        })),
        fallback: 'blocking'
    }
}