import { getStaticPageProps } from "utils/getStaticPageProps"
import CustomPage from "./[...slug]";

export default CustomPage;

export const getStaticProps = getStaticPageProps;