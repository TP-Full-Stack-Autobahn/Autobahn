import React from "react";
import Head from "next/head";

type HeadProps = {
    title: string,
    description: string
}

const HeadComponent:React.FC<HeadProps> = (props) => {
    const {title, description} = props

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeadComponent