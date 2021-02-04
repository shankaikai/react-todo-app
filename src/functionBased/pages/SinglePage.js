import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {

    const aboutData = [
        {
            slug: "about-app",
            title: "About the App",
            description: "A simple todo application."
        },
        {
            slug: "about-author",
            title: "About the Author",
            description: "This app was developed by Shan Kai, a SUTD-SMU Dual Degree student."
        }
    ]

    const { slug } = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const { title, description } = aboutContent //destructuring

    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SinglePage