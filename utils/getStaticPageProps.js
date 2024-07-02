import { gql } from "@apollo/client";
import client from "client";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import CleanAndTransformBlocks from "./CleanAndTransformBlocks";

export const getStaticPageProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks(postTemplate: false)
            content
          }
          ... on Product {
            id
            title
            blocks(postTemplate: false)
          }
          ... on Post {
            id
            title
            content
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
          }
        }
        pageBy(uri: $uri) {
          content
          title
        }
      }
    `,
    variables: { uri }
  });

  // const posts = data.posts.nodes.map(post => ({
  //   id: post.id,
  //   title: post.title,
  //   content: post.content,
  //   uri: post.uri,
  // }));
  

  console.log(data.content, 'data__________________');

  return {
    props: {
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: CleanAndTransformBlocks(data.nodeByUri.blocks),
      // posts,
      // postContent: data.nodeByUri.content || null, // Handle content for posts
    }
  };
};
