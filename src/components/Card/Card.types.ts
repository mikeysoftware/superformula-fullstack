import { HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: any;
}

export default CardProps;